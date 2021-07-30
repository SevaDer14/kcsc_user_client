/* eslint-disable no-undef */
describe("Visitor can navigate contact view", () => {
  describe("Visitor navigate to contact view from home view", () => {
    beforeEach(() => {
      cy.viewport("iphone-x", "landscape");
      cy.intercept("GET", "**/api/app_data**", {
        fixture: "app_data.json",
      });
      cy.visit("/home");
      cy.get("[data-cy=burger-menu]").click();
      cy.get("[data-cy=contact-tab]").click();
    });
    it("checks contact us field", () => {
      cy.get("[data-cy=contact-us]").within(() => {
        cy.get("[data-cy=contact-us-header]").should("contain", "Contact Us");
        cy.get("[data-cy=contact-us-email]").should(
          "contain",
          "Email: info@communityhealthwestlondon.org.uk"
        );
        cy.get("[data-cy=contact-us-phone]").should(
          "contain",
          "Phone: 0207-243 9806"
        );
      });
    });
  });
});
