/**
 * Error logger that listens for client-side JavaScript console errors and warnings.
 *
 * Usage:
 * This fixture is automatically applied through `fixtures.js` and does not need
 * to be explicitly invoked in tests. It acts as a passive listener and logs any
 * captured messages at the end of each test.
 */

const { test } = require('@playwright/test');

module.exports = {
  errorLogger: [async ({ page }, use) => {
    const consoleErrors = [];
    const consoleWarnings = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
      if (msg.type() === 'warning') {
        consoleWarnings.push(msg.text());
      }
    });

    await use();
    
    const testInfo = test.info();

    if (consoleErrors.length > 0 || consoleWarnings.length > 0) {
      console.log(`\n--- Errors in ${testInfo.title} ---`);
      
      if (consoleErrors.length > 0) {
        console.log('\n[Console Errors]:');
        consoleErrors.forEach(msg => console.log(msg));
      }
      if (consoleWarnings.length > 0) {
        console.log('\n[Console Warnings]:');
        consoleWarnings.forEach(msg => console.log(msg));
      }
      console.log('');
    }
  }, { auto: true }] // note: 'auto' ensures this fixture is applied automatically
};
