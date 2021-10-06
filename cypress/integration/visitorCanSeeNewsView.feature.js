/* eslint-disable no-undef */
import sizes from "../support/index";
sizes.forEach((size) => {
  describe("visitor can see News view", () => {
    describe("Vistor is able to see list of Articles", () => {
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
        cy.visit("/news_info/news");
      });

      describe.only("About View", () => {
        it("is expected to show logo in the header", () => {
          cy.get("[data-cy=header-logo]")
            .should("have.attr", "alt")
            .should("equal", "Community Health West London");
        });

        it("is expected to display articles", () => {
          cy.get("[data-cy=article]").should("have.length", 6);
        });

        it("is expected to display article details", () => {
          cy.get("[data-cy=article]")
            .first()
            .within(() => {
              cy.get("[data-cy=title]").should("contain.text", "Most recent article");
              cy.get("[data-cy=teaser]").should(
                "contain.text",
                "As self-care has become more mainstream"
              );
              cy.get("[data-cy=image]").should("be.visible");
            });
        });
      });
    });
  });
});
