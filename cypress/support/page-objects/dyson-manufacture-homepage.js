
class DysonManufactureHomepage {
  //******************************************page element Selectors********************************** */

  get elements() {
    return {
      telephoneLink: 'a[href="tel:08003457788"]', // Assuming this is a phone link
      h1Title: "h1",
      sourceLogoLink: 'a[href="/"]',
      tabOrder: "nav a[mat-tab-link]",




      tabs: [
        {
          selector: '[data-cy="overviewTab"]',
          text: "Overview",
          href: "/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview",
        },
        {
          selector: '[data-cy="productsTab"]',
          text: "Products",
          href: "/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/products",
        },
        {
          selector: '[data-cy="certificatesTab"]',
          text: "Certifications",
          href: "/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/third-party-certifications",
        },
        {
          selector: '[data-cy="literatureTab"]',
          text: "Literature",
          href: "/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/literature",
        },
        {
          selector: '[data-cy="caseStudiesTab"]',
          text: "Case studies",
          href: "/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/case-studies",
        },
        {
          selector: '[data-cy="aboutTab"]',
          text: "About us",
          href: "/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/about",
        },
      ],
      
    };
  }



  //******************************************Page Actions********************************** */
// Method to verify the telephone link
  verifyTelephoneLink() {
    cy.get(this.elements.telephoneLink)
      .should("have.attr", "href", "tel:08003457788")
      .and("be.visible");
  }
// Method to verify the H1 title on the page
  verifyH1Title(expectedTitle) {
    cy.get(this.elements.h1Title)
      .should("exist")
      .and("be.visible")
      .and("have.text", expectedTitle);
  }


}




module.exports = new DysonManufactureHomepage();