import { test } from '../utils/customFixtures';
import LoginPage from '../pages/loginPage';
import ProductPage from "../pages/productPage";
import { selector } from "../utils/actionHelpers";

let login: LoginPage
let products: ProductPage

test.beforeEach("Before Test Run", async ({ page }) =>{
    await page.goto('/')
    login = new LoginPage(page)
})


test('Login Sauce Demo Site - POM Messy Method',  async ({ page }) =>{
    await login.simpleLogin('standard_user', 'secret_sauce')
    products = new ProductPage(page)
    await products.verifyPageTitle();
    await products.menu()
    await products.filter()
})


