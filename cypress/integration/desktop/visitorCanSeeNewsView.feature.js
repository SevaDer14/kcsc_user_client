/* eslint-disable no-undef */
describe("Vistor is able to see list of Articles", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/app_data**", {
      fixture: "app_data.json",
    });
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          );
          cy.get("[data-cy=image]").should("be.visible");
        });
    });
  });
});
