class CommonObjects {
  //******************************************page element Selectors********************************** */

  get elements() {
    return {
      backToTopButton: '[data-cy="backToTopButton"]', // Assuming this is the back to top button
    };
  }

  //******************************************Page Actions********************************** */
  // Method to verify back to top button works correctly

  verifyBackToTopButton() {
    //back to top button is not visible when the page is at the top
    cy.get(this.elements.backToTopButton).should("not.be.visible");
    // Scroll to the bottom of the page
    cy.scrollTo("bottom"); 
    //checks button is visible at bottom of page
    cy.get(this.elements.backToTopButton).should("be.visible"); 
    // if button is visible click it
    cy.get(this.elements.backToTopButton).click();
    // button no longer visible as we are back at the top of the page
    cy.get(this.elements.backToTopButton).should("not.be.visible"); 
  }
}

export default new CommonObjects();
