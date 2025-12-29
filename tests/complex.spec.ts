import { test, expect } from "@playwright/test";

test("complex", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  await page.locator("#select-demo").selectOption("Tuesday");
  await page.pause();
  await page
    .locator("#multi-select")
    .selectOption([
      { value: "California" },
      { value: "Florida" },
      { value: "New Jersey" },
    ]);
  await page.pause();
  await page.getByRole("link", { name: "Platform", exact: true }).click();
  await page.getByRole("link", { name: "Login" }).click();
  await page.pause();

  await page.close();
});
