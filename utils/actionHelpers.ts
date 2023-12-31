import { Page } from "@playwright/test";

export const scrollUp = async (page: Page) => {
   return await page.keyboard.press('PageUp')
}

export const scrollDown = async (page: Page)=> {
    return await page.keyboard.press('PageDown')
}

export const selector = async (page: Page, element: string, options?: object)=> {
  return page.locator(element, options)
}

export const selectByRole = async(role: "alert" | "alertdialog" | "application" | "article" | "banner" | "blockquote" | "button" | "caption" | "cell" | "checkbox", options: object, page: Page) => {
    return page.getByRole(role, options)
}

export const selectByPlaceholder = async(text: string, options: object, page: Page) => {
    return page.getByPlaceholder(text, options);
}

export const findByText = async (page: Page, text: string, options?: object)=> {
    return page.getByText(text, options)
}

export const priceSort = async(page: Page) =>{
 return await page.textContent('.inventory_item_price')
}

