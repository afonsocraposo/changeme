import { ExtensionTarget, getExtensionTarget } from "./extensionTarget";

export interface BrowserCapabilities {
  httpRequestTriggers: boolean;
  userScripts: boolean;
  openPopup: boolean;
}

export function getBrowserCapabilities(
  target: ExtensionTarget = getExtensionTarget(),
): BrowserCapabilities {
  switch (target) {
    case "safari":
      return {
        httpRequestTriggers: false,
        userScripts: false,
        openPopup: false,
      };
    default:
      return {
        httpRequestTriggers: true,
        userScripts: true,
        openPopup: true,
      };
  }
}
