class NWDHomePage {
  //******************************************page element Selectors********************************** */

  get elements() {
    return {
      nwdHomeURL: "https://www.newworlddesigns.co.uk/",
      titleBanner: "id=primary-menu",
      //menuOrder: "",
	  //footerContact: "",
	  clientLogo: "#content > div > div:nth-child(9)",
	  productionCaseStudies: "",
    equipmentHire: '<a class="button" href="https://www.newworlddesigns.co.uk/hire-equipment/">View Hire Equipment</a>',
    productionRig: "",
    capture: '<a class="button" href="https://www.newworlddesigns.co.uk/hire-equipment/">View Hire Equipment</a>',
    liveEvents: '<a class="button" href="https://www.newworlddesigns.co.uk/hire-equipment/">View Hire Equipment</a>',
    showReel: '<span>4K Showreel</span>',
	  
    };
  }

//******************************************Page Actions********************************** */


  // Verify that you land on the NWD homepage
  visitNWDHomePage() {
    cy.visit(this.elements.nwdHomeURL);
    cy.url().should(
      "include",
      "https://www.newworlddesigns.co.uk/"
    );

    // Verify that the NWD Tile banner is present
    cy.get(this.elements.titleBanner)
      .should("exist")
      .and("be.visible");

    // verify that the client logo section is visible 
    cy.get(this.elements.clientLogo)
      .should("exist")
      .and("be.visible");
  }
}
