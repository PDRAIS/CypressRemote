/// <reference types="cypress" />

const nbsHomePage = require("../../support/page-objects/nbs-homepage");
const dysonManufactureHomepage = require("../../support/page-objects/dyson-manufacture-homepage");

describe("Source Regression Tests", () => {
  //before each test navigate to the dyson manufacture home page
  beforeEach(() => {
    nbsHomePage.visitDysonManufacturerPage();
  });

  // first Test - navigate to dyson manufacturer homepage on NBS Source
  it("verify the telephone link has the correct number and href", () => {
    
  });

  it("Verify H1 title on page is Dyson ", () => {
    cy.get("h1").should("exist").and("be.visible").and("have.text", "Dyson");
  });

  it("Confirm that the logo  Href attribute present ", () => {
 // Method to verify the logo link href attribute
    cy.get('a[href="/"]')
      .should("be.visible") // Ensure the Source logo link is visible
      .should("have.attr", "href", "/"); // Verify the href attribute will be as expected "/"
 
  });

  it("Confirm manufacturer homepage tabs are visible, in the correct order, have the correct text & href ", () => {
    const tabs = [
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
    ];

    // Verify each tab exists, is visible, has correct text and href
    tabs.forEach((tab) => {
      cy.get(tab.selector)
        .should("be.visible")
        .and("contain.text", tab.text)
        .and("have.attr", "href", tab.href);
    });

    // Verify correct order
    cy.get("nav a[mat-tab-link]").each(($el, index) => {
      cy.wrap($el).should("contain.text", tabs[index].text);
    });
  });
});
