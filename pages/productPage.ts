import { Locator } from "@playwright/test";
import  BasePage  from '../pages/basePage'
import {findByText, selectByRole, selector} from "../utils/actionHelpers";

class ProductPage extends BasePage {
    readonly pageTitle : Locator
    readonly hamburgerMenu: Locator
    readonly productFilter: Locator

    constructor(page: any) {
        super(page);
        this.pageTitle = this.page.getByText('Products', {exact: true})
        this.hamburgerMenu = this.page.getByRole('button', { name: 'Open Menu' })
        this.productFilter = this.page.locator('[data-test="product_sort_container"]')

    }

    async verifyPageTitle(){
        await this.pageTitle.isVisible()
    }

    async menu() {
        await this.hamburgerMenu.click()
    }

    async filter() {
        await this.productFilter.click()
    }
    async itemDescription(text: string, options?: object) {
        await findByText(this.page, text, options)
    }

    async filterProducts(value: string) {
        await this.productFilter.selectOption(value)
    }
}

export default  ProductPage
