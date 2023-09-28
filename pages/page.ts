/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
import { Page, Locator } from '@playwright/test'

export class NewPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
       

    }

}

module.exports = { NewPage }