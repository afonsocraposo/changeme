import type { StatusMessage } from "@/types/background-workflow";

export function assertTriggerInitializationSucceeded(
  response: StatusMessage | null | undefined,
): void {
  if (!response?.success) {
    throw new Error(response?.error || "Failed to initialize trigger");
  }
}
