This project is an end-to-end UI automation testing framework built using Playwright, Cucumber (BDD), and the Page Object Model (POM) design pattern.
It provides a scalable and maintainable approach for automated testing with detailed HTML reports for easy result analysis.

🚀 Features

✅ Playwright for fast, reliable browser automation

✅ Cucumber (BDD) for human-readable test scenarios (.feature files)

✅ Page Object Model (POM) for clean separation between test logic and UI interactions

✅ HTML Reports for detailed execution results

✅ Environment-based configuration (QA, Staging, Prod)

✅ Tag-based execution for selective test runs

✅ Screenshots on failure for easier debugging

✅ Cross-browser support (Chromium, Firefox, WebKit)

⚙️ Setup Instructions
1. Prerequisites
   
2. Node.js (v18 or above)

npm or yarn

Git

4. Install Dependencies
npm install

5. Install Playwright Browsers
npx playwright install

🧩 Running Tests

Run all tests

npm test

🧱 Reporting
After execution, an HTML report will be generated automatically in the reports/html-report directory.

🧠 Framework Design Highlights

🔹 BDD with Cucumber

Scenarios written in plain English using Given/When/Then format
Mapped to JavaScript step definitions under step_definitions


🔹 Page Object Model

Each UI page is represented as a class in /pages
Centralized locators and reusable methods for interactions

🔹 Hooks

hooks.js handles setup/teardown (e.g., browser context, screenshots)

🔄 CI/CD Integration

Easily integrates with Jenkins, GitHub Actions, or Azure Pipelines for automated test runs.

Typical steps include:
Checkout code

Install dependencies
Run tests
Publish HTML report as a build artifact

🧰 Technologies Used

Playwright – UI automation

Cucumber (BDD) – Scenario-driven testing

JavaScript – Strong typing and maintainability

cucumber-html-reporter / multiple-cucumber-html-reporter – Reporting

Node.js – Execution environment

👤 Author

Jitender Chhabra

📧 jai.chhabra@gmail.com

💼 QA Automation | Playwright | BDD | CI/CD
