import {test} from "@playwright/test";

test("Practice locator method with options", async({page}) => {
    await page.goto("https://www.saucedemo.com")
    await page.locator(".form_group",{has: page.locator("#user-name")}).click();
    await page.locator(".form_group",{has: page.locator("#user-name")}).pressSequentially("standard_user");
    
    
    
    


})