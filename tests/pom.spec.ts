import { test } from "../fixtures/fixture";
import LoginPage from "./pages/login/login";
import ProductPage from "./pages/product/product";
import * as testData from "./testData/testData.json";

let page;
let loginPage;
let prodPage;

test.describe("Suite1", () => {
  ///hooks
  test.beforeAll(async () => {});
  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    prodPage = new ProductPage(page);

    await page.goto("https://www.saucedemo.com/");
  });
  test.afterEach(async () => {
    await page.close();
  });
  test.afterAll(async () => {});

  ////
  test("E2E", async ({}) => {
    //const loginPage = new LoginPage(page);
    //const productPage = new ProductPage(page);

    await loginPage.enterUsername(testData.username);
    await loginPage.enterPassword(testData.password);
    //take screenshot
    await loginPage.takeScreenShot("./tests/screenshoots/login.png");
    await loginPage.clickloginBtn();

    await prodPage.clickAddToCartBtn();
    await loginPage.takeScreenShot("./tests/screenshoots/addToCart.png");
    await prodPage.clickShoppingCartBtn();
    await loginPage.takeScreenShot("./tests/screenshoots/shoppingCart.png");

    //  await page.waitForTimeout(3000);
  });
});

test("outside suite1 @sanity", async () => {
  console.log("sanity");
});
test("outside suite1 @smoke", async () => {
  console.log("smoke");
});

test("outside suite1 another @smoke", async () => {
  console.log("smoke again");
});
