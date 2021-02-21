const { chromium } = require('playwright');

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

  })
  
})
