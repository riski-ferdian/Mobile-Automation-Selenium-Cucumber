import { until } from "selenium-webdriver";
import loginLocator from "../locators/loginLocator.js";

class LoginScreen {
  constructor(driver) {
    this.driver = driver;
  }

  async openLoginForm() {
    const menuBtn = await this.driver.wait(
      until.elementLocated(loginLocator.menuIcon),
      5000,
    );
    await menuBtn.click();

    const loginMenu = await this.driver.wait(
      until.elementLocated(loginLocator.loginMenuItem),
      5000,
    );
    await loginMenu.click();
  }

  async login(username, password) {
    const userField = await this.driver.wait(
      until.elementLocated(loginLocator.usernameInput),
      5000,
    );
    await userField.sendKeys(username);

    const passField = await this.driver.findElement(loginLocator.passwordInput);
    await passField.sendKeys(password);

    const submitBtn = await this.driver.findElement(loginLocator.loginButton);
    await submitBtn.click();
  }

  async getCatalogTitle() {
    const titleEl = await this.driver.wait(
      until.elementLocated(loginLocator.catalogTitle),
      5000,
    );
    return await titleEl.getText();
  }

  async getErrorMessage() {
    const errorEl = await this.driver.wait(
      until.elementLocated(loginLocator.errorMessage),
      5000,
    );
    return await errorEl.getText();
  }
}

export default LoginScreen;
