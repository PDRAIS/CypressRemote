const { defineConfig } = require("cypress");
const {
  addMatchImageSnapshotPlugin,
} = require("cypress-image-snapshot/plugin");
const path = require("path");
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    // NOTE: Storing secrets directly in this file is insecure for shared repositories.
    // Prefer using CI/CD secret storage or environment variables in production.
    env: {
      CAT_API_KEY:
        "live_vn7IeMOozA5lOtBShVzNUkyPPV2TKqyFfuwXPHkaSHBNKhxMxp2P432UJCXaBwOf",
    },
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
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
