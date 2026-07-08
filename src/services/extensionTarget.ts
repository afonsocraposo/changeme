export type ExtensionTarget = "chrome" | "firefox" | "safari";

const VALID_TARGETS = new Set<ExtensionTarget>([
  "chrome",
  "firefox",
  "safari",
]);

export function normalizeExtensionTarget(
  target: string | undefined | null,
): ExtensionTarget {
  if (target && VALID_TARGETS.has(target as ExtensionTarget)) {
    return target as ExtensionTarget;
  }

  return "chrome";
}

export function getExtensionTarget(): ExtensionTarget {
  if (typeof __EXTENSION_TARGET__ !== "undefined") {
    return normalizeExtensionTarget(__EXTENSION_TARGET__);
  }

  return "chrome";
}
