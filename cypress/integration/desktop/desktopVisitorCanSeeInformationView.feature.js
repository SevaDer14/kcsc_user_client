describe("visitor can see information view", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
    cy.intercept("GET", "**/api/app_data**", {
      fixture: "app_data.json",
    });
    cy.intercept("GET", "**/api/sections**", {
      fixture: "information_view_sections.json",
    });
    cy.visit("/info/information");
  });

  it("is expected to show logo in the header", () => {
    cy.get("[data-cy=header-logo]")
      .should("have.attr", "alt")
      .should("equal", "Community Health West London");
  });

  it("is expected to render description section", () => {
    cy.get("[data-cy=page-section]").should("have.length", 1);
    cy.get("[data-cy=page-section]")
      .first()
      .within(() => {
        cy.get("[data-cy=header]").should("contain.text", "Information");
        cy.get("[data-cy=description]").should(
          "contain.text",
          "On this page, you can find very usefull information about Self Care and Healthcare in West London"
        );
      });
  });

  it("is expected to render pinned information section correctly", () => {
    cy.get("[data-cy=pinned-information-items]").within(() => {
      cy.get("[data-cy=information-card]").should("have.length", 4);
      cy.get("[data-cy=information-card]")
        .first()
        .within(() => {
          cy.get("[data-cy=header]").should("contain", "Item-0");
          cy.get("[data-cy=description]").should("contain.text", "Lorem ipsum");
          cy.get("[data-cy=action-area]")
            .invoke("attr", "href")
            .should(
              "eq",
              "https://www.netdoctor.co.uk/health-services/nhs/a4489/what-is-the-nhs/"
            );
        });
    });
  });

  it("is expected to render other information section correctly", () => {
    cy.get("[data-cy=other-information-items]").within(() => {
      cy.get("[data-cy=information-card]").should("have.length", 6);
      cy.get("[data-cy=information-card]")
        .first()
        .within(() => {
          cy.get("[data-cy=header]").should("contain", "Other Item-0");
          cy.get("[data-cy=description]").should("contain.text", "Lorem ipsum");
          cy.get("[data-cy=action-area]")
            .invoke("attr", "href")
            .should(
              "eq",
              "https://www.nhs.uk/nhs-services/"
            );
        });
    });
  });
});
