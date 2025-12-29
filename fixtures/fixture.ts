import { test as baseTest } from "@playwright/test";

import LoginPage from "../tests/pages/login/login";
import ProductPage from "../tests/pages/product/product";

type pages = {
  loginPage: LoginPage;
  prodPage: ProductPage;
};

const testPages = baseTest.extend<pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  prodPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
});

export const test = testPages;
export const expect = testPages.expect;
