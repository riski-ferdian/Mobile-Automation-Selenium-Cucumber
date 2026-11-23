import { Given, When, Then } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import fs from "node:fs";
import LoginScreen from "../../src/screens/actions/LoginScreen.js";

const userData = JSON.parse(
  fs.readFileSync("./src/data/userData.json", "utf-8"),
);

Given("user navigates to the mobile login screen", async function () {
  this.loginScreen = new LoginScreen(this.driver);
  await this.loginScreen.openLoginForm();
});

When("user enters valid mobile credentials", async function () {
  await this.loginScreen.login(
    userData.validUser.username,
    userData.validUser.password,
  );
});

When(
  "user enters username {string} and password {string}",
  async function (username, password) {
    await this.loginScreen.login(username, password);
  },
);

Then("user is redirected to the mobile product catalog", async function () {
  const actualTitle = await this.loginScreen.getCatalogTitle();
  assert.strictEqual(actualTitle, "Products");
});

Then(
  "user should see the mobile error message {string}",
  async function (expectedErrorMessage) {
    const actualError = await this.loginScreen.getErrorMessage();
    assert.strictEqual(actualError, expectedErrorMessage);
  },
);
