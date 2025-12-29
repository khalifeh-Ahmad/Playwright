import BasePage from "../basePage";

export default class ProductPage extends BasePage {
  private readonly addToCartBtn = this.page.locator(
    '[id="add-to-cart-sauce-labs-backpack"]'
  );

  private readonly shoppingCartBtn = this.page.locator(
    '[id="shopping_cart_container"]'
  );

  async clickAddToCartBtn() {
    await this.clickOnElem(this.addToCartBtn);
  }

  async clickShoppingCartBtn() {
    await this.clickOnElem(this.shoppingCartBtn);
  }
}
