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
  describe("Services View", () => {
    before(() => {
      cy.visit("/services");
      cy.intercept('GET', '**/api/services', {fixture: 'services.json'})
    });
    it("is expected to display service page ", () => {
      cy.get("[data-cy=service-section]").should("have.length", 6);
      cy.get("[data-cy=service-section]")
        .first()
        .within(() => {
          cy.get("[data-cy=header]").should("contain.text", "Find a service");
          cy.get("[data-cy=description]").should(
            "contain.text",
            "On this page, you can find all available services in your area"
          );
        });
    });
  });
});
