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

    it("is expected to show logo in the header", () => {
      cy.get("[data-cy=header-logo]")
        .should("have.attr", "alt")
        .should("equal", "Community Health West London");
    });

    it("is expected to display self care section", () => {
      cy.get("[data-cy=page-section]").should("have.length", 4);
      cy.get("[data-cy=page-section]")
        .first()
        .within(() => {
          cy.get("[data-cy=header]").should(
            "contain.text",
            "Self Care"
          );
          cy.get("[data-cy=description]").should(
            "contain.text",
            "This section tells vistor what is Self Care and how beneficial it is for them"
          );
          cy.get("[data-cy=image]").should("not.exist");
        });
    });
  });  
})