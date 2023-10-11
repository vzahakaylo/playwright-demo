import BasePage from "./base-page";
import { Locator } from "@playwright/test";

export default class LoginPage extends BasePage {
  readonly usernameInput: Locator = this.page.getByRole("textbox", { name: "Username" });
  readonly passwordInput: Locator = this.page.getByRole("textbox", { name: "Password" });

  readonly submitButton: Locator = this.page.getByRole("button", { name: "submit" });

  async login(username = process.env.USERNAME!, password = process.env.PASSWORD!) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
