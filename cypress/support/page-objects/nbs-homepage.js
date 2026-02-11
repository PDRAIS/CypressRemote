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








}

export default new NBSHomePage();

