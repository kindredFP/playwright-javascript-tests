const { chromium } = require('playwright');
const expect = require('expect');

describe('chromiumTest', function () {
  let browser, page

  before(async () => {
    browser = await chromium.launch({ headless: false });
  })
  after(async () => {
    await browser.close();
  })


  it('test', async () => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://www.seleniumeasy.com/test/basic-first-form-demo.html');

    await page.click('text="No, thanks!"');

    await page.click('input[placeholder="Please enter your Message"]');

    // Text input
    await page.fill('input[placeholder="Please enter your Message"]', 'This is my sample message.');

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

  })

})
