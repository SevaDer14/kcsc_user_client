/* eslint-disable no-undef */
describe("visitor can navigate between views", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/app_data**", {
      fixture: "app_data.json",
    });
    cy.visit("/");
  });

  it("is expected to redirect to home page", () => {
    cy.url().should("include", "/home");
    cy.get("[data-cy=secondary-nav-bar]").should("not.exist");
    cy.get("[data-cy=home-tab]").should("have.class", "Mui-selected");
  });

  it("is expected to navigate to services page", () => {
    cy.get("[data-cy=services-tab]").click();
    cy.url().should("include", "/services");
    cy.get("[data-cy=services-tab]").should("have.class", "Mui-selected");
  });

  it("is expected to navigate to about organization page", () => {
    cy.get("[data-cy=about-tab]").click();
    cy.get("[data-cy=organization-sub-tab]").click();
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

  it("is expected to navigate to news page", () => {
    cy.get("[data-cy=news-and-info-tab]").click();
    cy.url().should("include", "/info/news");
    cy.get("[data-cy=news-and-info-tab]").should("have.class", "Mui-selected");
    cy.get("[data-cy=news-sub-tab]").should("have.class", "Mui-selected");
  });

  it("is expected to navigate to contact page", () => {
    cy.get("[data-cy=contact-tab]").click();
    cy.url().should("include", "/contact");
    cy.get("[data-cy=secondary-nav-bar]").should("not.exist");
    cy.get("[data-cy=contact-tab]").should("have.class", "Mui-selected");
  });

  it("is expected to navigate to about home page", () => {
    cy.get("[data-cy=home-tab]").click();
    cy.url().should("include", "/home");
    cy.get("[data-cy=home-tab]").should("have.class", "Mui-selected");
  });
});
