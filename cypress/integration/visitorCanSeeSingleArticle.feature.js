/* eslint-disable no-undef */
import sizes from "../support/index";

sizes.forEach((size) => {
  describe(`Vistor is able to see a single article ${size}`, () => {
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
    });

    describe("single article view", () => {
      beforeEach(() => {
        cy.intercept("GET", "**/api/articles/1", {
          fixture: "single_article.json",
        });
        cy.visit("/news_info/news");
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
          "Science gets a lot of respect these days. Unfortunately, it's also getting a lot of competition from misinformation. Seven in 10 Americans think the benefits from science outweigh the harms, and nine in 10 think science and technology will create more opportunities for future generations. Scientists have made dramatic progress in understanding the universe and the mechanisms of biology, and advances in computation benefit all fields of science.\n  On the other hand, Americans are surrounded by a rising tide of misinformation and fake science. Take climate change. Scientists are in almost complete agreement that people are the primary cause of global warming. Yet polls show that a third of the public disagrees with this conclusion.\n  \n  In my 30 years of studying and promoting scientific literacy, I've found that college educated adults have large holes in their basic science knowledge and they're disconcertingly susceptible to superstition and beliefs that aren't based on any evidence. One way to counter this is to make it easier for people to detect pseudoscience online. To this end, my lab at the University of Arizona has developed an artificial intelligence-based pseudoscience detector that we plan to freely release as a web browser extension and smart phone app."
        );
        cy.get("[data-cy=image]")
          .should("have.attr", "alt")
          .should("equal", "Nice doctor picture");
        cy.get("[data-cy=author]").should("contain.text", "Bob Kramer");
        cy.get("[data-cy=date]").should("contain.text", "2021-05-12");
      });
    });
  });
});
