import { test, expect } from "@playwright/test";
import LoginPage from "../pages/login-page";
import ContractPage from "../pages/contract-page";
import EditContractAddressPage from "../pages/edit-contract-address-page";
import DataProtectionPage from "../pages/data-protection-page";
import SearchPage from "../pages/search-page";

const contractId = "943972";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.visit();
  await loginPage.login("*******", "*******");
});

test("update contract address", async ({ page }) => {
  const city = "LvivCity";
  const firstLineOfAddress = "Flat B 76 Lebanon Gardens 2";
  const secondLineOfAddress = "Washington 5";

  const contractPage = new ContractPage(page);
  await contractPage.visit(contractId);

  // TODO: add correct wait
  await page.waitForTimeout(5000);

  await contractPage.clickEditContractDetails();

  const editContractAddressPage = new EditContractAddressPage(page);
  await editContractAddressPage.updateContractAddress(
    city,
    firstLineOfAddress,
    secondLineOfAddress
  );

  const contractAddressText = await contractPage.getContractAddressText();

  expect(contractAddressText).toContain(city);
  expect(contractAddressText).toContain(firstLineOfAddress);
  expect(contractAddressText).toContain(secondLineOfAddress);
});

test("search contract", async ({ page }) => {
  const searchPage = new SearchPage(page);
  const contractPage = new ContractPage(page);

  await searchPage.fillSearchInput(contractId);
  await searchPage.clickSearchButton();
  await searchPage.openContractById(contractId);

  const contractTitleText = await contractPage.getContractTitleText();

  expect(contractTitleText).toContain(contractId);
});

test("pass data protection", async ({ page }) => {
  const contractPage = new ContractPage(page);
  const dataProtectionPage = new DataProtectionPage(page);

  await contractPage.visit(contractId);
  await contractPage.clickStartDataProtection();

  await dataProtectionPage.selectCustomerID();
  await dataProtectionPage.selectFirstLineOfAddress();
  await dataProtectionPage.selectEmailAddress();
  await dataProtectionPage.clickSubmitButton();

  const successMessageText = await contractPage.getSuccessToastText();
  expect(successMessageText).toContain("Data protection passed");
});
