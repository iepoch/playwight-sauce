import  BasePage  from '../pages/basePage'
import { Locator } from "@playwright/test";
import { selector } from "../utils/actionHelpers";

class LoginPage extends BasePage {
    readonly inputUsername: Locator
    readonly inputPassword: Locator
    readonly submit: Locator

    constructor(page: any) {
        super(page)
        this.inputUsername = this.page.locator('[data-test="username"]')
        this.inputPassword = this.page.locator('[data-test="password"]')
        this.submit = this.page.locator('[data-test="login-button"]')
    }

    async simpleLogin(username: string, password: string){
        await this.inputUsername.fill(username)
        await this.inputPassword.fill(password)
        await this.submit.click()
        await (await selector(this.page, '[data-test="product_sort_container"]')).click()
    }
}

export default LoginPage
