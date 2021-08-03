/* eslint-disable no-undef */
describe("visitor can navigate Services View", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.intercept("GET", "**/api/sections**", {
      fixture: "services_view_section.json",
    });
    cy.visit("/");
    cy.get("[data-cy=burger-menu]").click();
    cy.get("[data-cy=services-tab]").click();
    cy.get("[data-cy=kcsc-clw-tab]").click();
  });

  it("is expected to show logo in the header", () => {
    cy.get("[data-cy=header-logo]")
      .should("have.attr", "alt")
      .should("equal", "Community Health West London");
  });

  it("is expected to display service page ", () => {
    cy.get("[data-cy=page-section]").should("have.length", 6);
    cy.get("[data-cy=page-section]")
      .first()
      .within(() => {
        cy.get("[data-cy=header]").should("contain.text", "Find a service");
        cy.get("[data-cy=description]").should(
          "contain.text",
          "On this page, you can find all available services in your area"
        );
      });
    cy.get("[data-cy=page-section]")
      .eq(1)
      .within(() => {
        cy.get("[data-cy=header]").should("contain.text", "KCSC Self Care");
        cy.get("[data-cy=description]").should(
          "contain.text",
          "The Voluntary & Community Sector provide health and wellbeing services in North Kensington Communities to support those affected by the Grenfell Tower fire."
        );
        cy.get("[data-cy=image]").should("be.visible");
        cy.get("[data-cy=button_1]").should(
          "contain.text",
          "Find self-care service"
        );
        cy.get("[data-cy=button_1]")
          .invoke("attr", "href")
          .should("eq", "http://localhost:3001/services/search");
      });
  });

  it("is expected to scroll when using secondary navbar", () => {
    cy.scrollTo(0, 0);
    cy.get("[data-cy=burger-menu]").click();
    cy.get("[data-cy=services-tab]").click();
    cy.get("[data-cy=other-vcs-lg-contracts-tab]").click();
    cy.window().its("scrollY").should("not.equal", 0);
  });
});
