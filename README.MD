# Playwright Test Suite

This repository contains a test suite for Playwright, a powerful automation library for web browsers. The test suite includes sample tests and useful commands to help you get started with Playwright.

## Prerequisites

- Node.js: Make sure you have Node.js installed, preferably version 10.17 or above. We recommend using version 16.13.2.
- NPM: Ensure you have NPM (Node Package Manager) installed. We used version 8.1.2.

## Installation

1. Create a home folder where you want to install Playwright.
2. Run the following command to install and download the Playwright files:
   ```
   npm init playwright@latest
   ```

## Running Tests

To run the test suite, follow these steps:

1. Type the command below to run all the `*.js` tests located in the `/tests` folder:
   ```
   npx playwright test
   ```
   This command will execute tests in Firefox, Chromium, and perform multi-browser testing.

## Sample Commands

Here are some sample commands you can use with Playwright:

- **Run Tests in Chromium**
  ```
  npx playwright test --project=chromium
  ```
  This command runs the tests specifically on Desktop Chrome.

- **Run Tests in a Specific File**
  ```
  npx playwright test example
  ```
  This command runs the tests in a specific file.

- **Run Tests in Debug Mode**
  ```
  npx playwright test --debug
  ```
  This command runs the tests in debug mode.

- **Auto-generate Tests with Codegen**
  ```
  npx playwright codegen
  ```
  Use this command to automatically generate tests using Codegen.

## References

You can find additional information and resources about Playwright in the official documentation: [Playwright Official Documentation](https://playwright.dev)

## Test Websites

The following websites were used as online test platforms:

- [TodoMVC](https://demo.playwright.dev/todomvc)
- [Parabank](https://parabank.parasoft.com/parabank/index.htm)
- [Selenium Easy](https://demo.seleniumeasy.com)

Feel free to explore, modify, and customize the test suite to suit your specific needs. Should you have any questions or encounter any issues, please refer to the provided references or seek support from the Playwright community.
