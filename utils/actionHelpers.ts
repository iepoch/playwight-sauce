import { Page } from "playwright";

export async function scrollDown(page: Page){
    await page.keyboard.press('PageDown');
}

export async function scrollUp(page: Page){
    await page.keyboard.press('PageUp');
}

