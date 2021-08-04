/* eslint-disable no-undef */
describe("Visitor can search for local services", () => {
  beforeEach(() => {
    cy.viewport("iphone-x", "landscape");
    cy.intercept("**/api/services**", {
      fixture: "search_all_services.json",
    });
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
    });

    it("is expected to redirect and return results based on query", () => {
      cy.get("[data-cy=advanced-search-checkbox]").should("not.exist");
      cy.get("[data-cy=search-query]").type("football");
      cy.get("[data-cy=search-submit]").click();
      cy.url().should("include", "/services/search");
      cy.get("[data-cy=search-results]").children().should("have.length", 2);
      cy.get("[data-cy=search-query]").within(() => {
        cy.get('input').should('have.value', 'football')
      });
    });
  });

  describe("by using advanced search", () => {
    beforeEach(() => {
      cy.intercept("**/api/search**", {
        fixture: "search_results_football.json",
      });
      cy.visit("/services/search");
    });

    it("is expected to toggle advanced search", () => {
      cy.get("[data-cy=advanced-search-dropdown]").should("not.exist");
      cy.get("[data-cy=advanced-search-checkbox]").click();
      cy.get("[data-cy=advanced-search-dropdown]").should("be.visible");
    });
  });
});
