/// <reference types="cypress" />

import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import nbsHomePage from "../../support/page-objects/nbs-homepage.js";
import dysonManufactureHomepage from "../../support/page-objects/dyson-manufacture-homepage.js";
import commonObjects from "../../support/page-objects/common-objects.js";

const dysonManufacturePage = new dysonManufactureHomepage();
const nbsHome = new nbsHomePage();
const common = new commonObjects();

// Background steps
Given("I have navigated to the Dyson Manufacturer Homepage", () => {
    nbsHome.visitDysonManufacturerPage();
    });