import { DEMO_BUTTON_WORKFLOW } from "./demoWorkflows/button";
import { DEMO_FAB_WORKFLOW } from "./demoWorkflows/fab";
import { DEMO_HTTP_REQUEST_TRIGGER_WORKFLOW } from "./demoWorkflows/httpRequestTrigger";
import { test, expect } from "./test.base";
import { seedWorkflows } from "./utils";

test.describe("Actions execution", () => {
  test("can trigger workflow on http request detection", async ({
    page,
    baseUrl,
  }) => {
    await seedWorkflows(baseUrl, page, [DEMO_HTTP_REQUEST_TRIGGER_WORKFLOW]);

    await page.goto("https://example.com");
    await page.waitForTimeout(1000);

    await page.evaluate(() => {
      fetch("https://api.ipify.org/");
    });

    await expect
      .poll(async () => page.getByText("Request detected").count())
      .toBeGreaterThan(0);
  });

  test("can trigger workflow on fab click", async ({ page, baseUrl }) => {
    await seedWorkflows(baseUrl, page, [DEMO_FAB_WORKFLOW]);

    await page.goto("https://example.com");

    await page.click('text="FB"');
    await expect(page.locator('text="Workflow triggered"')).toBeVisible();
  });

  test("can trigger workflow on button click", async ({ page, baseUrl }) => {
    await seedWorkflows(baseUrl, page, [DEMO_BUTTON_WORKFLOW]);

    await page.goto("https://example.com");

    await page.click('text="FB"');
    await expect(page.locator('text="Workflow triggered"')).toBeVisible();
  });

  test("shows an error notification when button injection fails by default", async ({
    page,
    baseUrl,
  }) => {
    await seedWorkflows(baseUrl, page, [
      {
        ...DEMO_BUTTON_WORKFLOW,
        id: "workflow-default-inject-error",
        nodes: DEMO_BUTTON_WORKFLOW.nodes.map((node) =>
          node.type === "trigger"
            ? {
                ...node,
                id: "trigger-default-inject-error",
                data: {
                  ...node.data,
                  config: {
                    ...node.data.config,
                    targetSelector: "#does-not-exist",
                  },
                },
              }
            : node,
        ),
      },
    ]);

    await page.goto("https://example.com");

    await expect(
      page.getByText("Target element not found for component injection"),
    ).toBeVisible();
  });

  test("does not show an error notification when silent inject failure is enabled", async ({
    page,
    baseUrl,
  }) => {
    await seedWorkflows(baseUrl, page, [
      {
        ...DEMO_BUTTON_WORKFLOW,
        id: "workflow-silent-inject-error",
        nodes: DEMO_BUTTON_WORKFLOW.nodes.map((node) =>
          node.type === "trigger"
            ? {
                ...node,
                id: "trigger-silent-inject-error",
                data: {
                  ...node.data,
                  config: {
                    ...node.data.config,
                    targetSelector: "#does-not-exist",
                    silentInjectFailure: true,
                  },
                },
              }
            : node,
        ),
      },
    ]);

    await page.goto("https://example.com");
    await page.waitForTimeout(5500);

    await expect(
      page.getByText("Target element not found for component injection"),
    ).toHaveCount(0);
  });
});
