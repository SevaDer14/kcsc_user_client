/* eslint-disable no-undef */
describe("Visitor can search for local services", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/app_data**", {
      fixture: "app_data.json",
    });
  });

  describe("by entering a valid serch term", () => {
    beforeEach(() => {
      cy.intercept("**/api/search**", {
        fixture: "search_results_football.json",
      });
      cy.visit("/services/search");
      cy.get("[data-cy=search-query]").type("football");
      cy.get("[data-cy=search-submit]").click();
    });

    it("is expected to return results based on query", () => {
      cy.get("[data-cy=search-results]").children().should("have.length", 2);
    });
  });

  describe("from home page", () => {
    beforeEach(() => {
      cy.intercept("**/api/search**", {
        fixture: "search_results_football.json",
      });
      cy.visit("/home");
      cy.get("[data-cy=search-query]").type("football");
      cy.get("[data-cy=search-submit]").click();
    });

    it("is expected to return results based on query", () => {
      cy.get("[data-cy=search-results]").children().should("have.length", 2);
    });
  });
});
