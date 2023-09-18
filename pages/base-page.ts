import { Page } from "@playwright/test";

export default class BasePage {
  constructor(public page: Page) {}

  async visit() {
    await this.page.goto("/");
  }

  async getSuccessToastText() {
    return await this.page.getByTestId("nb-notification-box").innerText();
  }

  async pageIsLoaded() {
    await this.page.waitForResponse(`${process.env.GRAPHQL_URL}`);
  }
}
