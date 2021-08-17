/* eslint-disable no-undef */
describe("Visitor can search for local services", () => {
  beforeEach(() => {
    cy.intercept("**/api/services**", {
      fixture: "search_all_services.json",
    });
    cy.intercept("GET", "**/api/app_data**", {
      fixture: "app_data.json",
    });
    cy.viewport("macbook-15");
  });

  describe("by entering a valid search term", () => {
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

  describe("by using advanced search", () => {
    beforeEach(() => {
      cy.intercept("**/api/search?q=football&category=All", {
        fixture: "search_results_football.json",
      });
      cy.intercept("**/api/search?q=football&category=Autism", {
        fixture: "search_results_football_category.json",
      });
      cy.visit("/services/search");
    });

    it("is expected to toggle advanced search", () => {
      cy.get("[data-cy=advanced-search-dropdown]").should("not.exist");
      cy.get("[data-cy=advanced-search-checkbox]").click();
      cy.get("[data-cy=advanced-search-dropdown]").should("be.visible");
    });

    it("is expected to narrow down search using search", () => {
      cy.get("[data-cy=search-query]").type("football");
      cy.get("[data-cy=search-submit]").click();
      cy.get("[data-cy=search-results]").children().should("have.length", 2);
      cy.get("[data-cy=advanced-search-checkbox]").click();
      cy.get("[data-cy=advanced-search-dropdown]").click()
      cy.get("li").eq(2).click()
      cy.get("[data-cy=search-results]").children().should("have.length", 1);
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
        cy.get("input").should("have.value", "football");
      });
    });
  });

  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.intercept("**/api/search**", {
        statusCode: 404,
        body: {
          message: "Resource cannot be found",
        },
      });
      cy.visit("/services/search");
    });

    it("is expected to show an error", () => {
      cy.get("[data-cy=search-query]").type("football");
      cy.get("[data-cy=search-submit]").click();
      cy.get("[data-cy=message]").should(
        "contain.text",
        "An error occurred during request, please try again"
      );
    });
  });
});
