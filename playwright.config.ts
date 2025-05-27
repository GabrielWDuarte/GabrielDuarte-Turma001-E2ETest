import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/scenarios',
  retries: 0,
  timeout: 60000,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
