class DysonManufactureHomepage {
  //******************************************page element Selectors********************************** */

  get elements() {
    return {
      telephoneLink: 'a[href="tel:08003457788"]', // Assuming this is a phone link
      h1Title: "h1",
      sourceLogoLink: 'a[href="/"]',
      tabOrder: "nav a[mat-tab-link]",
      contactManufacturerButton: 'button[title="Contact Dyson"]',
      contactManfactureButtonHref:
        "https://www.dyson.co.uk/commercial/overview/architects-designers",

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
      certificationBodiesHeader: 'app-overview-issuing-body h3',
      quietMarkCertification: 'app-overview-issuing-body a[title="View more Quiet Mark Certification"]',
      quietMarkCertificationTitle: 'app-overview-issuing-body p.tile-title',
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

  // Method to verify the logo link href attribute
  verifySourceLogoLink() {
    cy.get(this.elements.sourceLogoLink)
      .should("be.visible")
      .should("have.attr", "href", "/");
  }

  //Method to confirm tabs are visible, have correct text and href
  verifyCorrectTabs() {
    this.elements.tabs.forEach((tab) => {
      cy.get(tab.selector)
        .should("be.visible")
        .and("contain.text", tab.text)
        .and("have.attr", "href", tab.href);
    });
  }

  //Method confirming correct order of the tabs
  verifyCorrectTabOrder() {
    cy.get(this.elements.tabOrder).each(($el, index) => {
      cy.wrap($el).should("contain.text", this.elements.tabs[index].text);
    });
  }
  
  //Method to confirm the contact manufature button is visible and href is correct
  //TODO Make Contactmanufacture generic so it can be used across different manufacture homepages
  verifyManufacturerContactButton() {
    cy.get(this.elements.contactManufacturerButton)
      .should("be.visible")
      .and("have.text", " Contact manufacturer ");
  }

  // Method to verify certification bodies section and Quiet Mark Certification
  verifyCertificationBodies() {
    // Verify the "Certification bodies" header is visible
    cy.get(this.elements.certificationBodiesHeader)
      .should("be.visible")
      .and("have.text", "Certification bodies");

    // Verify the Quiet Mark Certification link is visible
    cy.get(this.elements.quietMarkCertification)
      .should("be.visible")
      .and("have.attr", "title", "View more Quiet Mark Certification");

    // Verify the Quiet Mark Certification title text is visible
    cy.get(this.elements.quietMarkCertificationTitle)
      .should("be.visible")
      .and("contain.text", "Quiet Mark Certification");
  }
}

export default new DysonManufactureHomepage();
