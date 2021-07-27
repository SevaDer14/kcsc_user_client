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
        cy.get("[data-cy=contact-tab]").click();
        cy.get("[data-cy=contact-tab]").should("have.class", "Mui-selected");
      });
    });
  });
});
