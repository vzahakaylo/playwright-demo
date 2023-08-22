import BasePage from "./base-page";

export default class LoginPage extends BasePage {
  async login(username, password) {
    await this.page.getByRole("textbox", { name: "Username" }).fill(username);
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
    await this.page.getByRole("button", { name: "submit" }).click();
  }
}
