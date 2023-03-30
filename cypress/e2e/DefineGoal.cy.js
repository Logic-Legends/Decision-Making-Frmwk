import "cypress-axe";

describe("DefineGoal Component", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/define-goal");
	});

	it("should display the DefineGoal page", () => {
		cy.get("h3").should("have.text", "What is the goal");
		cy.get("#message").should("be.visible");
		cy.get("button").contains("BACK").should("be.visible");
		cy.get("button").contains("NEXT").should("be.visible");
	});

	it("should go back to the Start page when clicking the Back button", () => {
		cy.get("button").contains("BACK").click();
		cy.url().should("include", "http://localhost:3000/");
	});

	it("should display an error message when clicking the Next button without entering a goal", () => {
		cy.get("button").contains("NEXT").click();
		cy.get(".modal").should("be.visible");
		cy.contains("Please complete this step!");
		cy.get(".modal-btn").click();
	});

	// 	it("should be accessible", () => {
	// 	cy.injectAxe();
	// 	cy.checkA11y();
	// });
});
describe("Importance component", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/Importance");
	});

	it("renders the component", () => {
		cy.get(".container").should("exist");
		cy.contains("How important is the decision?").should("exist");
	});

	it("selects a radio button option", () => {
		cy.get('input[name="importance"]').check("Low");
		cy.get('input[name="importance"]').should("be.checked");
		cy.get('input[name="importance"]').check("High");
		cy.get('input[name="importance"]').should("be.checked");
	});

	it("shows error modal if no option selected", () => {
		cy.get("#button-same-line button:last-of-type").click();
		cy.contains("Please select a response.").should("exist");
	});

	it("navigates to the previous page when clicking back button", () => {
		cy.get("#button-same-line button:first-of-type").click();
		cy.url().should("include", "http://localhost:3000/");
	});

	it("navigates to the next page when clicking next button with an option selected", () => {
		cy.get('input[name="importance"]').check("Low");
		cy.get("#button-same-line button:last-of-type").click();
		cy.url().should("include", "http://localhost:3000/Capacity");
	});

	it("stores selected option in sessionStorage", () => {
		cy.get('input[name="importance"]').check("High");
		cy.reload();
		cy.get('input[name="importance"]').should("be.checked");
	});
    // it("should pass basic accessibility checks", () => {
	// 		cy.injectAxe();
	// 		cy.checkA11y();
	// 	});
});
describe("Capacity page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/Capacity");
	});

	it("should display the title", () => {
		cy.get("h2").should("have.text", "Capacity");
	});

	it("should display two radio buttons with labels", () => {
		cy.get('input[name="capacity"]').should("have.length", 2);
		cy.get(".radio-label").should("have.length", 2);
	});

	it("should show an error message if no radio button is selected", () => {
		cy.get(".inner").contains("Next").click();
		cy.get(".modal-display").should(
			"contain.text",
			"Please select a response."
		);
		cy.get(".modal-btn").click();
	});

	it("should allow the user to select a radio button and navigate to the next page", () => {
		cy.get('input[name="capacity"][value="Low"]').check();
		cy.get(".inner").contains("Next").click();
		cy.url().should("include", "http://localhost:3000/time-resource");
	});

	it("should allow the user to go back to the previous page", () => {
		cy.get(".inner").contains("Back").click();
		cy.url().should("include", "http://localhost:3000/Importance");
	});
});

describe("TypeOfDecision", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/type-of-decision"); 
	});

	it("displays the Type of Decision header", () => {
		cy.contains("Type of Decision");
	});

	it("displays two radio buttons for selecting Iterative or Single decision", () => {
		cy.get('input[type="radio"]').should("have.length", 2);
		cy.get('input[value="Iterative"]').should("exist");
		cy.get('input[value="Single"]').should("exist");
	});

	it("allows the user to select a decision type", () => {
		cy.get('input[value="Iterative"]').check();
		cy.get('input[value="Iterative"]').should("be.checked");
		cy.get('input[value="Single"]').should("not.be.checked");

		cy.get('input[value="Single"]').check();
		cy.get('input[value="Single"]').should("be.checked");
		cy.get('input[value="Iterative"]').should("not.be.checked");
	});

	it("displays a modal when the user clicks Next without selecting a decision type", () => {
		cy.contains("Next").click();
		cy.contains("Please select a response");
	});

	it("navigates to the Time and Resource page when the user clicks Back", () => {
		cy.contains("Back").click();
		cy.url().should("include", "http://localhost:3000/time-resource");
	});

	it("navigates to the Type of Information page when the user selects a decision type and clicks Next", () => {
		cy.get('input[value="Iterative"]').check();
		cy.contains("Next").click();
		cy.url().should("include", "http://localhost:3000/type-of-information");

		// cy.get('input[value="Single"]').check();
		// cy.contains("Next").click();
		// cy.url().should("include", "http://localhost:3000/type-of-information");
	});
});
describe("TypeOfInformation", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/type-of-information");
	});

	it("displays the Type of Information page", () => {
		cy.contains("Type of Information");
	});

	// it("displays a tooltip when the question mark is clicked", () => {
	// 	cy.get(".question-mark-pages").click();
	// 	cy.contains("Information Type");
	// });

	it("displays an error message if no radio button is selected", () => {
		cy.get('button:contains("NEXT")').click();
		cy.contains("Please select a response.");
	});

	it("allows the user to select a radio button", () => {
		cy.get('input[value="Explicit"]').check();
		cy.get('button:contains("NEXT")').click();
		cy.url().should("include", "http://localhost:3000/amount-of-information");
	});

	it("allows the user to go back to the previous page", () => {
		cy.get('button:contains("BACK")').click();
		cy.url().should("include", "http://localhost:3000/type-of-decision");
	});
});

describe("TypeOfInformation component", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/amount-of-information");
	});

	it("renders the component without errors", () => {
		cy.get(".container").should("exist");
	});

	// it("shows a tooltip when clicking the question mark image", () => {
	// 	cy.get(".question-mark-pages").click();
	// 	cy.get(".tooltip-container").should("be.visible");
	// });

	it("selects the 'High' radio button when clicked", () => {
		cy.get(".radio").contains("High").click();
		cy.get(".radio input:checked").should("have.value", "High");
	});

	it("navigates to the next page when clicking the 'NEXT' button", () => {
		cy.get(".radio").contains("High").click();
		cy.get(".inner").contains("NEXT").click();
		cy.url().should("include", "http://localhost:3000/Voting-Method");
	});

	it("shows an error message when clicking the 'NEXT' button without selecting a radio button", () => {
		cy.get(".inner").contains("NEXT").click();
		cy.get(".modal").should("be.visible");
		cy.get(".modal p").should("have.text", "Please select a response.");
	});

	it("navigates to the previous page when clicking the 'BACK' button", () => {
		cy.get(".inner").contains("BACK").click();
		cy.url().should("include", "http://localhost:3000/type-of-information");
	});
});




