import BasePage from "./base-page";
import { Locator } from "@playwright/test";

export default class EditCompanyPage extends BasePage {
  readonly primaryContactInput: Locator = this.page.getByLabel('Primary contact');
  readonly notificationMethodSelect: Locator = this.page.getByLabel('Notification method');
  readonly saveButton: Locator = this.page.locator('[data-test-id="save-button"]');

  async editCompanyDetails(options) {
    const { primaryContact, notificationMethod } = options;

    await this.primaryContactInput.fill(primaryContact);
    await this.notificationMethodSelect.selectOption(notificationMethod);
    await this.saveButton.click();
    
  }
}
