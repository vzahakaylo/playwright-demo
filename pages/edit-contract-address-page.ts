import { Locator } from "@playwright/test";
import BasePage from "./base-page";

export default class EditContractAddressPage extends BasePage {
  readonly cityInput: Locator = this.page.locator("#city");
  readonly addressLine1Input: Locator = this.page.locator("#addressLine1");
  readonly addressLine2Input: Locator = this.page.locator("#addressLine2");
  readonly submitButton: Locator = this.page.locator('[data-test-id="submit"]');

  async updateContractAddress(city, addressLine1, addressLine2) {
    await this.cityInput.fill(city);
    await this.addressLine1Input.fill(addressLine1);
    await this.addressLine2Input.fill(addressLine2);
    await this.submitButton.click();
  }
}
