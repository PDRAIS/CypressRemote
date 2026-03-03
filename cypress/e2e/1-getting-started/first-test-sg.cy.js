/// <reference types="cypress" />

import nbsHomePage from "../../support/page-objects/nbs-homepage.js";
import dysonManufactureHomepage from "../../support/page-objects/dyson-manufacture-homepage.js";
import commonObjects from "../../support/page-objects/common-objects.js";

describe("Source Regression Tests", () => {
  //before each test navigate to the dyson manufacture home page
  beforeEach(() => {
    nbsHomePage.visitDysonManufacturerPage();
  });

  // first Test - navigate to dyson manufacturer homepage on NBS Source
  it("verify the telephone link has the correct number and href", () => {
    dysonManufactureHomepage.verifyTelephoneLink();
  });

  //Second Test - verify the H1 title on the page is Dyson
  it("Verify H1 title on page is Dyson", () => {
    dysonManufactureHomepage.verifyH1Title("Dyson");
  });

  //Third Test - verify the Source logo link is visible and has the correct href attribute
  it("Confirm that the logo  Href attribute present ", () => {
    dysonManufactureHomepage.verifySourceLogoLink();
  });

  //Fourth Test - confirm manufacturer homepage tabs are visible, in the correct order, have the correct text & href
  it("Confirm manufacturer homepage tabs are visible, in the correct order, have the correct text & href ", () => {
    dysonManufactureHomepage.verifyCorrectTabs();

    // Verify each tab exists, is visible, has correct text and href
    dysonManufactureHomepage.verifyCorrectTabOrder();
  });

  //Fifth Test - verify the Contact Manufacturer button is visible and has the correct href attribute
  it("Confirm that the Contact Manufacturer button is visible and has the correct href attribute", () => {
    dysonManufactureHomepage.verifyManufacturerContactButton();
  });

  //Sixth Test - verify the Certification bodies section is present and correct, including Quiet Mark Certification
  it("Verify the Certification bodies section is present and correct, including Quiet Mark Certification", () => {
    dysonManufactureHomepage.verifyCertificationBodies();
  });

  //Seventh Test - verify back to top button works correctly
  it("Verify the back to top button works correctly", () => {
    commonObjects.verifyBackToTopButton();
  });

  //Eighth Test - verify the dyson manufacture homepage matches the baseline image
  it("Verify the dyson manufacture homepage matches the baseline image", () => {
    dysonManufactureHomepage.verifyBaselineImageSnapshot();
  });

  //Ninth Test - verify  the accessibility of the page using axe and log any violations to a file without failing the test
  it("Verify the accessibility of the page using axe and log any violations", () => {
    commonObjects.verifyAccessibility();
  });

  //Tenth  Test - verify star wars endpoint returns the correct response
  it("Verify the star wars API returns the correct response", () => {
    commonObjects.verifyStarWarsAPIResponse();
  });

  //Eleventh  Test - verifys country code returned from geolocation API is GB and that the region selector button displays UK
  it("Verify the geolocation API returns the correct country code and region", () => {
    dysonManufactureHomepage.verifyUIandAPIContent();
  });

  //Twelfth  Test - verifys that the cat breeds endpoint returns a 200 response and that the expected fields are present in the response
  it("Verify the cat api returns the correct response", () => {
    commonObjects.verifyReturnCatBreedsResponse();
  });
});
