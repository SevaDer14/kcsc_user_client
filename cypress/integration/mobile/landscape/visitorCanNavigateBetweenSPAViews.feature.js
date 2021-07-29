/* eslint-disable no-undef */
describe("visitor can navigate between views", () => {
  beforeEach(() => {
    cy.viewport('iphone-x', 'landscape')
    cy.intercept("GET", "**/api/app_data**", {
      fixture: "app_data.json",
    });
  });

  describe("Index View", () => {
    beforeEach(() => {
      cy.visit("/home");
    });

    it("is expected not to show logo in the header", () => {
      cy.get("[data-cy=header-logo]").should("not.exist");
    });

    it("is expected to display logo and mission statement", () => {
      cy.get("[data-cy=mission-statement]").should(
        "contain.text",
        "Our aim is to improve people's health and well-being"
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        );
      });
    });

    it("is expected to display footer", () => {
      cy.get("[data-cy=application-footer]").within(() => {
        cy.get("[data-cy=logo]").should("be.visible");
        cy.get("[data-cy=about]").should(
          "contain.text",
          "Community Health West London is a Community Interest Company made up"
        );
        cy.get("[data-cy=contacts]").should(
          "contain",
          "Phone: 0207 243 9806info@communityhealthwestlondon.org.uk"
        );
        cy.get("[data-cy=navigation]").within(() => {
          cy.get("[data-cy=link]").should("have.length", 5);
          cy.get("[data-cy=link]").eq(0).should("contain", "Home");
          cy.get("[data-cy=link]").eq(1).should("contain", "About");
          cy.get("[data-cy=link]").eq(2).should("contain", "Find a service");
          cy.get("[data-cy=link]").eq(3).should("contain", "Contact");
          cy.get("[data-cy=link]").eq(4).should("contain", "News and Info");
        });
        cy.get("[data-cy=disclaimers]").should(
          "contain",
          "This site is built according to Web Content Accessibility Guidlines2020 All Rights Reserved by Community Health West London."
        );
      });
    });
  });

  describe("About View", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/sections**", {
        fixture: "about_us_view_sections.json",
      });
      cy.visit("/");
      cy.get("[data-cy=application-header]").within(() => {
        cy.get("[data-cy=about-tab]").click();
      });
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
          cy.get("[data-cy=image]").should("not.exist");
        });
    });

    it("is expected to display partners carousel", () => {
      cy.get("[data-cy=partner-card]")
        .first()
        .within(() => {
          cy.get("[data-cy=partner-logo]").should(
            "exist"
          );
          cy.get("[data-cy=organization]").should(
            "contain.text",
            "Open Age"
          );
          cy.get("[data-cy=description]").should(
            "contain.text",
            "Description of what this partner does"
          );
          cy.get("[data-cy=link]").should("have.length", 2);
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

  describe("Services View", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/api/sections**", {
        fixture: "services_view_section.json",
      });
      cy.visit("/");
      cy.get("[data-cy=application-header]").within(() => {
        cy.get("[data-cy=services-tab]").click();
      });
    });

    it("is expected to show logo in the header", () => {
      cy.get("[data-cy=header-logo]")
        .should("have.attr", "alt")
        .should("equal", "Community Health West London");
    });

    it("is expected to display service page ", () => {
      cy.get("[data-cy=page-section]").should("have.length", 6);
      cy.get("[data-cy=page-section]")
        .first()
        .within(() => {
          cy.get("[data-cy=header]").should("contain.text", "Find a service");
          cy.get("[data-cy=description]").should(
            "contain.text",
            "On this page, you can find all available services in your area"
          );
          cy.get("[data-cy=image]").should("not.exist");
        });
      cy.get("[data-cy=page-section]")
        .eq(1)
        .within(() => {
          cy.get("[data-cy=header]").should("contain.text", "KCSC Self Care");
          cy.get("[data-cy=description]").should(
            "contain.text",
            "The Voluntary & Community Sector provide health and wellbeing services in North Kensington Communities to support those affected by the Grenfell Tower fire."
          );
          cy.get("[data-cy=image]").should("be.visible");
          cy.get("[data-cy=button_1]").should(
            "contain.text",
            "Find self-care service"
          );
          cy.get("[data-cy=button_1]")
            .invoke("attr", "href")
            .should("eq", "http://localhost:3001/search");
        });
    });
  });

  describe("navigate back to home page", () => {
    beforeEach(() => {
      cy.visit("/services/search");
    });

    it("is expected to redirect to home page on tab click", () => {
      cy.get("[data-cy=application-header]").within(() => {
        cy.get("[data-cy=home-tab]").click();
      });
      cy.url().should("contain", "http://localhost:3001/home");
    });
  });
});
