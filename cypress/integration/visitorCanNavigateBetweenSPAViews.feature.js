/* eslint-disable no-undef */
import sizes from "../support/index";

sizes.forEach((size) => {
  describe(`visitor can navigate between views on ${size}`, () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/app_data**", {
        fixture: "app_data.json",
      });

      cy.visit("/home");
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1], size[2]);
      } else {
        cy.viewport(size);
      }
    });

    describe(`Index View`, () => {
      it("is expected not to show logo in the header", () => {
        cy.get("[data-cy=header-logo]").should("not.exist");
      });

      it("is expected to display logo and mission statement", () => {
        cy.get("[data-cy=mission-statement]").should(
          "contain.text",
          "Community Health West London is a Community Interest Company made up of six local charities. We are working together with the wider community to improve the health and wellbeing of our residents."
        );
        cy.get("[data-cy=logo]")
          .should("have.attr", "alt")
          .should("equal", "Community Health West London");
      });

      it("is expected to show testimonials", () => {
        cy.get("[data-cy=testimonial]").within(() => {
          cy.get("[data-cy=photo]")
            .should("be.visible")
            .should("have.attr", "alt")
            .should("equal", "Maggie Black smiling to the camera");
          cy.get("[data-cy=name]").should("contain.text", "Maggie Black");
          cy.get("[data-cy=text]").should(
            "contain.text",
            '"In my personal life, I am a daughter,'
          );
        });
        cy.wait(7000);
        cy.get("[data-cy=testimonial]").within(() => {
          cy.get("[data-cy=photo]")
            .should("be.visible")
            .should("have.attr", "alt")
            .should("equal", "Richard Erricson smiling to the camera");
          cy.get("[data-cy=name]").should("contain.text", "Richard Erricson");
          cy.get("[data-cy=text]").should(
            "contain.text",
            '"I work with patients with life threatening'
          );
        });
      });

      it("is expected to display footer", () => {
        cy.intercept("POST", "**/api/subscribe", {
          message: "Thank you for subscribing",
        });
        cy.get("[data-cy=application-footer]").within(() => {
          cy.get("[data-cy=logo]").should("be.visible");
          cy.get("[data-cy=about]").should(
            "contain.text",
            "Our aim is to improve people's health and well-being"
          );
          cy.get("[data-cy=contacts]").should(
            "contain",
            "Phone: 0207-243 9806Email: info@communityhealthwestlondon.org.uk"
          );
          cy.get("[data-cy=navigation]").within(() => {
            cy.get("[data-cy=link]").should("have.length", 5);
            cy.get("[data-cy=link]").eq(0).should("contain", "home");
            cy.get("[data-cy=link]").eq(1).should("contain", "services");
            cy.get("[data-cy=link]").eq(2).should("contain", "about");
            cy.get("[data-cy=link]").eq(3).should("contain", "news & info");
            cy.get("[data-cy=link]").eq(4).should("contain", "contact");
          });
          cy.get("[data-cy=disclaimers]").should(
            "contain",
            "This site is built according to Web Content Accessibility Guidlines2021 All Rights Reserved by Community Health West London."
          );
          cy.get("[data-cy=subscribe-to-kcsc-redirect]").should(
            "have.attr",
            "href",
            "https://www.kcsc.org.uk/mailing-list-sign"
          );
        });
      });
    });

    describe("About View", () => {
      beforeEach(() => {
        cy.intercept("GET", "**/api/sections?view=about_us", {
          fixture: "about_us_view_sections.json",
        });
        cy.visit("/");
        switch (size) {
          case "macbook-15":
            cy.get("[data-cy=application-header]").within(() => {
              cy.get("[data-cy=about-tab]").click();
              cy.get("[data-cy=organization-sub-tab]").click();
            });
            break;
          default:
            cy.get("[data-cy=burger-menu]").click();
            cy.get("[data-cy=about-tab]").click();
            cy.get("[data-cy=organization-tab]").click();
            break;
        }        
      });

      it("is expected to show logo in the header", () => {
        cy.get("[data-cy=header-logo]")
          .should("have.attr", "alt")
          .should("equal", "Community Health West London");
      });

      it("is expected to display background and setup section", () => {
        cy.get("[data-cy=page-section]").should("have.length", 5);
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
          });
      });

      it("is expected to display partners Grid", () => {
        cy.get("[data-cy=partner-card]")
          .first()
          .within(() => {
            cy.get("[data-cy=partner-logo]").should("exist");
            cy.get("[data-cy=organization]").should(
              "contain.text",
              "Kensington & Chelsea Social Council"
            );
            cy.get("[data-cy=description]").should(
              "contain.text",
              "Description of what this partner does"
            );
            cy.get("[data-cy=link]").should("have.length", 3);
          });
      });
    });

    describe("Search View", () => {
      beforeEach(() => {
        cy.visit("/services/search");
      });

      it("is expected to show logo in the header", () => {
        cy.get("[data-cy=header-logo]")
          .should("have.attr", "alt")
          .should("equal", "Community Health West London");
      });
    });

    describe("navigate back to home page", () => {
      beforeEach(() => {
        cy.visit("/services/search");
      });

      it("is expected to redirect to home page on tab click", () => {
        switch (size) {
          case "macbook-15":
            cy.get("[data-cy=application-header]").within(() => {
              cy.get("[data-cy=home-tab]").click();
            });
            break;
          default:
            cy.get("[data-cy=burger-menu]").click();
            cy.get("[data-cy=home-tab]").click({force: true});
            break;
        }
        cy.url().should("contain", "http://localhost:3001/home");
      });
    });
  });
});
