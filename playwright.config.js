// @ts-check

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Use one worker on CI */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter */
  reporter: 'html',

  /* Shared settings */
  use: {
    baseURL: 'https://www.saucedemo.com',

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Test projects */
  projects: [
    {
      name: 'api',
      testMatch: /api\/.*\.spec\.js/,
    },

    {
      name: 'chromium',
      testIgnore: /api\/.*\.spec\.js/,
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      testIgnore: /api\/.*\.spec\.js/,
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      testIgnore: /api\/.*\.spec\.js/,
      use: { ...devices['Desktop Safari'] },
    },
  ],
});