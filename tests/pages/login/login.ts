import BasePage from "../basePage";

export default class LoginPage extends BasePage {
  private readonly username = this.page.locator('[id="user-name"]');
  private readonly password = this.page.locator('[id="password"]');
  private readonly loginBtn = this.page.locator('[id="login-button"]');

  async enterUsername(usrName: string) {
    await this.fillElem(this.username, usrName);
  }
  async enterPassword(pswrd:string) {
    await this.fillElem(this.password, pswrd);
  }

  async clickloginBtn() {
    await this.clickOnElem(this.loginBtn);
  }
}
