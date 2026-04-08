import { test, expect } from '@playwright/test';

//test('sebastest', async ({ page }) => {
//    
//  await page.goto('https://www.google.com/?hl=es');
//  await page.waitForTimeout(9000)
//  await page.locator('//*[@id="APjFqb"]').fill('diario el sol')
//  await page.keyboard.press('Enter')
//  console.log('presiono enter')
//  await page.waitForTimeout(9000)
//  
//});

test('mi test', async ({ page }) => {
  console.log('Arrancó el test');

  await page.goto('https://google.com');

  console.log('Entré a Google sebas');
});