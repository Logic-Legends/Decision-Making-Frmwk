const { defineConfig } = require("cypress");
const {webpackConfig}= require("../client/webpack/common.config");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig,
    },
    indexHtmlFile:"client/cypress/component-index.html",
    specPattern:"client/**/*.cy.js",
    supportFile:"client/cypress/component.js",
  },
});
