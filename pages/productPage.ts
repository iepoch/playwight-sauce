import {Locator} from "@playwright/test";
import BasePage from '../pages/basePage'
import {findByText, priceSort} from "../utils/actionHelpers";

class ProductPage extends BasePage {
    readonly pageTitle : Locator
    readonly hamburgerMenu: Locator
    readonly productFilter: Locator
    readonly image: Locator

    constructor(page: any) {
        super(page);
        this.pageTitle = this.page.getByText('Products', {exact: true})
        this.hamburgerMenu = this.page.getByRole('button', { name: 'Open Menu' })
        this.productFilter = this.page.locator('[data-test="product_sort_container"]')
        this.image = this.page.locator('div.inventory_item_img')


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

    async sortPrice() {
        return await priceSort(this.page)
    }
    
    async imageError() {
        let img;
        let imgSrc;
        const imageInventoryItem = await this.page.locator("img.inventory_item_img").all();

    for await ( img of imageInventoryItem){
        imgSrc = await img.getAttribute('src')
    }
    return imgSrc
    }
    

}

export default  ProductPage
