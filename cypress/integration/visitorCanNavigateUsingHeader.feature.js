/* eslint-disable no-undef */
import sizes from "../support/index";

sizes.forEach((size) => {
  describe(`visitor can navigate between views on ${size}`, () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/app_data**", {
        fixture: "app_data.json",
      });
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1], size[2]);
      } else {
        cy.viewport(size);
      }
      cy.visit("/");
    });

    describe("visits all pages", () => {
      if (size !== "macbook-15") {
        beforeEach(() => {
          cy.get("[data-cy=burger-menu]").click();
        });
      }

      it("is expected to redirect to home page", () => {
        cy.url().should("include", "/home");
        cy.get("[data-cy=secondary-nav-bar]").should("not.exist");
        if (size === "macbook-15") {
          cy.get("[data-cy=home-tab]").should("have.class", "Mui-selected");
        }
      });

      it("is expected to navigate to services page", () => {
        if (size === "macbook-15") {
          cy.get("[data-cy=services-tab]").click();
          cy.url().should("include", "/services");
          cy.get("[data-cy=services-tab]").should("have.class", "Mui-selected");
        } else {
          cy.get("[data-cy=services-tab]").click();
          cy.get("[data-cy=mental-health-tab]").click();
          cy.url().should("include", "/services");
        }
      });

      it("is expected to navigate to about organization page", () => {
        if (size === "macbook-15") {
          cy.get("[data-cy=about-tab]").click();
          cy.get("[data-cy=organization-sub-tab]").click();
          cy.url().should("include", "/about/organization");
          cy.get("[data-cy=about-tab]").should("have.class", "Mui-selected");
          cy.get("[data-cy=organization-sub-tab]").should(
            "have.class",
            "Mui-selected"
          );
        } else {
          cy.get("[data-cy=about-tab]").click();
          cy.get("[data-cy=organization-tab]").should(
            "contain",
            "organization"
          );
          cy.get("[data-cy=self-care-tab]").should("contain", "self care");
          cy.get("[data-cy=organization-tab]").click();
          cy.url().should("include", "/about/organization");
        }
      });

      it("is expected to navigate to about self care page", () => {
        if (size === "macbook-15") {
          cy.get("[data-cy=about-tab]").click();
          cy.get("[data-cy=self-care-sub-tab]").click();
          cy.url().should("include", "/about/self_care");
          cy.get("[data-cy=about-tab]").should("have.class", "Mui-selected");
          cy.get("[data-cy=self-care-sub-tab]").should(
            "have.class",
            "Mui-selected"
          );
        } else {
          cy.get("[data-cy=about-tab]").click();
          cy.get("[data-cy=self-care-tab]").click();
          cy.url().should("include", "/about/self_care");
        }
      });

      it("is expected to navigate back to about organization page", () => {
        if (size === "macbook-15") {
          cy.get("[data-cy=about-tab]").click();
          cy.get("[data-cy=self-care-sub-tab]").click();
          cy.get("[data-cy=organization-sub-tab]").click();
          cy.url().should("include", "/about/organization");
          cy.get("[data-cy=about-tab]").should("have.class", "Mui-selected");
          cy.get("[data-cy=organization-sub-tab]").should(
            "have.class",
            "Mui-selected"
          );
        } else {
          cy.get("[data-cy=about-tab]").click();
          cy.get("[data-cy=organization-tab]").should(
            "contain",
            "organization"
          );
          cy.get("[data-cy=self-care-tab]").should("contain", "self care");
          cy.get("[data-cy=organization-tab]").click();
          cy.url().should("include", "/about/organization");
        }
      });

      it("is expected to navigate to news page", () => {
        if (size === "macbook-15") {
          cy.get("[data-cy=news-and-info-tab]").click();
          cy.url().should("include", "/news_info/news");
          cy.get("[data-cy=news-and-info-tab]").should(
            "have.class",
            "Mui-selected"
          );
          cy.get("[data-cy=news-sub-tab]").should("have.class", "Mui-selected");
        } else {
          cy.get("[data-cy=news-and-info-tab]").click();
          cy.get("[data-cy=news-tab]").click();
          cy.url().should("include", "/news_info/news");
        }
      });

      it("is expected to navigate to information page", () => {
        if (size === "macbook-15") {
          cy.get("[data-cy=news-and-info-tab]").click();
          cy.get("[data-cy=information-sub-tab]").click();
          cy.url().should("include", "/news_info/information");
          cy.get("[data-cy=news-and-info-tab]").should(
            "have.class",
            "Mui-selected"
          );
          cy.get("[data-cy=information-sub-tab]").should(
            "have.class",
            "Mui-selected"
          );
        } else {
          cy.get("[data-cy=news-and-info-tab]").click();
          cy.get("[data-cy=information-tab]").click();
          cy.url().should("include", "/news_info/information");
        }
      });

      it("is expected to navigate to contact page", () => {
        if (size === "macbook-15") {
          cy.get("[data-cy=contact-tab]").click();
          cy.url().should("include", "/contact");
          cy.get("[data-cy=secondary-nav-bar]").should("not.exist");
          cy.get("[data-cy=contact-tab]").should("have.class", "Mui-selected");
        } else {
          cy.get("[data-cy=contact-tab]").click();
          cy.url().should("include", "/contact");
        }
      });

      it("is expected to navigate to about home page", () => {
        if (size === "macbook-15") {
          cy.get("[data-cy=home-tab]").click();
          cy.url().should("include", "/home");
          cy.get("[data-cy=home-tab]").should("have.class", "Mui-selected");
        } else {
          cy.get("[data-cy=home-tab]").click();
          cy.url().should("include", "/home");
        }
      });
    });
  });
});
