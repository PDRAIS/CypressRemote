describe("Source Regression Tests", () => {
  // first Test - navigate to dyson manufacturer homepage on NBS Source
  it("navigate to NBS Source", () => {
    cy.visit("https://www.newworlddesigns.co.uk/");
    cy.url().should(
      "include",
      "https://www.newworlddesigns.co.uk/"
    );
    cy.get('#content a.dt-btn span').should('be.visible');
    cy.get('#content div.vc_custom_1712244435327 h2').click();
  });