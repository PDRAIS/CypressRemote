describe("Source Regression Tests", () => {

  // first Test - navigate to dyson manufacturer homepage on NBS Source
  it("navigate to NBS Source", () => {
    cy.visit("https://source.thenbs.com");
    cy.get("#mat-input-0").click();
    cy.get("#mat-input-0").type("Dyson");
    cy.get("#cdk-overlay-0 a.truncate").click();

    cy.url().should(
      "include",
      "https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview"
    );
  });

  it("verify the telephone link has the correct number and href", () => {
    cy.visit("https://source.thenbs.com");
    cy.get("#mat-input-0").click();
    cy.get("#mat-input-0").type("Dyson");
    cy.get("#cdk-overlay-0 a.truncate").click();

    cy.url().should(
      "include",
      "https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview"
    );

    cy.contains("a", "08003457788")
      .should("have.attr", "href", "tel:08003457788")
      .and("be.visible");
  });

});
