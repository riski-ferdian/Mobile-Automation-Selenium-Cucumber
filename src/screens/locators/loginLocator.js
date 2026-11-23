import { By } from "selenium-webdriver";

const loginLocator = {
  menuIcon: new By("accessibility id", "View menu"),
  loginMenuItem: new By(
    "-android uiautomator",
    'new UiSelector().text("Log In")',
  ),
  usernameInput: new By("id", "com.saucelabs.mydemoapp.android:id/nameET"),
  passwordInput: new By("id", "com.saucelabs.mydemoapp.android:id/passwordET"),
  loginButton: new By("id", "com.saucelabs.mydemoapp.android:id/loginBtn"),
  catalogTitle: new By(
    "-android uiautomator",
    'new UiSelector().text("Products")',
  ),
  errorMessage: new By(
    "id",
    "com.saucelabs.mydemoapp.android:id/passwordErrorTV",
  ),
};

export default loginLocator;
