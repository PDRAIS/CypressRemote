/// <reference types="cypress" />

class BasePage {
  // ************************Common elements across all pages******************************

  get commonElements() {
    return {
      logoName: "NBS Source",
      logoHref: "/",
      // Cookie banner elements

      // Navigation elements

      // Header elements

      // Footer elements

      // Loading indicators

      // Error messages
    };
  }

  // ************************Common methods/actions for all pages******************************

  // Navigation methods
  verifyNBSSourceLogoHref() {
    // Method to verify NBS Source logo href
    cy.contains(this.commonElements.logoName)
      .should("be.visible")
      .should("have.attr", "href", this.commonElements.logoHref)
      .should("contain", this.commonElements.logoName);
  }

  // Cookie handling
  acceptCookies() {
    // Method to accept cookies
  }

  // Wait methods
  waitForPageLoad() {
    // Method to wait for page to load
  }

  // Verification methods
  verifyUrl(expectedUrl) {
    // Method to verify current URL
  }

  // Common interactions
  clickElement(selector) {
    // Method to click any element
  }

  typeIntoElement(selector, text) {
    // Method to type into any element
  }

  // Utility methods
}

export default BasePage;
