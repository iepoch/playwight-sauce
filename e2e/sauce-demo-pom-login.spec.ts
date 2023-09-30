import { test, expect } from '../utils/customFixtures';
import ProductPage from "../pages/productPage";


let products: ProductPage

test.beforeEach("Before Test Run", async ({ loginPage,  page  }) =>{
    await page.goto('/')
    await loginPage.simpleLogin('standard_user', 'secret_sauce')
    products = new ProductPage(page)
})



test('Sort by Price Low to High',  async ({page}) =>{
    await products.filterProducts('lohi')
    expect(await products.sortPrice()).toEqual('$7.99')

})

test('Sort by Price High to Low',  async ({page}) =>{
    await products.filterProducts('hilo')
    expect(await products.sortPrice()).toEqual('$49.99')
})


test('Images are valid images', async ({ page } ) => {
    expect(await products.imageError()).not.toContain('404')
})

