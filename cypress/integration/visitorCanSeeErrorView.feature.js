/* eslint-disable no-undef */
import sizes from "../support/index";

sizes.forEach((size) => {
  describe(`if API call to get page layout fails ${size}`, () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/app_data**", {
        statusCode: 404,
        body: {
          message: "Page cannot be found",
        },
      });
      cy.intercept("**/api/services**", {
        fixture: "search_all_services.json",
      });
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1], size[2]);
      } else {
        cy.viewport(size);
      }
    });

    it("is expected to redirect to Error View", () => {
      cy.visit("/");
      cy.url().should("include", "/error");
      cy.get("[data-cy=header]").should("contain.text", "ERROR");
      cy.get("[data-cy=message]").should(
        "contain.text",
        "We are sorry, but the requested page cannot be loaded, please try again later."
      );
    });
  });
});
