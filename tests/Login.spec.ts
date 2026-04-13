import { test, expect } from '@playwright/test';

test('sebastest', async ({ page }) => {
  await page.goto('https://www.google.com/?hl=es');
  await page.waitForTimeout(3000)
  await page.locator('//*[@id="APjFqb"]').fill('diario el sol')
  await page.keyboard.press('Enter')
  await page.waitForTimeout(9000)
  
});
