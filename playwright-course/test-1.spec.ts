import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').fill('Feed the dog');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('Water the plants');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await expect.soft(page.getByTestId('todo-title')).toHaveCount(1);
  await page.locator('li').filter({ hasText: 'Feed the dog' }).getByLabel('Toggle Todo').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect.soft(page.getByTestId('todo-title')).toHaveCount(3);
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('Yuppi');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
});