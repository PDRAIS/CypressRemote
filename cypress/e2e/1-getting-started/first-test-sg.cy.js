describe("Source Regression Tests", () => {
  // first Test - navigate to dyson manufacturer homepage on NBS Source
  it("navigate to NBS Source", () => {
    cy.visit("https://source.thenbs.com");
    cy.get("#mat-input-0").click();
    cy.get("#mat-input-0").type("Dyson");
    cy.get("#cdk-overlay-0 a.truncate").click();

    cy.url().should(
      "include",
      "https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview",
    );
  });

  it("verify the telephone link has the correct number and href", () => {
    cy.visit("https://source.thenbs.com");
    cy.get("#mat-input-0").click();
    cy.get("#mat-input-0").type("Dyson");
    cy.get("#cdk-overlay-0 a.truncate").click();

    cy.url().should(
      "include",
      "https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview",
    );

    cy.contains("a", "08003457788")
      .should("have.attr", "href", "tel:08003457788")
      .and("be.visible");
  });

  it("Verify H1 title on page is Dyson ", () => {
    cy.visit("https://source.thenbs.com");
    cy.get("#mat-input-0").click();
    cy.get("#mat-input-0").type("Dyson");
    cy.get("#cdk-overlay-0 a.truncate").click();

    cy.url().should(
      "include",
      "https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview",
    );
    cy.get("h1").should("exist").and("be.visible").and("have.text", "Dyson");
  });

  it("Confirm that the logo  Href attribute present ", () => {
    cy.visit("https://source.thenbs.com");
    cy.get("#mat-input-0").click();
    cy.get("#mat-input-0").type("Dyson");
    cy.get("#cdk-overlay-0 a.truncate").click();

    cy.url().should(
      "include",
      "https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview",
    );

    cy.contains("a", "08003457788")
      .should("have.attr", "href", "tel:08003457788")
      .and("be.visible");
    cy.get('a[action="manufacturer-header-link"]').should("be.visible");
    cy.get('a[action="manufacturer-header-link"]').should(
      "have.text",
      " I'm a manufacturer ",
    );
  });

  it("Confirm manufacturer homepage tabs are visible, in the correct order, have the correct text & href ", () => {
    const tabs = [
      {
        selector: '[data-cy="overviewTab"]',
        text: "Overview",
        href: "/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview",
      },
      {
        selector: '[data-cy="productsTab"]',
        text: "Products",
        href: "/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/products",
      },
      {
        selector: '[data-cy="certificatesTab"]',
        text: "Certifications",
        href: "/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/third-party-certifications",
      },
      {
        selector: '[data-cy="literatureTab"]',
        text: "Literature",
        href: "/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/literature",
      },
      {
        selector: '[data-cy="caseStudiesTab"]',
        text: "Case studies",
        href: "/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/case-studies",
      },
      {
        selector: '[data-cy="aboutTab"]',
        text: "About us",
        href: "/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/about",
      },
    ];

    // Verify each tab exists, is visible, has correct text and href
    tabs.forEach((tab) => {
      cy.get(tab.selector)
        .should("be.visible")
        .and("contain.text", tab.text)
        .and("have.attr", "href", tab.href);
    });

    // Verify correct order
    cy.get("nav a[mat-tab-link]").each(($el, index) => {
      cy.wrap($el).should("contain.text", tabs[index].text);
    });
  });
});
