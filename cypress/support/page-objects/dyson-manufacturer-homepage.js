/// <reference types="cypress" />


class DysonManufacturerHomepage {
  constructor() {
    // Page URL
    this.url = '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview';
  }

  // ************************Page elements selectors******************************

  get elements() {
    return {
      telText: "08003457788",
      telTitle: "Call 08003457788",
      telHref: "tel:08003457788"
      
    };
  }

  // Page actions/methods
  verifyTelephoneNo() {
    // Method to verify the telephone number
    cy.contains("a", this.elements.telText, { timeout: 10000 })
      .should("be.visible")
      .should("have.attr", "href", this.elements.telHref)
      .should("have.attr", "title", this.elements.telTitle)
      .and("have.attr", "action", "telephone");
  }

  // Verification methods
  verifyH1Value() {
    // Method to verify the H1 value
    cy.get("h1").should("be.visible").should("contain.text", "Dyson");
  }

  // Interaction methods
  
}

export default DysonManufacturerHomepage;
