/* eslint-disable no-undef */
describe("visitor can navigate between views", () => {
  beforeEach(() => {
    cy.viewport('iphone-x')
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
    })
  })

  it("is expected to navigate to services page", () => {
    cy.get("[data-cy=services-tab]").click();
    cy.url().should("include", "/services");
    cy.get("[data-cy=secondary-nav-bar]").should("not.exist");
  });

  it("is expected to navigate to about organization page", () => {
    cy.get("[data-cy=about-tab]").click();
    cy.url().should("include", "/about/organization");
    cy.get("[data-cy=about-tab]").should("have.class", "Mui-selected");
    cy.get("[data-cy=organization-sub-tab]").should(
      "have.class",
      "Mui-selected"
    );
  });

  it("is expected to navigate to about self care page", () => {
    cy.get("[data-cy=about-tab]").click();
    cy.get("[data-cy=self-care-sub-tab]").click();
    cy.url().should("include", "/about/self_care");
    cy.get("[data-cy=about-tab]").should("have.class", "Mui-selected");
    cy.get("[data-cy=self-care-sub-tab]").should("have.class", "Mui-selected");
  });

  it("is expected to navigate back to about organization page", () => {
    cy.get("[data-cy=about-tab]").click();
    cy.get("[data-cy=self-care-sub-tab]").click();
    cy.get("[data-cy=organization-sub-tab]").click();
    cy.url().should("include", "/about/organization");
    cy.get("[data-cy=about-tab]").should("have.class", "Mui-selected");
    cy.get("[data-cy=organization-sub-tab]").should(
      "have.class",
      "Mui-selected"
    );
  });

  it("is expected to navigate to about home page", () => {
    cy.get("[data-cy=home-tab]").click();
    cy.url().should("include", "/home");
    cy.get("[data-cy=home-tab]").should("have.class", "Mui-selected");
  });
});
