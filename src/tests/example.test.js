import puppeteer from "puppeteer";
import { step } from "mocha-steps";

describe("Test", () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch({
      headless: true,
    });

    page = await browser.newPage();
    await page.setDefaultTimeout(7000);
  });

  after(async () => {
    await browser.close();
  });

  step("should load google homepage", async () => {
    await page.goto("https://google.com");
  });

  step("step 2", async () => {
    console.log("test");
  });
});
