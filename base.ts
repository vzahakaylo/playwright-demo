import { test as base } from "@playwright/test";
import App from "./pages/app";

export const test = base.extend<{ app: App }>({
  app: async ({ page }, use) => {
    const app = new App(page);

    await use(app);
  },

  // settingsPage: async ({ page }, use) => {
  //   await use(new SettingsPage(page));
  // },
});
