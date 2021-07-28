describe("visitor can navigate between views", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/app_data**", {
      fixture: "testimonials.json",
    });
    cy.visit("/")
  });

  it('is expected to navigate to correct routes and highlight correct tabs', () => {
    cy.url().should("include", "/home")
    cy.get("[data-cy=secondary-nav-bar]").should("not.exist")
    cy.get("[data-cy=home-tab]").should("have.class", "Mui-selected");

    cy.get("[data-cy=services-tab]").click()
    cy.url().should("include", "/services")
    cy.get("[data-cy=secondary-nav-bar]").should("be.visible")
    cy.get("[data-cy=services-tab]").should("have.class", "Mui-selected");

    cy.get("[data-cy=about-tab]").click()
    cy.url().should("include", "/about/organization")
    cy.get("[data-cy=about-tab]").should("have.class", "Mui-selected");
    cy.get("[data-cy=organization-sub-tab]").should("have.class", "Mui-selected");
    
    cy.get("[data-cy=self-care-sub-tab]").click()
    cy.url().should("include", "/about/self_care")
    cy.get("[data-cy=about-tab]").should("have.class", "Mui-selected");
    cy.get("[data-cy=self-care-sub-tab]").should("have.class", "Mui-selected");

    cy.get("[data-cy=organization-sub-tab]").click()
    cy.url().should("include", "/about/organization")
    cy.get("[data-cy=about-tab]").should("have.class", "Mui-selected");
    cy.get("[data-cy=organization-sub-tab]").should("have.class", "Mui-selected");

    cy.get("[data-cy=home-tab]").click()
    cy.url().should("include", "/home")
    cy.get("[data-cy=home-tab]").should("have.class", "Mui-selected");
  });
})