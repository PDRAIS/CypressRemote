/// <reference types="cypress" />

import NWDHomePage from "../../support/page-objects/nwd/nwd-homepage.js";
import NWDCommon from "../../support/page-objects/nwd/nwd-common.js";

describe("Source Regression Tests", () => {
  //before each test navigate to the dyson manufacture home page
  beforeEach(() => {
    NWDHomePage.nwdHomeURL();
  });

  // first Test - navigate to dyson manufacturer homepage on NBS Source
  it("Verify you have landed on the correct page", () => {
    NWDHomePage.verifynwdHomeURL();
  });
});

