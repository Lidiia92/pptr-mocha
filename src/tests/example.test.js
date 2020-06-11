import puppeteer from "puppeteer";
import { step } from "mocha-steps";
import Page from "../builder";

describe("Test", () => {
  let page;
  let mobile;

  before(async () => {
    page = await Page.build("Tablet");
    mobile = await Page.build("Mobile");
  });

  after(async () => {
    await page.close();
    await mobile.close();
  });

  step("should load google homepage", async () => {
    await page.goto("https://google.com");
  });

  step("step 2", async () => {
    console.log("test");
  });
});
