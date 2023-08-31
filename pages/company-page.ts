import BasePage from "./base-page";
import { Locator } from "@playwright/test";

export default class CompanyPage extends BasePage {
  readonly editCompanyDetailsButton: Locator = this.page.locator('[data-test-id="edit-company-details-button"]');
  readonly primaryContactInput: Locator = this.page.locator('[data-test-id="input-primary-contact"]');
  readonly notificationMethodSelect: Locator = this.page.locator('[data-test-id="select-notification-method"]');
  readonly saveButton: Locator = this.page.locator('[data-test-id="save-button"]');
  readonly primaryContactValue: Locator = this.page.locator('[data-test-id="company-primary-contact"] [data-test-id="shimmer-value"]');
  readonly notificationMethodValue: Locator = this.page.locator('[data-test-id="notify-method"] [data-test-id="shimmer-value"]');

  async visit(companyId?) {
    await this.page.goto(`/companies/${companyId}`);
  }

  async clickEditCompanyDetails() {
    await this.editCompanyDetailsButton.click();
  }

  async editCompanyDetails(primaryContact, notificationMethod) {
    await this.primaryContactInput.fill(primaryContact);
    await this.notificationMethodSelect.selectOption(notificationMethod);
    await this.saveButton.click();
  }

  async getPrimaryContactValue() {
    return await this.primaryContactValue.innerText();
  }

  async getNotificationMethodValue() {
    return await this.notificationMethodValue.innerText();
  }
}
