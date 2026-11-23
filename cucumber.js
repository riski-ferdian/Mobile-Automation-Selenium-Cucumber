export default {
  paths: ["test/features/**/*.feature"],
  import: ["test/step-definitions/**/*.js"],
  format: ["summary", "html:reports/cucumber-report.html"],
  timeout: 30000,
};
