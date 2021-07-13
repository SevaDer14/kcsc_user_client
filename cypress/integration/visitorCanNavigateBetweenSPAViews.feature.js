/* eslint-disable no-undef */
describe("visitor cna navigate between views", () => {
  describe("Index View", () => {
    before(() => {
      cy.visit("/");
    });
    it("is expected to display view subtitle", () => {
      cy.get("[data-cy=header-logo]")
        .should("have.attr", "alt")
        .should("equal", "Kensington & Chelsea Social Council");

      cy.get("[data-cy=header-subtitle]").should(
        "contain.text",
        "Self care for better health"
      );
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
