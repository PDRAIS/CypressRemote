/// <reference types="cypress" />

import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import nbsHome from "../../support/page-objects/nbs-homepage.js";
import dysonManufacturePage from "../../support/page-objects/dyson-manufacture-homepage.js";
import common from "../../support/page-objects/common-objects.js";

// Background steps
Given("I have navigated to the Dyson Manufacturer Homepage", () => {
    nbsHome.visitDysonManufacturerPage();
    });