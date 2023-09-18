import { expect } from "@playwright/test";
import { test } from "../base";

const companyName = "company100000";
const companyId = "100000";

test.beforeEach(async ({ app }) => {
  await app.loginPage.visit();
  await app.loginPage.login();
});

test("should search company", async ({ app }) => {
  await app.companySearchPage.navigateToCompanies();
  await app.companySearchPage.searchForCompany(companyName);

  const companyNameInSearchResult =
    await app.companySearchPage.getCompanySearchResultCompanyName(0);
  expect(companyNameInSearchResult).toEqual(companyName);
});

test("should update company", async ({ app }) => {
  const primaryContactValue = "Mark Blackburn Test 2";
  const notificationMethodValue = "Email";

  await app.companyPage.visit(companyId);
  await app.companyPage.clickEditCompanyDetails();

  await app.editCompanyPage.editCompanyDetails({
    primaryContact: primaryContactValue,
    notificationMethod: notificationMethodValue,
  });

  const updatedPrimaryContact = await app.companyPage.getPrimaryContactValue();
  expect(updatedPrimaryContact).toEqual(primaryContactValue);

  const notificationMethod = await app.companyPage.getNotificationMethodValue();
  expect(notificationMethod).toEqual(notificationMethodValue);
});
