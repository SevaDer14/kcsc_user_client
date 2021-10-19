/* eslint-disable no-undef */
import sizes from "../support/index";
sizes.forEach((size) => {
  describe("visitor can see Case Studies view", () => {
    describe("Visitor is able to see list of Case studies", () => {
      beforeEach(() => {
        cy.intercept("GET", "**/api/app_data**", {
          fixture: "app_data.json",
        });
        cy.intercept("GET", "**/api/articles**", {
          fixture: "news_view_articles.json",
        });
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1], size[2]);
        } else {
          cy.viewport(size);
        }
        cy.visit("/about/case_studies");
      });

      describe("Case Studies View", () => {
        
        it("is expected to display case studies", () => {
          cy.get("[data-cy=case-study]").should("have.length", 2);
        });

        it("is expected to display article details", () => {
          cy.get("[data-cy=case-study]")
            .first()
            .within(() => {
              cy.get("[data-cy=name]").should("contain.text", "Maggie Black");
              cy.get("[data-cy=text]").should(
                "contain.text",
                "\"In my personal life, I am a daughter, a mother"
              );
              cy.get("[data-cy=image]").should("be.visible");
            });
        });
      });
    });
  });
});
