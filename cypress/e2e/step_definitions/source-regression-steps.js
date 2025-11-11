/// <reference types="cypress" />

import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import NbsHomepage from "../../support/page-objects/nbs-homepage";
import DysonManufacturerHomepage from "../../support/page-objects/dyson-manufacturer-homepage";

const dysonManufacturerHomepage = new DysonManufacturerHomepage();
const nbsHomepage = new NbsHomepage();

// Background steps
Given("I have navigated to the Dyson Manufacturer Homepage", () => {
  nbsHomepage.visitDysonManufacturerHomePage();
});

Then("I will see the correct telephone number in UI with expected href", () => {
  dysonManufacturerHomepage.verifyTelephoneNo();
});





