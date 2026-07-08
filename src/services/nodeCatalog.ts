import type { NodeDefinitionRecord } from "@/services/node-definitions/types";
import { actions as baseActions } from "@/services/node-definitions/actions";
import { triggers as baseTriggers } from "@/services/node-definitions/triggers";
import {
  buildActionCatalog,
  buildTriggerCatalog,
  buildVisibleActionCatalog,
  buildVisibleTriggerCatalog,
} from "./nodeDefinitionFilter";
import { getExtensionTarget } from "./extensionTarget";

const currentTarget = getExtensionTarget();

const allActionCatalog: NodeDefinitionRecord = buildActionCatalog(
  baseActions,
  currentTarget,
);
const allTriggerCatalog: NodeDefinitionRecord = buildTriggerCatalog(
  baseTriggers,
  currentTarget,
);

export const actionCatalog: NodeDefinitionRecord = buildVisibleActionCatalog(
  baseActions,
  currentTarget,
);
export const triggerCatalog: NodeDefinitionRecord = buildVisibleTriggerCatalog(
  baseTriggers,
  currentTarget,
);

export const nodeCatalog = {
  actions: allActionCatalog,
  triggers: allTriggerCatalog,
};

export function buildNodeCatalog(target: "chrome" | "firefox" | "safari") {
  return {
    actions: buildActionCatalog(baseActions, target),
    triggers: buildTriggerCatalog(baseTriggers, target),
  };
}

export function buildVisibleNodeCatalog(
  target: "chrome" | "firefox" | "safari",
) {
  return {
    actions: buildVisibleActionCatalog(baseActions, target),
    triggers: buildVisibleTriggerCatalog(baseTriggers, target),
  };
}

export function getNodeDefinition(kind: "action" | "trigger", type: string) {
  return kind === "action" ? nodeCatalog.actions[type] : nodeCatalog.triggers[type];
}
