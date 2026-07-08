import test from "node:test";
import assert from "node:assert/strict";

import { buildExtensionManifest } from "../src/services/manifestBuilder";
import { getBrowserCapabilities } from "../src/services/browserCapabilities";
import {
  buildNodeCatalog,
  buildVisibleNodeCatalog,
} from "../src/services/nodeCatalog";
import { getBuildOutputDir } from "../src/services/buildTargetConfig";
import { assertTriggerInitializationSucceeded } from "../src/services/triggerSetupGuard";

const baseManifest = {
  manifest_version: 3,
  name: "Houdin",
  permissions: ["storage", "userScripts", "webRequest", "tabs"],
  host_permissions: ["<all_urls>"],
  background: {
    service_worker: "src/background/background.ts",
    type: "module",
  },
} as const;

test("Safari capabilities disable unsupported extension features", () => {
  const capabilities = getBrowserCapabilities("safari");

  assert.equal(capabilities.httpRequestTriggers, false);
  assert.equal(capabilities.userScripts, false);
  assert.equal(capabilities.openPopup, false);
});

test("Safari manifest strips unsupported permissions", () => {
  const manifest = buildExtensionManifest(baseManifest, {
    target: "safari",
    isDev: false,
    version: "5.6.0",
  });

  assert.equal(manifest.version, "5.6.0");
  assert.deepEqual(manifest.permissions, ["storage", "tabs"]);
  assert.equal(manifest.background?.service_worker, "src/background/background.ts");
});

test("Safari keeps unsupported nodes for lookup but hides them from visible catalogs", () => {
  const catalog = buildNodeCatalog("safari");
  const visibleCatalog = buildVisibleNodeCatalog("safari");

  assert.equal(catalog.actions["custom-script"]?.metadata.hidden, true);
  assert.equal(catalog.triggers["http-trigger"]?.metadata.hidden, true);
  assert.equal(visibleCatalog.actions["custom-script"], undefined);
  assert.equal(visibleCatalog.triggers["http-trigger"], undefined);
  assert.ok(catalog.actions["click-element"]);
  assert.ok(catalog.triggers["page-load"]);
});

test("Safari builds use a dedicated output directory", () => {
  assert.equal(getBuildOutputDir("chrome"), "dist");
  assert.equal(getBuildOutputDir("firefox"), "dist");
  assert.equal(getBuildOutputDir("safari"), "dist-safari");
});

test("Trigger initialization fails closed when content setup reports an error", () => {
  assert.throws(
    () =>
      assertTriggerInitializationSucceeded({
        success: false,
        error: "Trigger 'http-trigger' is not supported in safari",
      }),
    /not supported in safari/,
  );
});
