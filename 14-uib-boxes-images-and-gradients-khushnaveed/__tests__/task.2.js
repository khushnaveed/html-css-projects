const puppeteer = require("puppeteer");
const path = require("path");

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true });
  page = await browser.newPage();
  await page.goto("file://" + path.resolve("./task-2/task-2.html"));
}, 30000);

afterAll((done) => {
  try {
    this.puppeteer.close();
  } catch (e) {}
  done();
});

describe("Task 2; Background Image", () => {
  it("CSS `linear-gradient` property should be defined for the body", async () => {
    const backgroundImage = await page.$$eval("body", (el) =>
      Array.from(el).map((e) =>
        getComputedStyle(e).getPropertyValue("background")
      )
    );

    expect(backgroundImage.some((e) => e.includes("linear-gradient"))).toBe(
      true
    );
  });
});
