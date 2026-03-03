const API_URL = "https://api.thecatapi.com/v1";
const BEARER_TOKEN = Cypress.env("CAT_API_KEY");

class CommonObjects {
  //******************************************page element Selectors********************************** */

  get elements() {
    return {
      backToTopButton: '[data-cy="backToTopButton"]', // Assuming this is the back to top button
    };
  }

  //******************************************Page Actions********************************** */
  // Method to verify back to top button works correctly

  verifyBackToTopButton() {
    //back to top button is not visible when the page is at the top
    cy.get(this.elements.backToTopButton).should("not.be.visible");
    // Scroll to the bottom of the page
    cy.scrollTo("bottom");
    //checks button is visible at bottom of page
    cy.get(this.elements.backToTopButton).should("be.visible");
    // if button is visible click it
    cy.get(this.elements.backToTopButton).click();
    // button no longer visible as we are back at the top of the page
    cy.get(this.elements.backToTopButton).should("not.be.visible");
  }

  // Verify  Accessibility of each page element with cypress-axe
  verifyAccessibility() {
    cy.injectAxe(); // Inject the AXE script into the page
    cy.checkA11y(
      null,
      null,
      (violations) => {
        // Log the violations without failing the test
        cy.task("log", violations);
        violations.forEach((violation) => {
          const nodes = Cypress.$(
            violation.nodes.map((node) => node.target).join(","),
          );
          Cypress.log({
            name: "a11y error!",
            consoleProps: () => violation,
            $el: nodes,
            message: `[${violation.id}] ${violation.help} (${violation.nodes.length} nodes)`,
          });
        });
      },
      { timeout: 10000 },
    ); // Increase the timeout to 10 seconds
  }

  //Verifys that we can hit the Starwars API get and expected respionse of 200 and that the fields are correct
  verifyStarWarsAPIResponse() {
    cy.request("GET", "https://swapi.dev/api/people/1/").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("name", "Luke Skywalker");
      expect(response.body).to.have.property("homeworld");
    });
  }

  verifyReturnCatBreedsResponse() {
    // First, validate the token by hitting an auth-required endpoint (/favourites)
    // This endpoint returns 401 if the token is missing or invalid
    cy.request({
      method: "GET",
      url: `${API_URL}/favourites`,
      headers: {
        "x-api-key": BEARER_TOKEN,
      },
      failOnStatusCode: false, // Don't let Cypress auto-fail, we want to assert ourselves
    }).then((authResponse) => {
      // Assert the token is valid (401 = invalid/missing key)
      expect(authResponse.status, "Bearer token must be valid").to.eq(200);

      // Now fetch the breeds using the validated token
      cy.request({
        method: "GET",
        url: `${API_URL}/breeds`,
        headers: {
          "x-api-key": BEARER_TOKEN,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
        expect(response.body.length).to.be.greaterThan(0);

        // Log each breed to the console
        cy.log(`Total breeds found: ${response.body.length}`);

        response.body.forEach((breed) => {
          cy.log(
            `Breed: ${breed.name} | Temperament: ${breed.temperament || "N/A"}`,
          );
        });
      });
    });
  }
}

export default new CommonObjects();
