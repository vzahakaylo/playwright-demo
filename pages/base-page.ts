import { Page } from "@playwright/test";

export default class BasePage {
  constructor(public page: Page) {}

  async visit() {
    await this.page.goto("/");
  }

  async getSuccessToastText() {
    return await this.page.getByTestId("nb-notification-box").innerText();
  }

  // TODO: Change waitings
  async pageIsLoaded() {
   await this.page.waitForTimeout(5000);
  }
}
