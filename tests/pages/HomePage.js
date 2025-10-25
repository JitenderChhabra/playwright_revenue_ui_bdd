const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
  }

  async open() {
    await this.page.goto('https://www.service.nsw.gov.au/transaction/check-motor-vehicle-stamp-duty');
  }

  async clickCheckOnline(buttonName) {    
    await this.page.getByRole('button', { name: buttonName }).click();
  }
}

module.exports = { HomePage };
