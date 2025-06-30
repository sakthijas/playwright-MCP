import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './generated-tests',
  timeout: 120_000,
  reporter: [['list'], ['html', { open: 'never' }]],
});