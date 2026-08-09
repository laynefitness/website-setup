import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/fitness-coaching",
  "/nutrition",
  "/peptides",
  "/articles",
  "/articles/what-online-fitness-coaching-includes",
  "/articles/how-personalized-nutrition-coaching-works",
  "/articles/peptide-safety-questions-before-a-consultation",
  "/about",
  "/book-a-call",
  "/terms",
  "/privacy-policy",
  "/cookie-policy",
  "/health-disclaimer",
  "/accessibility",
];

for (const route of routes) {
  test(`${route} renders and has no serious axe violations`, async ({ page }) => {
    const response = await page.goto(route, { waitUntil: "domcontentloaded" });
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("main")).toBeVisible();
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    const serious = results.violations.filter((violation) => violation.impact === "serious" || violation.impact === "critical");
    expect(serious, JSON.stringify(serious, null, 2)).toEqual([]);
  });
}

test("conversion links use the approved destinations", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('a[href="tel:2816597800"]:visible').first()).toBeVisible();
  await expect(page.locator('a[href="/book-a-call"]:visible').first()).toBeVisible();
  await page.getByLabel("Name").first().fill("Test Lead");
  await page.getByLabel("Phone").first().fill("281-555-0100");
  await page.getByLabel("Main goal").first().selectOption("Build muscle");
  const sms = page.getByRole("link", { name: "Text Layne My Intake" }).first();
  await expect(sms).toHaveAttribute("href", /sms:2816597800/);
  await expect(sms).toHaveAttribute("href", /Build%20muscle|Build%2520muscle/);
  await page.goto("/book-a-call");
  await page.getByRole("button", { name: "Load Available Times" }).click();
  await expect(page.locator('iframe[title="Schedule a call with Layne Fitness"]')).toHaveAttribute("src", /calendly\.com\/laynefitness\/call/);
});

test("desktop navigation includes home", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Desktop navigation only");
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(nav.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Home" })).toHaveAttribute("data-active", "true");
});

test("peptide page has no product commerce or treatment claim", async ({ page }) => {
  await page.goto("/peptides");
  await expect(page.getByText("Sales status: disabled", { exact: false })).toBeVisible();
  await expect(page.getByText("Product sales, checkout, fulfillment, or pricing")).toBeVisible();
  await expect(page.locator('a[href*="checkout"], a[href*="cart"], button[data-commerce]')).toHaveCount(0);
});

test("mobile navigation is keyboard operable", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.startsWith("mobile"), "Mobile project only");
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Open navigation" });
  await trigger.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();
});
