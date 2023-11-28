const baseConfig = require("../cypress.config");

module.exports = {
  ...baseConfig,
    e2e: {
        env: {
            pmtool_url: "https://samanovozbozi.com",
            eshop_url: "https://www.heureka.cz",
            automation_test_store_url: "https://www.tiscali.cz/",
        }
    },
};