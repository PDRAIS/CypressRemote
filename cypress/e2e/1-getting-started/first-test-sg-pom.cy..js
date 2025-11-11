/// <reference types="cypress" />

import NbsHomepage from "../../support/page-objects/nbs-homepage";
import DysonManufacturerHomepage from "../../support/page-objects/dyson-manufacturer-homepage";

describe("Source Regression Tests", () => {
  // create a new instance of the NbsHomepage and DysonManufacturerHomepage classes so we can use them
  const nbsHomepage = new NbsHomepage();
  const dysonManufacturerHomepage = new DysonManufacturerHomepage();
  // before each test, navigate to Dyson manufacturer overview page
  beforeEach(() => {
    nbsHomepage.visitDysonManufacturerHomePage();
  });

  // test scenario 1 - verify telephone number, h1 value and NBS Source logo href
  it("verify the telephone number is correct with expected href", () => {
    // Verify the telephone link element
    cy.contains("a", "08003457788", { timeout: 10000 })
      .should("be.visible")
      .should("have.attr", "href", "tel:08003457788")
      .should("have.attr", "title", "Call 08003457788")
      .and("have.attr", "action", "telephone");
  });

  //test scenario 2 - verify h1 value
  it("verify h1 value is correct", () => {
    // verify the h1 value shows correct text
    cy.get("h1").should("be.visible").should("contain.text", "Dyson");
  });

  // test scenario 3 - verify NBS Source logo href
  it("verify NBS Source logo href is correct", () => {
    // Verify the NBS Source logo link has correct href
    cy.contains("NBS Source")
      .should("be.visible")
      .should("have.attr", "href", "/")
      .should("have.class", "brand-primary")
      .should("have.class", "wrapper")
      .should("contain", "NBS Source");
  });
});
