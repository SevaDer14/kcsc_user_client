/* eslint-disable no-undef */
describe("visitor can navigate between views", () => {
  describe("Index View", () => {
    before(() => {
      cy.visit("/");
    });
    it("is expected to display logo and mission statement", () => {
      cy.get("[data-cy=header-logo]")
        .should("have.attr", "alt")
        .should("equal", "Community Health West London");
      cy.get("[data-cy=mission-statement]").should(
        "contain.text",
        "Our aim is to improve people's health and well-being"
      );
      cy.get("[data-cy=logo]")
        .should("have.attr", "alt")
        .should("equal", "Community Health West London");
    });
    it("is expected to display footer", () => {
      cy.get("[data-cy=application-footer]").within(() => {
        cy.get("[data-cy=logo]").should("be.visible");
        cy.get("[data-cy=about]").should(
          "contain.text",
          "Community Health West London is a Community Interest Company made up"
        );
        cy.get("[data-cy=email]").should(
          "contain.text",
          "info@communityhealthwestlondon.org.uk"
        );
        cy.get("[data-cy=phone]").should(
          "contain.text",
          "Phone: 0207 243 9806"
        );
        cy.get("[data-cy=navigation]").within(() => {
          cy.get("[data-cy=link]").should("have.length", 5);
          cy.get("[data-cy=link]").eq(0).should("contain", "Home");
          cy.get("[data-cy=link]").eq(1).should("contain", "About");
          cy.get("[data-cy=link]").eq(2).should("contain", "Find a service");
          cy.get("[data-cy=link]").eq(3).should("contain", "Contact");
          cy.get("[data-cy=link]").eq(4).should("contain", "News and Info");
        });
        cy.get("[data-cy=web-access-text]").should(
          "contain",
          "This site is built according to Web Content Accessibility Guidlines"
        );
        cy.get("[data-cy=copyrights]").should(
          "contain",
          "2020 All Rights Reserved by Community Health West London."
        );
      });
    });
  });

  describe("About View", () => {
    before(() => {
      cy.visit("/about");
    });
    it("is expected to display view subtitle", () => {
      cy.get("[data-cy=header-subtitle]").should("contain.text", "About us");
    });
  });

  describe("Search View", () => {
    before(() => {
      cy.visit("/search");
    });
    it("is expected to display view subtitle", () => {
      cy.get("[data-cy=header-subtitle]").should("contain.text", "Search");
    });
  });
});
