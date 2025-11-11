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
    dysonManufacturerHomepage.verifyTelephoneNo();
  });

  //test scenario 2 - verify h1 value
  it("verify h1 value is correct", () => {
    // verify the h1 value shows correct text
    dysonManufacturerHomepage.verifyH1Value();
  });

  // test scenario 3 - verify NBS Source logo href
  it("verify NBS Source logo href is correct", () => {
    // Verify the NBS Source logo link has correct href
    dysonManufacturerHomepage.verifyNBSSourceLogoHref();
  });
});
