import type { NodeDefinitionRecord } from "@/services/node-definitions/types";
import { getBrowserCapabilities } from "./browserCapabilities";
import type { ExtensionTarget } from "./extensionTarget";
import { getExtensionTarget } from "./extensionTarget";

type NodeKind = "action" | "trigger";

function filterDefinitions(
  definitions: NodeDefinitionRecord,
  mapDefinition: (type: string, definition: NodeDefinitionRecord[string]) => NodeDefinitionRecord[string] | null,
): NodeDefinitionRecord {
  const filteredDefinitions: NodeDefinitionRecord = {};

  for (const [type, definition] of Object.entries(definitions)) {
    const mappedDefinition = mapDefinition(type, definition);
    if (mappedDefinition) {
      filteredDefinitions[type] = mappedDefinition;
    }
  }

  return filteredDefinitions;
}

function hideDefinition(definition: NodeDefinitionRecord[string]) {
  return {
    ...definition,
    metadata: {
      ...definition.metadata,
      hidden: true,
    },
  };
}

function isSupportedNodeType(
  kind: NodeKind,
  type: string,
  target: ExtensionTarget,
): boolean {
  const capabilities = getBrowserCapabilities(target);

  if (kind === "action" && type === "custom-script") {
    return capabilities.userScripts;
  }

  if (kind === "trigger" && type === "http-trigger") {
    return capabilities.httpRequestTriggers;
  }

  return true;
}

export function getUnsupportedNodeMessage(
  kind: NodeKind,
  type: string,
  target: ExtensionTarget = getExtensionTarget(),
): string | null {
  if (isSupportedNodeType(kind, type, target)) {
    return null;
  }

  return `${kind === "action" ? "Action" : "Trigger"} '${type}' is not supported in ${target}`;
}

function filterVisibleDefinitions(
  definitions: NodeDefinitionRecord,
): NodeDefinitionRecord {
  return filterDefinitions(definitions, (_type, definition) =>
    definition.metadata.hidden ? null : definition,
  );
}

export function buildActionCatalog(
  actions: NodeDefinitionRecord,
  target: ExtensionTarget,
): NodeDefinitionRecord {
  return filterDefinitions(actions, (type, definition) =>
    isSupportedNodeType("action", type, target)
      ? definition
      : hideDefinition(definition),
  );
}

export function buildTriggerCatalog(
  triggers: NodeDefinitionRecord,
  target: ExtensionTarget,
): NodeDefinitionRecord {
  return filterDefinitions(triggers, (type, definition) =>
    isSupportedNodeType("trigger", type, target)
      ? definition
      : hideDefinition(definition),
  );
}

export function buildVisibleActionCatalog(
  actions: NodeDefinitionRecord,
  target: ExtensionTarget,
): NodeDefinitionRecord {
  return filterVisibleDefinitions(buildActionCatalog(actions, target));
}

export function buildVisibleTriggerCatalog(
  triggers: NodeDefinitionRecord,
  target: ExtensionTarget,
): NodeDefinitionRecord {
  return filterVisibleDefinitions(buildTriggerCatalog(triggers, target));
}
