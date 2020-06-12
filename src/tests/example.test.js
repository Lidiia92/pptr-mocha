import puppeteer from "puppeteer";
import { expect } from "chai";
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

  step("should load home page", async () => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    const signInButton = await page.isElementVisible("#signin_button");
    expect(signInButton).to.be.true;
  });

  step("should display login form", async () => {
    await page.waitAndClick("#signin_button");
    const loginForm = await page.isElementVisible("#login_form");
    const signInButton = await page.isElementVisible("#signin_button");
    expect(signInButton).to.be.false;
    expect(loginForm).to.be.true;
  });

  step("should login into application", async () => {
    await page.waitAndType("#user_login", "username");
    await page.waitAndType("#user_password", "password");
    await page.waitAndClick(".btn-primary");
    const navbar = await page.isElementVisible(".nav-tabs");
    expect(navbar).to.be.true;
  });
});
