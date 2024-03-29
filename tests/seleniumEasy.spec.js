const { test, expect, chromium } = require('@playwright/test');

test.describe('Allows you to control browser context and closing it to capture videos on failures', () => {

  test.afterEach(async ({context}) => {
    await context.close();
  });

  test('test', async ({context}) => {

    const page = await context.newPage();

    await page.goto('https://demo.seleniumeasy.com/basic-first-form-demo.html');

    // Text input
    await page.fill('#user-message', 'This is my sample message.');
    await page.click('text="Show Message"');

    //await page.screenshot({ path: `chromiumTest.png` });

    const answer = await page.textContent('#display');
    expect(answer).toEqual('This is my sample message.');

    // Another test scenario
    await page.getByLabel("Enter a").click()
    await page.fill('#value1', '1');

    // Enter second value
    await page.getByLabel("Enter b").click()
    await page.fill("#value2", '2');

    await page.pause();
    // Click on button
    await page.getByRole('button', { name: 'Get Total' }).click();

    // Retrieve sum
    const sum = await page.locator('#displayvalue').textContent();
    expect(sum).toEqual('3');
  })

});

