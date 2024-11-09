const puppeteer = require("puppeteer");
const path = require('path');
const fs = require('fs');

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
}, 30000);

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
});

describe('Table', () => {
    it("A table is used to create dashboard layout", async () => {
        const table = await page.$('table');
        expect(table).toBeTruthy()
    });
    it("table has 8 columns", async () => {
        const mostColumns = await page.$$eval('table tr', els => els.reduce((acc, el) => el.children.length > acc ? el.children.length : acc, 0))
        console.log(mostColumns)
        expect(mostColumns).toBeGreaterThanOrEqual(8)
    })
});


describe('Styling', () => {
    it('Icons from the `images` folder are used', async () => {
        const images = await page.$$eval('img', el => Array.from(el).map(e => e.src));
        expect(images.some((e) => e.match(/images/))).toBe(true);
    });
    it("Dropdown has `hover` effect", async () => {
        const stylesheet = fs
            .readFileSync(path.resolve('./style.css'), 'utf8')
        expect(stylesheet).toMatch(/:hover/);
    });
});

