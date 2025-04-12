import { test as base } from '@playwright/test';

type MyFixtures = {
  testData: { username: string; password: string };
};

export const test = base.extend<MyFixtures>({
  testData: async ({}, use) => {
    const data = { username: 'testuser', password: 'Test@123' };
    await use(data);
  },
});