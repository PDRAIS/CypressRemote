describe("Source Regression Tests", () => {
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
});
