import { test } from '@playwright/test';

test ('', async ({ page }) =>{

    

    console.log(`Username is ${process.env.PRACTICE_USERNAME}`);
    console.log(`Password is ${process.env.PRACTICE_PASSWORD}`);


});

test('Bypass authentication by encoding the credentials base64 format', async ({ page }) => {
    //
    let encodedCredential = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");

    page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredential}`});

    await page.goto('https://the-internet-5chk.onrender.com/basic_auth');

    await page.waitForTimeout(3000);


});