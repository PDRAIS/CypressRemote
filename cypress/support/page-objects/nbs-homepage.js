class NBSHomePage {
  //******************************************page element Selectors********************************** */

  get elements() {
    return {
      nbsHompageUrl: "https://source.thenbs.com",
      searchField: "#mat-input-0",
      firstSearchResult: "#cdk-overlay-0 a.truncate",
    };
  }

//******************************************Page Actions********************************** */

visitDysonManufacturerPage() {
  cy.visit(this.elements.nbsHompageUrl);
    cy.get(this.elements.searchField).click();
    cy.get(this.elements.searchField).type("Dyson");
    cy.get(this.elements.firstSearchResult).click();

    
    cy.url().should(
      "include",
      "https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview",

    );


}

verifyBaselineImageSnapshot() {
  cy.viewport(1000, 4410); // Set viewport to match the dimensions of the baseline image
  cy.wait(2000); // Wait for the page to load completely
  cy.scrollTo("bottom");// Scroll to the bottom of the page to ensure all elements are visible
  cy.wait(3000);// Wait for any lazy-loaded content to load  
  cy.matchImageSnapshot("Dyson-manufacturer-page", {
    failureThreshold: 0.2, // Allowable percentage of pixel difference
    failureThresholdType: "percent",
  });      
}



}

export default new NBSHomePage();

