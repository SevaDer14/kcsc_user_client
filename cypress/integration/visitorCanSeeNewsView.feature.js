/* eslint-disable no-undef */
import sizes from "../support/index";
sizes.forEach((size) => {
  describe("visitor can see information view", () => {
    describe("Vistor is able to see list of Articles", () => {
      beforeEach(() => {
        cy.intercept("GET", "**/api/app_data**", {
          fixture: "app_data.json",
        });
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1], size[2]);
        } else {
          cy.viewport(size);
        }
      });

      describe("About View", () => {
        beforeEach(() => {
          cy.intercept("GET", "**/api/articles**", {
            fixture: "news_view_articles.json",
          });
          cy.visit("/info/news");
        });

        it("is expected to show logo in the header", () => {
          cy.get("[data-cy=header-logo]")
            .should("have.attr", "alt")
            .should("equal", "Community Health West London");
        });

        it("is expected to display articles", () => {
          cy.get("[data-cy=article]").should("have.length", 6);
        });

        it("is expected to display hero article", () => {
          cy.get("[data-cy=article]")
            .first()
            .within(() => {
              cy.get("[data-cy=title]").should(
                "contain.text",
                "Most recent article"
              );
              cy.get("[data-cy=teaser]").should(
                "contain.text",
                "As self-care has become more mainstream, the"
              );
              cy.get("[data-cy=image]").should("not.exist");
            });
        });

        it("is expected to display regular article", () => {
          cy.get("[data-cy=article]")
            .eq(1)
            .within(() => {
              cy.get("[data-cy=title]").should("contain.text", "Article 2");
              cy.get("[data-cy=teaser]").should(
                "contain.text",
                "Several organizations and researchers take a"
              );
              cy.get("[data-cy=image]").should("be.visible");
            });
        });
      });
    });
  });
});
