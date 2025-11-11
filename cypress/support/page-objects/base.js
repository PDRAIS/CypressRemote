/// <reference types="cypress" />

class BasePage {

  // ************************Common elements across all pages******************************

  get commonElements() {
    return {
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
  visit(url) {
    // Method to visit any page
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
