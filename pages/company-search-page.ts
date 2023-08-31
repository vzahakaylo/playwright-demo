import { Locator } from "@playwright/test";
import BasePage from "./base-page";

export default class CompanySearchPage extends BasePage {
  readonly companiesLink: Locator = this.page.getByRole('link', { name: 'Companies' });
  readonly companyDetailsInput: Locator = this.page.locator("#companyDetails");
  readonly searchButton: Locator = this.page.locator('[data-test-id="search-by-company-details-button"]');
  
  async navigateToCompanies() {
    await this.companiesLink.click();
  }

  async searchForCompany(companyName) {
    await this.companyDetailsInput.fill(companyName);
    await this.searchButton.click();
  }

  async getCompanySearchResultCompanyName(index) {
    const resultLocator = this.page.locator(`[data-test-id="companies-search-results-table"] [data-test-id="tablerow_${index}"] [data-test-id="companyName"] div`);
    return await resultLocator.innerText();
  }
}
