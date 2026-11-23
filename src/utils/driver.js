import { Builder } from "selenium-webdriver";

export async function createDriver() {
  const capabilities = {
    browserName: "",
    platformName: "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "emulator-5554",
    "appium:appPackage": "com.saucelabs.mydemoapp.android",
    "appium:appActivity":
      "com.saucelabs.mydemoapp.android.view.activities.SplashActivity",
    "appium:appWaitActivity":
      "com.saucelabs.mydemoapp.android.view.activities.*",
    "appium:autoGrantPermissions": true,
  };

  const driver = await new Builder()
    .usingServer("http://127.0.0.1:4723")
    .withCapabilities(capabilities)
    .forBrowser("")
    .build();

  return driver;
}
