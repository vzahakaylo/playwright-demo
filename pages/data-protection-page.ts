import BasePage from "./base-page";
import { Locator } from "@playwright/test";

export default class DataProtectionPage extends BasePage {
  readonly customerIDLabel: Locator = this.page.locator(
    'label[for="cb-customer-id"]'
  );
  readonly firstLineOfAddressLabel: Locator = this.page.locator(
    'label[for="cb-address-line1"]'
  );
  readonly emailAddressLabel: Locator = this.page.locator(
    'label[for="cb-email"]'
  );
  readonly submitButton: Locator = this.page.locator('[data-test-id="submit"]');

  async selectCustomerID() {
    await this.customerIDLabel.click();
  }

  async selectFirstLineOfAddress() {
    await this.firstLineOfAddressLabel.click();
  }

  async selectEmailAddress() {
    await this.emailAddressLabel.click();
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }
}
