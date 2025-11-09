const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { CalculatorPage } = require('../pages/CalculatorPage');

let homePage, calculatorPage;

Given('I am on the Service NSW stamp duty page', { timeout: 60000 }, async function () {
  homePage = new HomePage(this.page);  // use the page from hooks.js
  await homePage.open();
  await expect(this.page).toHaveTitle(/motor vehicle stamp duty/i);
});

When('I click the {string} button on the homepage', async function (buttonName) {
  await homePage.clickCheckOnline(buttonName);
  calculatorPage = new CalculatorPage(this.page);
});

Then('I should be navigated to the calculator page', async function () {
  await calculatorPage.verifyOnPage();
});

When('I select Yes and enter vehicle price as {string}', async function (price) {
  await calculatorPage.fillDetails(price);
});

When('I click the Calculate button to see the stamp duty result', async function () {
  await calculatorPage.clickCalculate();
  console.log('* * * Popup handled successfully * * *');
  console.log('* * * Testing * * *');
});