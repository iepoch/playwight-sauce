// import {loginCreds, invalidMessages, addLog} from "../utils/commands";
// import {checkForElementsText} from "../utils/checks";

import { Locator } from "playwright";
import { NewPage } from './page'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends NewPage {
 
	readonly inputUsername: Locator
	readonly inputPassword: Locator
  /**
   * @param {import('playwright').Page} page
   */
    constructor(page: any){
		super(page);
		this.inputUsername = this.page.locator('[data-test="username"]')
		this.inputPassword = this.page.locator('[data-test=password]')
	};	
    
    
	/**
	 * a method to encapsule automation code to interact with the page
	 * e.g. to login using username and password
	 *  note: incase of reset of users or if tos gets updated this should be used to validate the TOS exists and buttons can be clicked
	 */
     async enterUsernamePassword(username: string, password: string){
       await this.inputUsername.fill(username)
       await this.inputPassword.fill(password)
     }
	
}

export default LoginPage