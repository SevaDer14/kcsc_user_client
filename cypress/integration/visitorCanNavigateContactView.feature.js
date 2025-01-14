/* eslint-disable no-undef */
import sizes from "../support/index";

sizes.forEach((size) => {
  describe(`Visitor can navigate contact view on ${size}`, () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/app_data**", {
        fixture: "app_data.json",
      });
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1], size[2]);
      } else {
        cy.viewport(size);
      }
    });
    describe("Visitor navigate to contact view from home view", () => {
      beforeEach(() => {
        cy.visit("/home");
        switch (size) {
          case "macbook-15":
            cy.get("[data-cy=contact-tab]").click();
            break;

          default:
            cy.get("[data-cy=burger-menu]").click();
            cy.get("[data-cy=contact-tab]").click();
            break;
        }
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

    describe("User can contact CHWL using form", () => {
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
          cy.get("[data-cy=purpose-lable]").should(
            "contain",
            "Purpose of inquiry"
          );
          cy.get("select").select("I want to donate");
          cy.get("[data-cy=purpose]").should("contain", "I want to donate");
          cy.get("[data-cy=name]").should("contain", "Enter your name");
          cy.get("[data-cy=name]").type("Bob Kramer");
          cy.get("[data-cy=email]").should("contain", "Enter your email");
          cy.get("[data-cy=email]").type("bob@kramer.se");
          cy.get("[data-cy=message]").should(
            "contain",
            "Enter your message..."
          );
          cy.get("[data-cy=message]").type("No thanks for the awesome form");
          cy.get("[data-cy=submit-button]").should("contain", "Submit");
          cy.get("[data-cy=submit-button]").click();
        });
        cy.get("[data-cy=message]").should(
          "contain",
          "Thank you for your inquiry, we'll be in touch soon!"
        );
      });
    });
  });
});
