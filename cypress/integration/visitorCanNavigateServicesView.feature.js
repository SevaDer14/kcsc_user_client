/* eslint-disable no-undef */
import sizes from "../support/index";

sizes.forEach((size) => {
  describe(`visitor can navigate Services View on ${size}`, () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/app_data**", {
        fixture: "app_data.json",
      });
      cy.intercept("GET", "**/api/sections**", {
        fixture: "services_view_section.json",
      });
      cy.intercept("GET", "**/api/app_data**", {
        fixture: "app_data.json",
      });
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1], size[2]);
      } else {
        cy.viewport(size);
      }
      cy.visit("/");
      switch (size) {
        case "macbook-15":
          cy.get("[data-cy=application-header]").within(() => {
            cy.get("[data-cy=services-tab]").click();
          });
          break;

        default:
          cy.get("[data-cy=burger-menu]").click();
          cy.get("[data-cy=services-tab]").click();
          cy.get("[data-cy=mental-health-tab]").click();
          break;
      }
    });

    it("is expected to show logo in the header", () => {
      cy.get("[data-cy=header-logo]")
        .should("have.attr", "alt")
        .should("equal", "Community Health West London");
    });

    it("is expected to display service page ", () => {
      cy.get("[data-cy=page-section]").should("have.length", 5);
      cy.get("[data-cy=page-section]")
        .first()
        .within(() => {
          cy.get("[data-cy=header]").should(
            "contain.text",
            "Find a Self-Care service"
          );
          cy.get("[data-cy=description]").should(
            "contain.text",
            "Find local health and wellbeing services in the West London community."
          );
          cy.get("[data-cy=button_1]").should(
            "contain.text",
            "Find self-care service"
          );
          cy.get("[data-cy=button_1]").click();
          cy.url().should("eq", "http://localhost:3001/services/search");
        });
      cy.visit("/services");
      cy.window().then((win) => {
        cy.spy(win, "open").as("redirect");
      });
      cy.get("[data-cy=page-section]")
        .eq(1)
        .within(() => {
          cy.get("[data-cy=header]").should(
            "contain.text",
            "Long term Self Care"
          );
          cy.get("[data-cy=description]").should(
            "contain.text",
            "Need support with your long term health conditions & are registered for a GP surgery in West London? You can access My Care My Way through speaking to your GP."
          );
          cy.get("[data-cy=image]").should("be.visible");
          cy.get("[data-cy=button_1]").should("contain.text", "my care my way");
          cy.get("[data-cy=button_1]").click();
          cy.get("@redirect").should(
            "be.calledWith",
            "http://mycaremyway.co.uk/"
          );
        });
    });

    it("is expected to scroll when using secondary navbar", () => {
      cy.scrollTo(0, 0);
      switch (size) {
        case "macbook-15":
          cy.get("[data-cy=services-tab]").click();
          cy.get("[data-cy=find-a-link-workers-sub-tab]").click();
          break;
        default:
          cy.get("[data-cy=burger-menu]").click();
          cy.get("[data-cy=services-tab]").click();
          cy.get("[data-cy=find-a-link-workers-tab]").click();
          break;
      }
      cy.window().its("scrollY").should("not.equal", 0);
    });
  });
});
