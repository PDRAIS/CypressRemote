/// <reference types="cypress" />

import DysonManufacturerHomepage from "./dyson-manufacturer-homepage";

class NbsHomepage {

  // ************************Page elements selectors******************************

  get elements() {
    return {
      nbsHomePageUrl: "https://source.thenbs.com",
      acceptAllCookiesButton: 'button:contains("Accept All Cookies")',
      searchField: 'data-cy="searchFieldSearch"',
      dysonManufacturerHomePage: 'https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview'
      
    };
  }

    // ************************Page actions/methods******************************
    
  visitDysonManufacturerHomePage() {
    // Method to visit the page
    cy.visit(this.elements.nbsHomePageUrl);
    // cy.get("#onetrust-accept-btn-handler").click();
    //cy.contains("button", this.elements.acceptAllCookiesButton).click();
    cy.get(this.elements.searchField).click();
    cy.get(this.elements.searchField).type("Dyson");
    cy.contains("Dyson", { timeout: 10000 }).should('be.visible').click({ force: true });
    cy.url({ timeout: 10000 }).should(
      "include",
      this.elements.dysonManufacturerHomePage
    );
  }

  // Verification methods
  verifyPageLoaded() {
    // Method to verify page has loaded correctly
  }

  // Interaction methods
  
}

export default NbsHomepage;
