import { test, expect } from "@playwright/test";
import LoginPage from "../pages/login-page";
import CompanyPage from "../pages/company-page";

const companyName = "company100000";
const companyId = "100000";

test.beforeEach(async ({ page }, testInfo) => {
  const loginPage = new LoginPage(page);

  await loginPage.visit();
  await loginPage.login("********", "********");
});

test("should search company", async ({ page }) => {
  await page.getByRole("link", { name: "Companies" }).click();
  await page.locator("#companyDetails").fill(companyName);
  await page
    .locator('[data-test-id="search-by-company-details-button"]')
    .click();

  await expect(
    page.locator(
      '[data-test-id="companies-search-results-table"] [data-test-id="tablerow_0"] [data-test-id="companyName"] div'
    )
  ).toHaveText(companyName);
});

test("should update company", async ({ page }) => {
  const primaryContactValue = "Mark Blackburn Test 2";

  const companyPage = new CompanyPage(page);

  companyPage.visit(companyId);

  await page.locator('[data-test-id="edit-company-details-button"]').click();
  await page.getByLabel("Primary contact").fill(primaryContactValue);
  await page.getByLabel("Notification method").selectOption("EmailAndSms");
  await page.locator('[data-test-id="save-button"]').click();
  await page.getByRole("heading", { name: "Success" });
  await expect(
    page.locator(
      '[data-test-id="company-primary-contact"] [data-test-id="shimmer-value"]'
    )
  ).toHaveText(primaryContactValue);
  await expect(
    page.locator(
      '[data-test-id="notify-method"] [data-test-id="shimmer-value"]'
    )
  ).toHaveText("Email & SMS");
});


