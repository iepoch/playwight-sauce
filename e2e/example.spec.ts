import { test, expect } from '@playwright/test';
import LoginPage from 'pages/loginPage';
import {scrollDown, scrollUp } from '../utils/actionHelpers'

let loginPage: LoginPage;

test.beforeEach('Before Test Run', async ({ page }) => {
  loginPage = new LoginPage(page)
  
})
test('get started ∂link', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  await loginPage.enterUsernamePassword('standard_user', 'secret_sauce')
  await page.locator('[data-test="login-button"]').click()
});

test ('Login Again', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  await loginPage.enterUsernamePassword('standard_user', 'secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  await scrollDown(page)
  await scrollUp(page)
});

