describe("Tech Quiz", () => {
  it("starts the quiz when Start button is clicked", () => {
    cy.visit("/");
    cy.get("button").contains("Start Quiz").click();
  });
});
