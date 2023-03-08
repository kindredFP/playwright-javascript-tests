const { test, expect, chromium } = require('@playwright/test');

  test('test', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({ /* pass any options */ ignoreHTTPSErrors: true });
    const page  = await context.newPage();

    await page.goto('https://demo.seleniumeasy.com/basic-first-form-demo.html');

    // Text input
    await page.fill('#user-message', 'This is my sample message.');

    await page.click('text="Show Message"');

    await page.screenshot({ path: `chromiumTest.png` });

    const answer = await page.textContent('#display');
    expect(answer).toEqual('This is my sample message.');

    // Another test scenario
    await page.click('#sum1');
    // Enter first value
    await page.fill('#sum1', '1');

    await page.click('#sum2');
    // Enter second value
    await page.fill('#sum2', '2');

    // Click on button
    await page.click('text="Get Total"');

    // Retrieve sum
    const sum = await page.textContent('#displayvalue');
    console.log('Value of sum = ' + sum);
    expect(sum).toEqual('3');

    await browser.close();
  })

