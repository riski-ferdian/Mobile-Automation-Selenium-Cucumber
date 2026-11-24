import { until } from "selenium-webdriver";
import checkoutLocator from "../locators/checkoutLocator.js";

class CheckoutScreen {
  constructor(driver) {
    this.driver = driver;
  }

  async verifyCheckout() {
    const title = await this.driver.wait(
      until.elementLocated(checkoutLocator.verifyAddToCart),
      5000,
    );

    return await title.getText();
  }
}

export default CheckoutScreen;
