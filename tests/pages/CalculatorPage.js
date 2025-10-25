const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class CalculatorPage extends BasePage {
  constructor(page) {
    super(page);
    this.priceInput = '#purchasePrice';
    this.calculateButton = '#calculate-button';
  }

  async verifyOnPage() {
    await expect(this.page.locator('h1')).toContainText('Revenue NSW calculators');
  }

  async fillDetails(price) {
    await this.page.getByText('Yes').click();    
    await this.page.fill(this.priceInput, price);
  }

  async clickCalculate() {
     // Set up dialog listener BEFORE triggering it
    const dialogPromise = new Promise(resolve => {
     this.page.once('dialog', async dialog => {
        console.log('Dialog message:', dialog.message());
        await expect(dialog.message()).toContain('Motor vehicle registration');
        await dialog.dismiss();
        resolve();
     });
    });
    
    await this.page.getByRole('button', { name: 'Calculate' }).click();
  }
}

module.exports = { CalculatorPage };
