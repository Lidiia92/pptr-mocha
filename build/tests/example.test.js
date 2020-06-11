"use strict";

var _puppeteer = require("puppeteer");

var _puppeteer2 = _interopRequireDefault(_puppeteer);

var _mochaSteps = require("mocha-steps");

var _builder = require("../builder");

var _builder2 = _interopRequireDefault(_builder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Test", function () {
  var page = void 0;

  before(async function () {
    page = await _builder2.default.build("Tablet");
  });

  after(async function () {
    await page.close();
  });

  (0, _mochaSteps.step)("should load google homepage", async function () {
    await page.goto("https://google.com");
  });

  (0, _mochaSteps.step)("step 2", async function () {
    console.log("test");
  });
});