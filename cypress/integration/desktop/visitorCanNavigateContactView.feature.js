/* eslint-disable no-undef */
describe("Visitor can navigate contact view", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/app_data**", {
      fixture: "app_data.json",
    });
  });
  describe("Visitor navigate to contact view from home view", () => {
    beforeEach(() => {
      cy.visit("/home");
      cy.get("[data-cy=application-header]").within(() => {
        cy.get("[data-cy=contact-tab]").click();
        cy.get("[data-cy=contact-tab]").should("have.class", "Mui-selected");
      });
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

  describe.only("User can contact CHWL using form", () => {
    beforeEach(() => {
      cy.intercept("POST", "**/api/inquiries", {
        body: {
          message: "Thank you for your inquiry! We will be in touch soon.",
        },
      });
      cy.visit("/contact");
    });

    it("is expected to submit form and receive success message", () => {
      cy.get("[data-cy=contact-form]").within(() => {
        cy.get("[data-cy=name]").should("contain", "Enter your name");
        cy.get("[data-cy=name]").type("Bob Kramer");
        cy.get("[data-cy=email]").should("contain", "Enter your email");
        cy.get("[data-cy=email]").type("bob@kramer.se");
        cy.get("[data-cy=message]").should("contain", "Enter your message...");
        cy.get("[data-cy=message]").type("No thanks for the awesome form");
        cy.get("[data-cy=submit-button]").should("contain", "Submit");
        cy.get("[data-cy=submit-button]").click();
      });
      cy.get("[data-cy=success-message]").should(
        "contain",
        "Thank you for your inquiry, we'll be in touch soon!"
      );
    });
  });
});
