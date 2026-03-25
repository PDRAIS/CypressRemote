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
      geoLocation: 'button[aria-label="Choose region"]',

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
      certificationBodiesHeader: "app-overview-issuing-body h3",
      quietMarkCertification:
        'app-overview-issuing-body a[title="View more Quiet Mark Certification"]',
      quietMarkCertificationTitle: "app-overview-issuing-body p.tile-title",
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

  verifyBaselineImageSnapshot() {
    cy.viewport(1000, 4410); // Set viewport to match the dimensions of the baseline image
    cy.wait(2000); // Wait for the page to load completely
    cy.scrollTo("bottom"); // Scroll to the bottom of the page to ensure all elements are visible
    cy.wait(3000); // Wait for any lazy-loaded content to load
    cy.matchImageSnapshot("Dyson-manufacturer-page", {
      failureThreshold: 0.2, // Allowable percentage of pixel difference
      failureThresholdType: "percent",
    });
  }

  /**
   * Verifies that the geolocation API returns the correct country code and that the region button is properly displayed
   * Validates both API response and UI elements match expected values for GB/UK
   */
  verifyUIandAPIContent() {
    // Set viewport to standard desktop dimensions for consistent testing
    cy.viewport(1100, 1200);

    // Call the geolocation API to retrieve user's country information
    cy.request({
      method: "Get",
      url: "https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location",
      failOnStatusCode: false, // Allow test to continue even if API returns non-2xx status
    }).then((response) => {
      // Extract JSON data from JSONP response using regex pattern
      // Response format: jsonFeed({...data...});
      const match = response.body.match(/jsonFeed\((.*)\);?/);

      // Validate that response matches expected JSONP format
      if (!match) {
        throw new Error("Response does not contain expected JSONP format");
      }

      // Parse the extracted JSON string into an object
      const body = JSON.parse(match[1]);

      // Verify the geolocation API returns GB as the country code
      expect(["GB"]).to.include(body.country);

      // Confirm the region selector button exists and displays the correct region text
      cy.get(this.elements.geoLocation, { timeout: 10000 })
        .should("exist")
        .invoke("text")
        .should("contain", "UK");
    });
  }
}

export default new DysonManufactureHomepage();
