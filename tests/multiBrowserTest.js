const playwright = require('playwright');

describe('multiBrowserTest', function () {
    it('test', async () => {
        for (const browserType of ['chromium', 'firefox']) {
            const browser = await playwright[browserType].launch();
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto('http://whatsmyuseragent.org/');
            await page.screenshot({ path: `multi-${browserType}.png` });
            await browser.close();
        }
    })

})

