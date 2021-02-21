PREREQUISITES
    
    1.  Make sure you have Node v10.17 and above, I used v.14.4.0
    2.  I used NPM v6.14.5

INSTALLATION

    1.  Create a home folder where you want to install playwrite
    2.  Type 'npm i -D playwright' this will install and download the playwright files.

RUN TESTS

    1.  Type 'npm run test' to run all the *.js tests under the /tests folder.
    2.  You will get 3 tests executed, one in firefox, one in chromium and one that does multibrowser.

    It was helpful to use this 'npx plawright codegen theSiteYouWantToTroubleshoot'
    to create your javascript code fast.

NOTES:

Code was implemented and tested on a Ubuntu 18.04 VM installed using PROXMOX Virtual Environment

I implemented the tests using describe() and it(), however if you dont use this syntax you can also execute individual tests using node ./nameOfYourTest.js

References used: 
https://playwright.dev

Online Test Website used:  
https://www.seleniumeasy.com/test/basic-first-form-demo.html
