import detailProductLocator from "../locators/detailProductLocator.js";
class DetailProductScreen {
  constructor(driver) {
    this.driver = driver;
  }

  async addToCart() {
    await this.driver.findElement(detailProductLocator.addToCartBtn).click();
  }
}

export default DetailProductScreen;
