/* eslint-disable no-undef */
describe("Vistor is able to see a single article", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/app_data**", {
      fixture: "app_data.json",
    });
    cy.intercept("GET", "**/api/articles**", {
      fixture: "news_view_articles.json",
    });
  });

  describe("single article view", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/articles/1", {
        fixture: "single_article.json",
      });
      cy.visit("/info/news");
      cy.get("[data-cy=article]")
        .first()
        .within(() => {
          cy.get("[data-cy=read-more-button]").click();
        });
    });
    it("is expected to show single article content", () => {
      cy.get("[data-cy=title]").should("contain.text", "Most recent article");
      cy.get("[data-cy=body]").should(
        "contain.text",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      );
      cy.get("[data-cy=image]")
        .should("have.attr", "alt")
        .should("equal", "Nice doctor picture");
      cy.get("[data-cy=author]").should("contain.text", "Bob Kramer");
      cy.get("[data-cy=data]").should("contain.text", "2021-05-12");
    });
  });
});
