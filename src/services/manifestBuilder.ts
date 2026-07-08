import type { ExtensionTarget } from "./extensionTarget";

type ManifestRecord = Record<string, any>;

interface BuildManifestOptions {
  target: ExtensionTarget;
  isDev: boolean;
  version: string;
  port?: number;
}

function removePermissions(
  permissions: unknown,
  disabledPermissions: string[],
): string[] {
  const currentPermissions = Array.isArray(permissions)
    ? permissions.filter((permission): permission is string =>
        typeof permission === "string",
      )
    : [];

  return currentPermissions.filter(
    (permission) => !disabledPermissions.includes(permission),
  );
}

export function buildExtensionManifest(
  baseManifest: ManifestRecord,
  options: BuildManifestOptions,
): ManifestRecord {
  const manifest: ManifestRecord = JSON.parse(JSON.stringify(baseManifest));
  manifest.version = options.version;

  if (options.target === "firefox") {
    manifest.background = {
      scripts: ["src/background/background.ts"],
      type: "module",
    };

    manifest.permissions = removePermissions(manifest.permissions, [
      "userScripts",
    ]);
    manifest.optional_permissions = [
      ...(manifest.optional_permissions || []),
      "userScripts",
    ];
  }

  if (options.target === "safari") {
    manifest.permissions = removePermissions(manifest.permissions, [
      "userScripts",
      "webRequest",
    ]);
  }

  if (options.isDev && options.target !== "firefox") {
    const port = options.port ?? 5173;
    manifest.content_security_policy = {
      extension_pages: `${manifest.content_security_policy?.extension_pages ?? ""} script-src 'self' http://localhost:${port}; object-src 'self'`,
    };
  }

  return manifest;
}
