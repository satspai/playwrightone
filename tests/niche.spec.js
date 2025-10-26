const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/loginpage');
const { log } = require('console');

test('orangehrm login test', async ({page})=>{
    await page.goto('https://nichethyself.com/tourism/home.html');
    await page.viewportSize({width:1920, height:1080});
    // await page.pause();
    await page.evaluate(() => {
         window.scrollBy(0, 1200);
    });
    // await page.pause();
   const loginPage = new LoginPage(page);
   await loginPage.loginToPortal();
   await expect(page).toHaveURL('https://nichethyself.com/tourism/home.html');
});