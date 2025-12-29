import { test, expect } from '@playwright/test';

test('heroku', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
  await expect(page.locator('h1')).toContainText('Welcome to the-internet');
  await page.getByRole('link', { name: 'Form Authentication' }).click();
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!1');
  await expect(page.getByRole('button', { name: ' Login' })).toBeVisible();
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.getByText('You logged into a secure area')).toBeVisible();
  await expect(page.locator('#flash')).toContainText('You logged into a secure area! ×');
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.getByText('You logged out of the secure')).toBeVisible();
  await expect(page.locator('#flash')).toContainText('You logged out of the secure area! ×');
});