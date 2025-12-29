import { Locator, Page } from "@playwright/test";

export default class BasePage {
  protected readonly page: Page;
  constructor(page) {
    this.page = page;
  }
  protected async clickOnElem(elem: Locator) {
    await elem.click();
  }

  protected async fillElem(elem: Locator, txt: string) {
    await elem.fill(txt);
  }

  public async takeScreenShot(filePath: string) {
    await this.page.screenshot({ path: filePath });
  }
}
