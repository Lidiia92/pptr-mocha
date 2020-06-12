"use strict";

var _puppeteer = require("puppeteer");

var _puppeteer2 = _interopRequireDefault(_puppeteer);

var _mochaSteps = require("mocha-steps");

var _builder = require("../builder");

var _builder2 = _interopRequireDefault(_builder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Test", function () {
  var page = void 0;
  //let mobile;

  before(async function () {
    page = await _builder2.default.build("Desktop");
    //mobile = await Page.build("Mobile");
  });

  after(async function () {
    await page.close();
    //await mobile.close();
  });

  (0, _mochaSteps.step)("should load zero webappsecurity site", async function () {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.waitAndClick("#onlineBankingMenu");
  });
});