/* eslint-disable no-undef */
import sizes from "../support/index";

sizes.forEach((size) => {
  describe(`Visitor is able to see a single case study ${size}`, () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/app_data**", {
        fixture: "app_data.json",
      });
      cy.intercept("GET", "**/api/case_studies**", {
        fixture: "case_study_view.json",
      });
      cy.intercept("GET", "**/api/articles/1", {
        fixture: "single_case_study.json",
      });
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1], size[2]);
      } else {
        cy.viewport(size);
      }
      cy.visit("/about/case_studies");
    });

    describe("single case study view", () => {
      beforeEach(() => {
        cy.get("[data-cy=article]")
          .first()
          .within(() => {
            cy.get("[data-cy=read-more-button]").click();
          });
      });
      it("is expected to show single case study content", () => {
        cy.get("[data-cy=title]").should("contain.text", "case study 1");
        cy.get("[data-cy=body]").should(
          "contain.text",
          "case study 1 text Science gets a lot of respect these days. Unfortunately, it's also getting a lot of competition from"
        );
        cy.get("[data-cy=image]")
          .should("have.attr", "alt")
          .should("equal", "Nice doctor picture");
        cy.get("[data-cy=author]").should("contain.text", "Miriana Newton");
        cy.get("[data-cy=date]").should("contain.text", "2021-05-12");
      });
    });
  });
});
