import DetailProductScreen from "../../src/screens/actions/detailProductScreen.js";
import DashboardScreen from "../../src/screens/actions/DashboardScreen.js";
import CheckoutScreen from "../../src/screens/actions/CheckoutScreen.js";
import { When, Then } from "@cucumber/cucumber";
import assert from "assert";

When("user tap the product", async function () {
  this.dashboardScreen = new DashboardScreen(this.driver);
  await this.dashboardScreen.clickProduct();
});

When("user tap add to cart button", async function () {
  this.detailProductScreen = new DetailProductScreen(this.driver);
  await this.detailProductScreen.addToCart();
});

Then(
  "product should be added to cart is {string}",
  async function (expectedText) {
    this.checkoutScreen = new CheckoutScreen(this.driver);
    const actualText = await this.checkoutScreen.verifyCheckout();
    assert.strictEqual(actualText, expectedText, "gagal menambahkan product");
  },
);
