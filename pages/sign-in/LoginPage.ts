import { Page } from '@playwright/test';
import { SignInLocators } from './signin';
import { log } from 'console';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string, password: string) {
    await this.page.click(SignInLocators.signInButton);
    await this.page.fill(SignInLocators.username, username);
    await this.page.fill(SignInLocators.password, password);
    await this.page.click(SignInLocators.loginButton);
  }
  
  async getLoginIcon() { 
    return await this.page.textContent(SignInLocators.successMessage);
  }

  async getErrorTitle() {
    return await this.page.textContent(SignInLocators.errorTitle);
  }

  async getErrorMessage() {
    return await this.page.textContent(SignInLocators.errorMessage);
  }

  async getErrorMessageCustom() {
    return await this.page.textContent(SignInLocators.errorMessageCustom);
  }
}