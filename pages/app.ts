import { Page } from "@playwright/test";
import BasePage from "./base-page";
import CompanyPage from "./company-page";
import CompanySearchPage from "./company-search-page";
import ContractPage from "./contract-page";
import DataProtectionPage from "./data-protection-page";
import EditCompanyPage from "./edit-company-page";
import LoginPage from "./login-page";
import EditContractAddressPage from "./edit-contract-address-page";
import SearchPage from "./search-page";

export default class App {
  readonly page: Page;
  readonly basePage: BasePage;
  readonly companyPage: CompanyPage;
  readonly companySearchPage: CompanySearchPage;
  readonly contractPage: ContractPage;
  readonly dataProtectionPage: DataProtectionPage;
  readonly editCompanyPage: EditCompanyPage;
  readonly editContractAddressPage: EditContractAddressPage;
  readonly loginPage: LoginPage;
  readonly searchPage: SearchPage;


  constructor(page: Page) {
    this.page = page;
    this.basePage = new BasePage(page);
    this.companyPage = new CompanyPage(page);
    this.companySearchPage = new CompanySearchPage(page);
    this.contractPage = new ContractPage(page);
    this.dataProtectionPage = new DataProtectionPage(page);
    this.editCompanyPage = new EditCompanyPage(page);
    this.editContractAddressPage = new EditContractAddressPage(page);
    this.loginPage = new LoginPage(page);
    this.searchPage = new SearchPage(page);
  }
}
