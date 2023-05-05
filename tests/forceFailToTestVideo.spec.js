const { test, expect } = require('@playwright/test');

test('test logging in to a demo bank', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('asdf');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('asdf');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Transfer Funds' }).click();
  await page.waitForTimeout(1000);

  await page.locator('#amount').click();
  await page.locator('#amount').fill('100');
  await page.getByRole('button', { name: 'Transfer' }).click();
  await expect(page.getByText('$1000.00 has been transferred from account #14121 to account #14121.')).toBeVisible();

  // add delay to see video
  await page.waitForTimeout(3000);
});


