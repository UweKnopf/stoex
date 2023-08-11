import { test, expect } from '@playwright/test';

test('Frontfacing Showcase Test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByText('Inventory managment made simple! Get all the information you need in a just a fe').click();
  await page.getByText('Inventory managment made simple!').click();
  await page.getByText('Get all the information you need in a just a few clicks, just like that!').click();
  await page.getByRole('link', { name: 'StoeX' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByTestId('app-bar').getByRole('link').nth(2).click();
  const page1 = await page1Promise;
  await page.getByText('Focus on what matters, leave the rest to us').click();
  await page.getByText('Running a business is already hard, so why not let us help you with all that rep').click();
  await page.getByRole('link', { name: 'Data Insights See current and future Inventory levels at a glance. See how you can optimize your turnaround and maximize your cashflow with modern, meaningful and simple graphs' }).click();
  await page.getByText('Data Insights Test test').click();
  await page.getByRole('link', { name: 'StoeX' }).click();
  await page.getByRole('link', { name: 'Inventory Automation Automate the most tedious and time consuming processes of managing stock levels and focus on what really counts' }).click();
  await page.getByRole('heading', { name: 'automation test dont look' }).click();
  await page.getByRole('link', { name: 'StoeX' }).click();
  await page.getByRole('link', { name: 'Privacy Focused With servers hosted in the EU you can be sure that your critical business data is protected' }).click();
  await page.getByRole('heading', { name: 'Privacy test dont look' }).click();
  await page.getByTestId('app-bar').click();
});
