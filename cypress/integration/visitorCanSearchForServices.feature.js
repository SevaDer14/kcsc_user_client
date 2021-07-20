/* eslint-disable no-undef */
describe("Visitor can search for local services", () => {
  describe("by entering a valid serch term", () => {
    before(() => {
      cy.intercept("**/api/search**", {
        fixture: "search_results_football.json",
      });
      cy.visit("/search");
      cy.get("[data-cy=search-query]").type("football");
      cy.get("[data-cy=search-submit]").click();
    });
    it("is expected to return results based on query", () => {
      cy.get("[data-cy=search-results]").children().should("have.length", 2);
    });
  });
});
