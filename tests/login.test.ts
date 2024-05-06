import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/sign-in/LoginPage';
import { TestConfig } from '../utils/config-helper';

test.describe('Login Functionality', () => {
  let page: any;
  let loginPage: LoginPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    await page.goto(TestConfig.baseUrl);
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('Correct implementation: Valid credentials', async () => {
    await loginPage.login(TestConfig.login, TestConfig.password);
    expect(loginPage.getLoginIcon).toContain(TestConfig.login);
    });

test('Incorrect implementation: Invalid email', async () => {
    await loginPage.login(TestConfig.incorrecLogin, TestConfig.password);
    expect(loginPage.getErrorMessageCustom).toContain(TestConfig.incorrectDatMsg);
});

test('Incorrect implementation: Invalid password', async () => {
    await loginPage.login(TestConfig.login, TestConfig.incorrectPassword);
    expect(loginPage.getErrorMessageCustom).toContain(TestConfig.incorrectDatMsg);
});

test('Incorrect implementation: Empty email and password', async () => {
    await loginPage.login('', '');
    expect(loginPage.getErrorMessage).toContain(TestConfig.emptytDatMsg);
});

test('Incorrect implementation: Empty email', async () => {
    await loginPage.login('', TestConfig.password);
    expect(loginPage.getErrorMessage).toContain(TestConfig.emptytDatMsg);
});

test('Incorrect implementation: Empty password', async () => {
    await loginPage.login(TestConfig.login, '');
    expect(loginPage.getErrorMessage).toContain(TestConfig.emptytDatMsg);
});


test('Incorrect implementation: Invalid email and password', async () => {
    await loginPage.login(TestConfig.incorrecLogin, TestConfig.incorrectPassword);
    expect(loginPage.getErrorMessageCustom).toContain(TestConfig.incorrectDatMsg);
});
});