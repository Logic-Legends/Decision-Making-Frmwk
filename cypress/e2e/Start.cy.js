import axeCore from "axe-core";

describe("Start Page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	it("should have a Start button", () => {
		cy.findByRole("button", { name: /Start/i }).should("exist");
	});

	it("should navigate to Define Goal page when Start button is clicked", () => {
		cy.findByRole("button", { name: /Start/i }).click();
		cy.url().should("include", "http://localhost:3000/define-goal");
	});

	it("should detect no accessibility violations on the page", () => {
		cy.window()
			.then((win) => {
				// Run Axe accessibility tests on the page
				return axeCore.run(win.document, {
					runOnly: {
						type: "tag",
						values: ["wcag2a", "wcag2aa"],
					},
				});
			})
			.then((results) => {
				// Output the results of the Axe accessibility tests to the console
				cy.log("Accessibility Violations:");
				cy.log(results.violations);
				expect(results.violations.length).to.equal(0);
			});
	});

	it("should have the correct styles", () => {
		cy.get(".container").should("have.css", "font-size", "16px");
		cy.get(".start-btn").should(
			"have.css",
			"background-color",
			"rgb(0, 0, 255)"
		);
	});
});
