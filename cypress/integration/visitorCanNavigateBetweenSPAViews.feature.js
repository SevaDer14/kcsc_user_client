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
});
