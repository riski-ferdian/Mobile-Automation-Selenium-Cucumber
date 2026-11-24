import dashboardLocator from "../locators/dashboardLocator.js";
import { until } from "selenium-webdriver";

class DashboardScreen {
  constructor(driver) {
    this.driver = driver;
  }

  async clickProduct() {
    const product = await this.driver.wait(
      until.elementLocated(dashboardLocator.backpackItem),
      5000,
    );
    await product.click();
  }
}

export default DashboardScreen;
