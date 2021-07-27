describe("Visitor can navigate contact view", () => {
  describe("Visitor navigate to contact view from home view", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/app_data**", {
        fixture: "app_data.json",
      });
      cy.visit("/home");
    });
    it("navigates to the contact page", () => {
      cy.get("[data-cy=application-header]").within(() => {
        cy.get("[data-cy=about-contact]").click();
        cy.get("[data-cy=about-contact]").should("have.class", "Mui-selected");
      });
    });
  });
});
