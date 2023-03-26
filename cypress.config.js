const { defineConfig } = require("cypress");

module.exports = defineConfig({
	projectId: "kycgik",
	component: {
		devServer: {
			framework: "react",
			bundler: "webpack",
		},
	},
	component: {
		devServer: {
			framework: "react",
			bundler: "webpack",
			
		},
		indexHtmlFile: "client/cypress/component-index.html",
		specPattern: "client/**/*.cy.js",
		supportFile: "client/cypress/component.js",
	},

	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
