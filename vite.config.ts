import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import webExtension from "vite-plugin-web-extension";
import { readFileSync } from "fs";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import { getBuildOutputDir } from "./src/services/buildTargetConfig";
import { buildExtensionManifest } from "./src/services/manifestBuilder";

export default defineConfig(({ command }) => {
  const isDev = command === "serve";
  const port = 5173;
  const isFirefox = process.env.TARGET === "firefox";
  const target = process.env.TARGET === "safari"
    ? "safari"
    : isFirefox
      ? "firefox"
      : "chrome";

  return {
    define: {
      __EXTENSION_TARGET__: JSON.stringify(target),
    },
    plugins: [
      react(),
      webExtension({
        browser: target,
        disableAutoLaunch: true,
        manifest: () => {
          const manifest = JSON.parse(
            readFileSync(resolve(__dirname, "src/manifest.json"), "utf-8"),
          );
          const packageJson = JSON.parse(
            readFileSync(resolve(__dirname, "package.json"), "utf-8"),
          );
          return buildExtensionManifest(manifest, {
            target,
            isDev,
            version: packageJson.version,
            port,
          });
        },
        watchFilePaths: ["src", "public", "icons", "manifest.json"],
        additionalInputs: ["src/config/index.html", "src/style.css"],
      }),
      // Custom plugin to conditionally inject React Refresh script
      {
        name: "conditional-react-refresh",
        transformIndexHtml: {
          order: "pre",
          handler(html) {
            // Only inject React Refresh script in development
            if (command === "serve") {
              const reactRefreshScript = `    <script type="module">
      import RefreshRuntime from "http://localhost:5173/@react-refresh";
      RefreshRuntime.injectIntoGlobalHook(window);
      window.$RefreshReg$ = () => {};
      window.$RefreshSig$ = () => (type) => type;
      window.__vite_plugin_react_preamble_installed__ = true;
    </script>`;

              // Inject the script before the closing </head> tag
              return html.replace(
                "</head>",
                `${reactRefreshScript}\n  </head>`,
              );
            } else {
              // In production, return HTML as-is (no script injection)
              return html;
            }
          },
        },
      },
      tsconfigPaths(),
    ],
    build: {
      outDir: getBuildOutputDir(target),
      rollupOptions: {
        output: {
          inlineDynamicImports: false,
        },
      },
    },
    publicDir: "public",
    server: {
      port: 5173,
      hmr: {
        port: 5174,
      },
    },
  };
});
