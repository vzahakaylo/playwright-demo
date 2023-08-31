import { Locator } from "@playwright/test";
import BasePage from "./base-page";

export default class ContractPage extends BasePage {
  readonly contractAddressBlock: Locator = this.page.locator(
    "#contract-address > dd > span"
  );
  readonly getContractTitleLocator: Locator = this.page.locator(
    '[data-test-id="contract-title"]'
  );
  readonly editContractDetailsLink: Locator = this.page.locator(
    '[data-test-id="edit-contract-details-link"]'
  );
  readonly startDataProtectionButtonLocator: Locator = this.page.getByRole(
    "button",
    { name: "Start data protection" }
  );

  async visit(contractId?) {
    await this.page.goto(`/contracts/${contractId}`);
  }

  async clickEditContractDetails() {
    await this.editContractDetailsLink.click();
  }

  async getContractAddressText() {
    return await this.contractAddressBlock.innerText();
  }

  async clickStartDataProtection() {
    await this.startDataProtectionButtonLocator.click();
  }

  async getContractTitleText() {
    return await this.getContractTitleLocator.innerText();
  }
}
