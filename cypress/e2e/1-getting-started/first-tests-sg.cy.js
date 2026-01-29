describe("Source Regression Tests", () => {
  // first Test - navigate to dyson manufacturer homepage on nbs source
  it("navigate to NBS Source", () => {
    cy.visit("https://source.thenbs.com");
    // cy.get("#onetrust-accept-btn-handler").click();
    // cy.contains("button", "Accept All Cookies").click();
    cy.get("#mat-input-0").click();
    cy.get("#mat-input-0").type("Dyson");
    cy.get("#cdk-overlay-0 a.truncate", { timeout: 10000 }).click();
    cy.url({ timeout: 10000 }).should(
      "include",
      "https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview"
    );
  });

  it("verify the telephone number is correct with expected href", () => {
    // Navigate to the page and accept cookies
    cy.visit("https://source.thenbs.com");
    // cy.contains('button', 'Accept All Cookies').debug().click();
    // cy.contains("button", "Accept All Cookies").click();
    cy.get("#mat-input-0").click();
    cy.get("#mat-input-0").type("Dyson");
    cy.get("#cdk-overlay-0 a.truncate", { timeout: 10000 }).click();
    cy.url({ timeout: 10000 }).should(
      "include",
      "https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview"
    );

    // Verify the telephone link element
    cy.contains("a", "08003457788", { timeout: 10000 })
      .should("be.visible")
      .should("have.attr", "href", "tel:08003457788")
      .should("have.attr", "title", "Call 08003457788")
      .and("have.attr", "action", "telephone");
  });

  it("verify h1 value is correct", () => {
    cy.visit("https://source.thenbs.com");
    // cy.get("#onetrust-accept-btn-handler").click();
    // cy.contains("button", "Accept All Cookies").click();
    cy.get("#mat-input-0").click();
    cy.get("#mat-input-0").type("Dyson");
    cy.get("#cdk-overlay-0 a.truncate", { timeout: 10000 }).click();
    cy.url({ timeout: 10000 }).should(
      "include",
      "https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview"
    );
    // verify the h1 value shows correct text
    cy.get("h1")
      .should("be.visible")
      .should("contain.text", "Dyson");
  });

  it("verify NBS Source logo href is correct", () => {
    cy.visit("https://source.thenbs.com");
    // cy.contains("button", "Accept All Cookies").click();
    cy.get("#mat-input-0").click();
    cy.get("#mat-input-0").type("Dyson");
    cy.get("#cdk-overlay-0 a.truncate", { timeout: 10000 }).click();
    cy.url({ timeout: 10000 }).should(
      "include",
      "https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview"
    );
    
    // Verify the NBS Source logo link has correct href
    cy.contains('NBS Source')
      .should("be.visible")
      .should("have.attr", "href", "/")
      .should("have.class", "brand-primary")
      .should("have.class", "wrapper")
      .should("contain", "NBS Source");
  });
});
