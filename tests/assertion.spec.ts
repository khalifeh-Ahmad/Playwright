import { test, expect } from "@playwright/test";

test("to be hidden", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");
  await expect(page.locator('[id="finish"]')).toBeHidden();
  await page.close();
});

test("to be present", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
  await expect(page.locator('[class="added-manually"]')).not.toHaveCount(1);
  await page.locator('[onclick="addElement()"]').click();
  await expect(page.locator('[class="added-manually"]')).toHaveCount(1);

  await page.close();
});

test("to be enabled", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
  await expect(page.locator('//*[@id="input-example"]/input')).toBeDisabled();
  await page.locator('//*[@id="input-example"]/button').click();
  await expect(page.locator('//*[@id="input-example"]/input')).toBeEnabled();
  await page.close();
});

test("to have Text", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
  await expect(page.locator('//*[@id="input-example"]/button')).toHaveText(
    "Enable"
  );
  await expect(page.locator('//*[@id="input-example"]/button')).not.toHaveText(
    "Enabled"
  );

  await page.close();
});

test("to have Attribute", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
  await expect(page.locator('//*[@id="input-example"]/button')).toHaveAttribute(
    "autocomplete",
    "off"
  );

  await page.close();
});

test("to have URL", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
  //Full URL
  await expect(page).toHaveURL(
    "https://the-internet.herokuapp.com/dynamic_controls"
  );
  //Partial URL
  await expect(page).toHaveURL(/the-internet.herokuapp/);
  await page.close();
});

test("to have Title", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
  //Full title
  await expect(page).toHaveTitle("The Internet");
  //Partial title
  await expect(page).toHaveTitle(/.*The Internet/);
  await page.close();
});

test("to have Screenshot", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
  //we can use this when we have a lot of elements in the page and we need to check if 
  // they are exist for example, so we take a screenshoot
  // we should run this twice
  await expect(page).toHaveScreenshot()
  await page.close();
});
