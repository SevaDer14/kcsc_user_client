/* eslint-disable no-undef */
describe("Visitor can search for local services", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
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

    it("is expected to render accordion content correctly", () => {
      cy.get("[data-cy=search-result-0]").click();
      cy.get("[data-cy=search-result-0-details]").within(() => {
        cy.get("[data-cy=toggle-map-visibility-button]").should("not.exist");
        cy.get("[data-cy=description]").should(
          "contain.text",
          "Turn Up & Play session for adults"
        );
        cy.get("[data-cy=contacts]").should(
          "contain",
          "email: lydia.mindsunitedfc@gmail.com\nwebsite: https://www.mindsunitedfc.com"
        );
      });
      cy.get("[data-cy=search-result-1]").click();
      cy.get("[data-cy=search-result-1-details]").within(() => {
        cy.get("[data-cy=toggle-map-visibility-button]").click();
        cy.get("[data-cy=map]").should("exist");
        cy.get("[data-cy=toggle-map-visibility-button]").click();
        cy.get("[data-cy=map]").should("not.exist");
        cy.get("[data-cy=description]").should(
          "contain.text",
          "The brilliant QPR Community Trust"
        );
        cy.get("[data-cy=contacts]").should(
          "contain.text",
          "phone: 02033981833\nemail: youth@dalgarnotrust.org.uk\n"
        );
      });
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
