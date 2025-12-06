const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('file:///app/Home%20Construction/newfile.html');

  // Take a screenshot of the light mode
  await page.screenshot({ path: '/home/jules/verification/light_mode.png' });

  // Click the theme toggle button
  await page.click('#theme-toggle');

  // Wait for the theme to change
  await page.waitForTimeout(500);

  // Take a screenshot of the dark mode
  await page.screenshot({ path: '/home/jules/verification/dark_mode.png' });
});