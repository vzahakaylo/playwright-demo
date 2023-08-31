import { test, expect } from "@playwright/test";
import LoginPage from "../pages/login-page";
import CompanyPage from "../pages/company-page";
import CompanySearchPage from "../pages/company-search-page";
import EditCompanyPage from "../pages/edit-company-page";

const companyName = "company100000";
const companyId = "100000";

test.beforeEach(async ({ page }, testInfo) => {
  const loginPage = new LoginPage(page);

  await loginPage.visit();
  await loginPage.login("*******", "*******");
});

test("should search company", async ({ page }) => {
  const companySearchPage = new CompanySearchPage(page);
  await companySearchPage.navigateToCompanies();
  await companySearchPage.searchForCompany(companyName);

  const companyNameInSearchResult =
    await companySearchPage.getCompanySearchResultCompanyName(0);
  expect(companyNameInSearchResult).toEqual(companyName);
});

test("should update company", async ({ page }) => {
  const primaryContactValue = "Mark Blackburn Test 2";
  const notificationMethodValue = "Email";

  const companyPage = new CompanyPage(page);
  await companyPage.visit(companyId);
  await companyPage.clickEditCompanyDetails();

  const editCompanyPage = new EditCompanyPage(page);
  await editCompanyPage.editCompanyDetails({
    primaryContact: primaryContactValue,
    notificationMethod: notificationMethodValue,
  });

  const updatedPrimaryContact = await companyPage.getPrimaryContactValue();
  expect(updatedPrimaryContact).toEqual(primaryContactValue);

  const notificationMethod = await companyPage.getNotificationMethodValue();
  expect(notificationMethod).toEqual(notificationMethodValue);
});
