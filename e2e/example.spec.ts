import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  //const context = await browser.newContext();
  await page.goto('http://localhost:5173/');
});

test('Meta test', async ({ page }) => {
  await expect(page).toHaveTitle(/StoeX/);
});
//Appbar with three clickable Icons that return to the homepage or github
test('App Bar test', async ({ page }) => {
  await expect(page.getByTestId('app-bar')).toBeVisible;
  await page.getByRole('link', { name: 'StoeX' }).click();
  await expect(page).toHaveURL('http://localhost:5173/')
  //await page.getByTestId('app-bar').getByRole('link').nth(1).click();
  //await expect(page).toHaveURL('http://localhost:5173/')
  await page.getByTestId('app-bar').getByRole('link').nth(2).click();
  //await expect(context.pages()[1]).toHaveURL('https://github.com/UweKnopf/stoex')
});
