/// <reference types="cypress" />

import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import BasePage from "../../support/page-objects/base";
import NbsHomepage from "../../support/page-objects/nbs-homepage";
import DysonManufacturerHomepage from "../../support/page-objects/dyson-manufacturer-homepage";

const basePage = new BasePage();
const dysonManufacturerHomepage = new DysonManufacturerHomepage();
const nbsHomepage = new NbsHomepage();

// Background steps
Given("I have navigated to the Dyson Manufacturer Homepage", () => {
  nbsHomepage.visitDysonManufacturerHomePage();
});

Then("I will see the correct telephone number in UI with expected href", () => {
  dysonManufacturerHomepage.verifyTelephoneNo();
});

Then("I will see the correct h1 heading value in UI", () => {
  dysonManufacturerHomepage.verifyH1Value();
});

Then("the source logo href is as expected", () => {
  basePage.verifyNBSSourceLogoHref();
});



