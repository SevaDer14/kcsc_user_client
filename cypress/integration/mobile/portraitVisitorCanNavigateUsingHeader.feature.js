/* eslint-disable no-undef */
describe("visitor can navigate between views", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
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
      cy.get("[data-cy=mental-health-tab]").click();
      cy.url().should("include", "/services");      
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

    it("is expected to navigate to news page", () => {
      cy.get("[data-cy=news-and-info-tab]").click();
      cy.get("[data-cy=news-tab]").click();
      cy.url().should("include", "/info/news");
    });

    it("is expected to navigate to news page", () => {
      cy.get("[data-cy=news-and-info-tab]").click();
      cy.get("[data-cy=information-tab]").click();
      cy.url().should("include", "/info/information");
    });

    it("is expected to navigate to about home page", () => {
      cy.get("[data-cy=home-tab]").click();
      cy.url().should("include", "/home");
    });
  });
});
