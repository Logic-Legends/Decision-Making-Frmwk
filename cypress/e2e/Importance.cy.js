describe("Importance component", () => {
	
it('passes', () => {
    cy.visit('http://localhost:3000/Importance')
  })
	
});

it("should display radio buttons", () => {
	cy.visit("http://localhost:3000/Importance");
	cy.get(".low-rdb").should("be.visible"); // check that the Low radio button is visible
	cy.get(".high-rdb").should("be.visible"); // check that the High radio button is visible
});

it("should show an error message if no radio button is selected", () => {
	cy.visit("http://localhost:3000/Importance");
	cy.contains("Next").click(); // click the Next button without selecting a radio button
	cy.contains("Please select a response").should("be.visible"); // check that the error message is visible
	cy.contains("OK").click(); // click the OK button to dismiss the error message
});

it("should navigate to Capacity page when a radio button is selected", () => {
	cy.visit("http://localhost:3000/Importance");
	cy.get(".low-rdb").check(); // select the Low radio button
	cy.contains("Next").click(); // click the Next button
	cy.url().should("include", "http://localhost:3000/Capacity"); // check that the URL includes "/capacity"
});
