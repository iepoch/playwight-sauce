import { Given, When, Then } from '@cucumber/cucumber'
import { ICustomWorld } from './custom-world'

Given('User visits homepage', async function (this: ICustomWorld) {
    const page = this.page!
    await page.goto('https://playwright.dev')
})

When('User clicks on plus counter', async function (this: ICustomWorld) {
    // const page = this.page!
    // const plusButton = await page.locator('[data-testid="increase"]')
    // await expect(plusButton).toBeVisible()
    // await plusButton.click()
})

Then('User sees the counter get increased', async function (this: ICustomWorld) {
console.log('Hello World')

  })