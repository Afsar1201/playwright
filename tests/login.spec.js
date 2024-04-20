import { test, expect } from '@playwright/test';

  test('User can login with valid credentials', async ({ page }) => {
    //going to the website
    await page.goto('https://www.amazon.com');
    await page.click('#nav-link-accountList');
    
    //filling the email id and password
    await page.fill('#ap_email', 'valid_email@gmail.com');    //use your email id for login
    await page.click('#continue')
    await page.fill('#ap_password', 'valid_password');        //use your password for login

    //waiting for the sign in button

    await page.waitForSelector('#signInSubmit');
    
    //clicked the sign in button
    
    await page.click('#signInSubmit');
    await page.waitForTimeout(5000);
    
    //verifying the confirmation of login successfully
    
    await page.waitForSelector('#nav-link-accountList-nav-line-1');
    const userDisplayName = await page.textContent('#nav-link-accountList-nav-line-1');
    expect(userDisplayName).toContain('Hello,');

  });


