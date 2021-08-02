/* eslint-disable no-undef */
describe("visitor can navigate between views", () => {
  beforeEach(() => {
    cy.viewport("iphone-x", "landscape");
    cy.intercept("GET", "**/api/app_data**", {
      fixture: "app_data.json",
    });
    cy.visit("/");
  });

  it("is expected to redirect to home page", () => {
    cy.url().should("include", "/home");
    cy.get("[data-cy=secondary-nav-bar]").should("not.exist");
  });

  describe("visits all pages", () => {
    beforeEach(() => {
      cy.get("[data-cy=burger-menu]").click();
    });

    it("is expected to navigate to services page", () => {
      cy.get("[data-cy=services-tab]").click();
      cy.get("[data-cy=find-a-service-tab]").click();
      cy.url().should("include", "/services#find-a-service");
      cy.get("[data-cy=secondary-nav-bar]").should("not.exist");
    });

    it("is expected to navigate to about organization page", () => {
      cy.get("[data-cy=about-tab]").click();
      cy.get("[data-cy=organization-tab]").should("contain", "organization");
      cy.get("[data-cy=self-care-tab]").should("contain", "self care");
      cy.get("[data-cy=organization-tab]").click();
      cy.url().should("include", "/about/organization");
    });

    it("is expected to navigate to about self care page", () => {
      cy.get("[data-cy=about-tab]").click();
      cy.get("[data-cy=self-care-tab]").click();
      cy.url().should("include", "/about/self_care");
    });

    it("is expected to navigate to about home page", () => {
      cy.get("[data-cy=home-tab]").click();
      cy.url().should("include", "/home");
    });
  });
});