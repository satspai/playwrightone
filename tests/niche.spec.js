const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/loginpage');

test('orangehrm login test', async ({page})=>{
    await page.goto('https://nichethyself.com/tourism/home.html');
    await page.viewportSize({width:1920, height:1080});
   const loginPage = new LoginPage(page);
   await loginPage.loginToPortal();
   await expect(loginPage).toHaveURL('https://nichethyself.com/tourism/admin/dashboard.php');
});