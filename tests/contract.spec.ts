import { expect } from "@playwright/test";
import { test } from "../base";

const contractId = "943972";

test.beforeEach(async ({ app }) => {
  await app.loginPage.visit();
  await app.loginPage.login();
});

test("update contract address", async ({ app }) => {
  const city = "LvivCity";
  const firstLineOfAddress = "Flat B 76 Lebanon Gardens 2";
  const secondLineOfAddress = "Washington 5";

  await app.contractPage.visit(contractId);

  // TODO: add correct wait
  await app.page.waitForTimeout(5000);

  await app.contractPage.clickEditContractDetails();

  await app.editContractAddressPage.updateContractAddress(
    city,
    firstLineOfAddress,
    secondLineOfAddress
  );

  const contractAddressText = await app.contractPage.getContractAddressText();

  expect(contractAddressText).toContain(city);
  expect(contractAddressText).toContain(firstLineOfAddress);
  expect(contractAddressText).toContain(secondLineOfAddress);
});

test("search contract", async ({ app }) => {
  await app.searchPage.fillSearchInput(contractId);
  await app.searchPage.clickSearchButton();
  await app.searchPage.openContractById(contractId);

  const contractTitleText = await app.contractPage.getContractTitleText();

  expect(contractTitleText).toContain(contractId);
});

test("pass data protection", async ({ app }) => {
  await app.contractPage.visit(contractId);
  await app.contractPage.clickStartDataProtection();

  await app.dataProtectionPage.selectCustomerID();
  await app.dataProtectionPage.selectFirstLineOfAddress();
  await app.dataProtectionPage.selectEmailAddress();
  await app.dataProtectionPage.clickSubmitButton();

  const successMessageText = await app.contractPage.getSuccessToastText();
  expect(successMessageText).toContain("Data protection passed");
});
