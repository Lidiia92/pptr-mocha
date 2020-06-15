"use strict";

var _puppeteer = require("puppeteer");

var _puppeteer2 = _interopRequireDefault(_puppeteer);

var _chai = require("chai");

var _mochaSteps = require("mocha-steps");

var _builder = require("../builder");

var _builder2 = _interopRequireDefault(_builder);

var _LoginPage = require("./pages/LoginPage.js");

var _LoginPage2 = _interopRequireDefault(_LoginPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Test", function () {
  var page = void 0;
  var loginPage = void 0;
  //let mobile;

  before(async function () {
    page = await _builder2.default.build("Desktop");
    loginPage = await new _LoginPage2.default(page);
    //mobile = await Page.build("Mobile");
  });

  after(async function () {
    await page.close();
    //await mobile.close();
  });

  (0, _mochaSteps.step)("should load home page", async function () {
    await page.goto("http://zero.webappsecurity.com/index.html");
    var signInButton = await page.isElementVisible("#signin_button");
    (0, _chai.expect)(signInButton).to.be.true;
  });

  (0, _mochaSteps.step)("should display login form", async function () {
    await page.waitAndClick("#signin_button");
    var loginForm = await page.isElementVisible("#login_form");
    var signInButton = await page.isElementVisible("#signin_button");
    (0, _chai.expect)(signInButton).to.be.false;
    (0, _chai.expect)(loginForm).to.be.true;
  });

  (0, _mochaSteps.step)("should login into application", async function () {
    // await page.waitAndType("#user_login", "username");
    // await page.waitAndType("#user_password", "password");
    // await page.waitAndClick(".btn-primary");
    await loginPage.login("username", "password");
    var navbar = await page.isElementVisible(".nav-tabs");
    (0, _chai.expect)(navbar).to.be.true;
  });

  (0, _mochaSteps.step)("should have 6 nav links", async function () {
    var navbarLinksCount = await page.getCount(".nav-tabs li");
    (0, _chai.expect)(navbarLinksCount).to.equal(6);
  });
});