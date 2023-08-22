import BasePage from "./base-page";

export default class CompanyPage extends BasePage {
  async visit(companyId?){
    await this.page.goto(
      `/companies/${companyId}`
    );
  }
}
