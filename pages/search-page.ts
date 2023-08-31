import BasePage from "./base-page";
import { Locator } from "@playwright/test";

export default class SearchPage extends BasePage {
  readonly searchInput: Locator = this.page.getByTestId('search-form-input');
  readonly searchButton: Locator = this.page.getByTestId('search-form-button');

  async fillSearchInput(contractId) {
    await this.searchInput.fill(contractId);
  }

  async clickSearchButton() {
    await this.searchButton.click();
  }

  async openContractById(contractId: string) {
    await this.page.locator(`[data-test-id="ContractIdUrl_${contractId}"]`).click();
  }
}
