import  BasePage  from '../pages/basePage'
import {selectByRole, selector} from "../utils/actionHelpers";

class NavPage extends BasePage {
    constructor(page) {
        super(page)
    }

    /**
     * To find a navigation by role type
     * @param role "alert" | "alertdialog" | "application" | "article" | "banner" | "blockquote" | "button" | "caption" | "cell" | "checkbox"
     * @param options { name: 'Open Menu' }
     */
    async nav(role: any, options: object, text?: string) {
        await (await selectByRole(role, options, this.page)).click();

    }

}

export default NavPage
