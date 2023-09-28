import { test, expect } from '../utils/customFixtures';
import ProductPage from "../pages/productPage";

let products: ProductPage

test.beforeEach("Before Test Run", async ({ loginPage,  page  }) =>{
    await page.goto('/')
    await loginPage.simpleLogin('standard_user', 'secret_sauce')
    products = new ProductPage(page)
})



test('Login Sauce Demo Site - POM Better Method',  async ({navPage, actionHelpers,  page}) =>{
    await navPage.nav('button', { name: 'Open Menu' });
    await navPage.nav('link', { name: 'All Items' });
    expect(products.itemDescription('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromis')).not.toContain('hello')
    await products.filter()
    await products.filterProducts('za')
    await products.filterProducts('lohi')
    await actionHelpers.scrollDown(page)
    const descript = actionHelpers.findByText(page, 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromis', {})
    console.log(descript)
})

