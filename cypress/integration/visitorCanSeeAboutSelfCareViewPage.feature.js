describe("visitor can see About Self Care view", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/app_data**", {
      fixture: "testimonials.json",
    });
  });

  describe("About View", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/sections**", {
        fixture: "about_self_care_view_sections.json",
      });
      cy.visit("/about/self_care");
    });

    it.only("is expected to show logo in the header", () => {
      cy.get("[data-cy=header-logo]")
        .should("have.attr", "alt")
        .should("equal", "Community Health West London");
    });

    it("is expected to display background and setup section", () => {
      cy.get("[data-cy=page-section]").should("have.length", 4);
      cy.get("[data-cy=page-section]")
        .first()
        .within(() => {
          cy.get("[data-cy=header]").should(
            "contain.text",
            "Background and Set-up"
          );
          cy.get("[data-cy=description]").should(
            "contain.text",
            "This section tells vistor about Community Health West London background and setup"
          );
          cy.get("[data-cy=image]").should("be.visible");
        });
    });
  });  
})