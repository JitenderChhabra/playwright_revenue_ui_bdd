const reporter = require('cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

// Create reports folder if not exists
const reportsDir = path.join(__dirname);
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir);
}

const options = {
  theme: 'bootstrap',
  jsonFile: path.join(reportsDir, 'cucumber_report.json'),
  output: path.join(reportsDir, 'cucumber_report.html'),
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "QA",
    "Browser": "N/A (API test)",
    "Platform": process.platform,
    "Executed": "Local"
  }
};

reporter.generate(options);
