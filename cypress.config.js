const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "utq3wr",
    watchForFileChanges: false,
    env: {
      //username or password related credentials should not be committed
      "username": "",
      "password": ""
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
