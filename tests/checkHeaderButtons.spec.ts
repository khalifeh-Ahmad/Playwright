import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://new.thedubaiballoon.com/');
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Experiences' })).toBeVisible();
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Pricing' })).toBeVisible();
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Are We Flying?' })).toBeVisible();
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Plan Your Flight' })).toBeVisible();
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Photo Memory' })).toBeVisible();
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Contact Us' })).toBeVisible();
  await page.getByRole('navigation').getByRole('link', { name: 'Experiences' }).click();
  await page.goto('https://new.thedubaiballoon.com/');
  await page.getByRole('navigation').getByRole('link', { name: 'Contact Us' }).click();
  await page.goto('https://new.thedubaiballoon.com/');
  await page.getByRole('navigation').getByRole('link', { name: 'Experiences' }).click();
  await expect(page.getByRole('link', { name: 'Explore' })).toBeVisible();
  await page.getByRole('link', { name: 'Explore' }).click();
  await expect(page.locator('h1')).toContainText('SUNRISE PASS');
  await expect(page.getByRole('link', { name: 'The Dubai Balloon The Dubai' })).toBeVisible();
});