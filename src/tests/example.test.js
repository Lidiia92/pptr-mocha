import puppeteer from "puppeteer";
import { step } from "mocha-steps";
import Page from "../builder";

describe("Test", () => {
  let page;
  //let mobile;

  before(async () => {
    page = await Page.build("Desktop");
    //mobile = await Page.build("Mobile");
  });

  after(async () => {
    await page.close();
    //await mobile.close();
  });

  step("should load zero webappsecurity site", async () => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.waitAndClick("#onlineBankingMenu");
  });
});
