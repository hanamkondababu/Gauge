/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    $,
    write,
    closeBrowser,
    goto,
    press,
    below,
    focus,
    button,
    clear,
    screenshot,
    above,
    click,
    checkBox,
    scrollDown,
    listItem,
    await,
    waitFor,
    toLeftOf,
    hover,
    link,
    text,
    into,
    textBox,
    evaluate
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});

afterSuite(async () => {
    await closeBrowser();
});

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};

step("Login", async function () {
    await goto("https://login.salesforce.com");
    await waitFor(10000);
    await write("babuhanamkonda190@gmail.com.qa");
    await focus(textBox("password"));
    await write("Salesforce@1234");
    await click("Log In");
    await waitFor(3000);
    });
step("Adding Record in Account", async function () {
    await goto('https://wilco13-dev-ed.lightning.force.com/lightning/o/Account/list?filterName=Recent');
    await waitFor(3000);
    await click("New");
    await click('Account Name');
    //await waitFor(3000);
    //await click($('//*[@id="sectionContent-165"]/div/slot/records-record-layout-row[2]/slot/records-record-layout-item[1]/div/span/slot/records-record-layout-base-input/lightning-input/div[1]'));
    await write("Demo0");
    await click('Account Number');
    await write('1234568780');
    await click('Account Site');
    await write('DemoDATA0');
    await click('Type');
    await click('Installation Partner');
    await click("Industry");
    await click("Banking");
    await click('Annual Revenue');
    await write("$270000");
    await click('Save');
    });
step("Adding Opportunity", async function () {
    //await goto('https://wilco13-dev-ed.lightning.force.com/lightning/o/Opportunity/list?filterName=Recent');
    await waitFor(3000);
    await click(button(toLeftOf("Setup")));
    await write('opportun');
    await click('Opportunities');
    await waitFor(3000);
    await click('New');
    await click('Opportunity Name');
    await write('Demo59');
    await click('Close Date');
    await click('27');
    await click('Stage');
    await click('Needs Analysis');
    await click('Save');
    await waitFor(3000);
    });
step("Adding Contacts", async function () {
    await click(button(toLeftOf("Setup")));
    await write('Contact');
    await click('Contacts');
    //await goto('https://wilco13-dev-ed.lightning.force.com/lightning/o/Contact/list?filterName=Recent');
    await waitFor(3000);
    await click('New');
    await click('First Name');
    await write('Demo4');
    await click('Last Name');
    await write('Demo4');
    await click('Save');
    });