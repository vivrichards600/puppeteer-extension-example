const puppeteer = require('puppeteer');
let browser, page;

const puppeteerArgs = [
    `--disable-extensions-except=${__dirname}`,
    `--load-extension=${__dirname}`,
    '--show-component-extension-options',
    '--disable-features=DialMediaRouteProvider',
];

describe('Hello Extensions', () => {

    beforeEach(async function () {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 200,
            args: puppeteerArgs
        });
        [page] = await browser.pages();
    });

    afterEach(() => browser.close());

    it('displays popup', (async () => {
        const targets = await browser.targets();
        const extensionTarget = targets.find(target => target.type() === 'service_worker');
        const partialExtensionUrl = extensionTarget.url() || '';
        const [, , extensionId] = partialExtensionUrl.split('/');

        const extensionUrl = `chrome-extension://${extensionId}/popup/hello.html`;

        await page.goto(extensionUrl, {waitUntil: ['domcontentloaded', "networkidle2"]});

        const popupHeading = await page.$eval('h1', (e => e.innerText));
        expect(popupHeading).toEqual('Hello Extensions');

    }));

});