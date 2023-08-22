import BasePage from "./base-page";

export default class ContractPage extends BasePage {
  async visit(contractId?){
    await this.page.goto(
      `/contracts/${contractId}`
    );
  }
}
