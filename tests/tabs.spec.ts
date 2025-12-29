import { test, expect } from "@playwright/test";

test("testTab", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/windows");
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Click Here" }).click();
  const page1 = await page1Promise;
  await page1.goto("https://the-internet.herokuapp.com/windows/new");
  const page2Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Elemental Selenium" }).click();
  const page2 = await page2Promise;
});

