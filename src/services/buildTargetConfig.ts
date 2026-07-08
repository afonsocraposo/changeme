import type { ExtensionTarget } from "./extensionTarget";

export function getBuildOutputDir(target: ExtensionTarget): string {
  return target === "safari" ? "dist-safari" : "dist";
}
