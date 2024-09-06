const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: { 
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    env:{
      "requestMode": true,
      "chromeWebSecurity": false
    },
    chromeWebSecurity: false,
    testIsolation: false
  },
});
