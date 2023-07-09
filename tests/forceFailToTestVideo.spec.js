const { test, expect } = require('@playwright/test');

test('test logging in to a demo bank', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('test');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('test');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Transfer Funds' }).click();
  await page.waitForTimeout(1000);

  await page.locator('#amount').click();
  await page.locator('#amount').fill('100');
  await page.getByRole('button', { name: 'Transfer' }).click();
  // change 100 to 1000 to get video to fail
  await expect(page.getByText('Transfer Complete!')).toBeVisible();

});


