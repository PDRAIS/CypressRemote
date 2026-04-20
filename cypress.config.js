const { defineConfig } = require("cypress");
const {
  addMatchImageSnapshotPlugin,
} = require("cypress-image-snapshot/plugin");
const path = require("path");
const fs = require("fs");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  projectId: "jrhhew",
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy.js,feature}",
    // NOTE: Storing secrets directly in this file is insecure for shared repositories.
    // Prefer using CI/CD secret storage or environment variables in production.
    env: {
      CAT_API_KEY:
        "live_vn7IeMOozA5lOtBShVzNUkyPPV2TKqyFfuwXPHkaSHBNKhxMxp2P432UJCXaBwOf",
    },
    async setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      // Register the custom log task
      on("task", {
        log(message) {
          const logFile = path.join(__dirname, "a11y-violations.log");
          fs.appendFileSync(logFile, JSON.stringify(message, null, 2) + "\n");
          return null;
        },
      });

      return config;
    },
  },
});
