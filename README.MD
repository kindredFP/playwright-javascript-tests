PREREQUISITES
    
    1.  Make sure you have Node v10.17 and above, I used v.16.13.2
    2.  I used NPM v8.1.2

INSTALLATION

    1.  Create a home folder where you want to install playwright
    2.  Type 'npm init playwright@latest' this will install and download the playwright files. 

RUN TESTS

    1.  Type 'npx playwright test' to run all the *.js tests under the /tests folder.
    2.  You will get 3 tests executed, one in firefox, one in chromium and one that does multibrowser.

SAMPLES CALLS

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

References used: 
https://playwright.dev

Online Test Website used:  
https://demo.selenium.com
