# puppeteer-extension-example

This repository contains an example of how to end-to-end test the [Chrome Developers Hello Extensions](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/) Chrome extension using Puppeteer. 

## How to follow along
This repository has been created as part of the following blog post: [End-to-end testing a Chrome extension using Puppeteer](https://vivrichards.co.uk/automation/e2e-testing-chrome-extension-using-puppeteer)

This repository contains a number of different Branches. These branches enable you to jump to a particular part of the code referenced in the blog post.

### Branches
1. `Hello-Extensions` - The example `Hello Extensions` Chrome Extension code taken from the [Chrome Developers Hello Extensions Development basics tutorial](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/). 
2. `Hello-Extensions-Updated-Structure` - Extension restructured following [Structuring an extension project](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#structure).
3. `Puppeteer` - Testing the Hello-Extensions Chrome extension end-to-end using Puppeteer

#### Switching to a branch
To check out this repository and a particular branch:
`git clone -b THE-BRANCH-NAME git@github.com:vivrichards600/puppeteer-extension-example.git`

Alternatively, If you've already cloned the repository you can just switch to the branch you'd like:
`git checkout THE-BRANCH-NAME`

Replace THE-BRANCH-NAME with a branch from the `Branches` section i.e. `Hello-Extensions` or `Hello-Extensions-Updated-Structure`

## Puppeteer example
The Puppeteer example test can be found [here](hello-extensions.test.js).

In order to run this test you will need to:
1. Run `npm install` to install the required npm packages for the end-to-end test. This is only required to be done the first time open this project
2. To run the Puppeteer end-to-end test run `npm test` 