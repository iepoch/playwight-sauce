import { test as base } from '@playwright/test'
import * as actionHelpers from './actionHelpers'
import LoginPage from "../pages/loginPage";
import NavPage from "../pages/navPage";

// Declare the types of your fixtures.
type MyFixtures = {
    loginPage: LoginPage;
    navPage: NavPage;
    actionHelpers: typeof actionHelpers;
};
export const test = base.extend<MyFixtures>({
    actionHelpers: async ({page}, use) => {
        await use(actionHelpers)
    },

    loginPage: async ({page}, use)=>{
        await use(new LoginPage(page))
    },

    navPage: async ({page}, use) =>{
        await use(new NavPage(page))
    }

});

export { expect } from '@playwright/test';
