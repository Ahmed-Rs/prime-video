import { TMDB_API_KEY, API_URL } from "../../../utils/config";
import { mockedRes } from "../../fixtures/example";

/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

const endpoint = `trending/all/week?`;
const lang = "en";
const startChar = endpoint.includes(`?`) ? `&` : `?`;
const preParams = `${startChar}api_key=${TMDB_API_KEY}&language=${lang}`;
const testUrl = `${API_URL}/${endpoint}${preParams}&page=3`;
const globalUrl = `${testUrl}/trending/all/week?`;
const userVariable = "user1";
const userPassword = "password1";

describe("example to-do app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.intercept("GET", globalUrl, mockedRes);
    // cy.visit("http://localhost:3000/");
  });

  it("Simulation d'une connexion utilisateur", () => {
    const user = {
      username: "ahmedrassoulahmed@gmail.com",
      password: "aaaaaa",
    };

    cy.visit("http://localhost:3000/");
    cy.get(".profiles_dropdown_menu").first().click();
    cy.get(".nav_bar_ul_menu > li > a").first().click();
    cy.contains("S'identifier").should("exist");
    // cy.get(".");
    cy.get("input[name=email]").type(user.username);
    cy.get("input[name=password]").type(user.password);
    cy.get("input[id='signInSubmit']").click();
    cy.contains("Ahmed").should("exist");
  });

  it("Vérifier la présence des éléments par leur classe, ordre et contenu textuel", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    // cy.visit("http://localhost:3000/");

    cy.get(".title_container").should("be.visible");
    cy.get(".nav__components").should("have.length", 1);
    cy.get(".nav__links").should("have.length", 1);
    cy.get(".flexor").should("have.length", 2);
    cy.get(".cont_rev").should("exist");

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    // cy.get(".todo-list li").first().should("have.text", "Pay electric bill");
    // cy.get(".todo-list li").last().should("have.text", "Walk the dog");
    cy.get(".nav__links a").first().should("have.text", "Accueil");
  });

  // it("Vérifier la présence de Mon espace", () => {
  //   // We'll store our item text in a variable so we can reuse it
  //   const lastItem = "Mon espace";

  //   cy.get(".nav__links a")
  //     .should("have.length", 4)
  //     .last()
  //     .should("have.text", lastItem);
  // });

  // it("Vérifier la classe d'un élément à travers sa balise span", () => {
  //   // In addition to using the `get` command to get an element by selector,
  //   // we can also use the `contains` command to get an element by its contents.
  //   // However, this will yield the <label>, which is lowest-level element that contains the text.
  //   // In order to check the item, we'll find the <input> element for this <label>
  //   // by traversing up the dom to the parent element. From there, we can `find`
  //   // the child checkbox <input> element and use the `check` command to check it.
  //   cy.get('span:contains("Catégories")').should(
  //     "have.class",
  //     "nav_category_dropdown_subMenu"
  //   );

  //   cy.contains("Catégories").parents().should("have.class", "nav__components");
  // });

  // context("with a checked task", () => {
  //   // it("can filter for uncompleted tasks", () => {
  //   //   // We'll click on the "active" button in order to
  //   //   // display only incomplete items
  //   //   cy.contains("Active").click();

  //   //   // After filtering, we can assert that there is only the one
  //   //   // incomplete item in the list.
  //   //   cy.get(".todo-list li")
  //   //     .should("have.length", 1)
  //   //     .first()
  //   //     .should("have.text", "Walk the dog");

  //   //   // For good measure, let's also assert that the task we checked off
  //   //   // does not exist on the page.
  //   //   cy.contains("Pay electric bill").should("not.exist");
  //   // });

  //   // it("can filter for completed tasks", () => {
  //   //   // We can perform similar steps as the test above to ensure
  //   //   // that only completed tasks are shown
  //   //   cy.contains("Completed").click();

  //   //   cy.get(".todo-list li")
  //   //     .should("have.length", 1)
  //   //     .first()
  //   //     .should("have.text", "Pay electric bill");

  //   //   cy.contains("Walk the dog").should("not.exist");
  //   // });

  //   // it("can delete all completed tasks", () => {
  //   //   // First, let's click the "Clear completed" button
  //   //   // `contains` is actually serving two purposes here.
  //   //   // First, it's ensuring that the button exists within the dom.
  //   //   // This button only appears when at least one task is checked
  //   //   // so this command is implicitly verifying that it does exist.
  //   //   // Second, it selects the button so we can click it.
  //   //   cy.contains("Clear completed").click();

  //   //   // Then we can make sure that there is only one element
  //   //   // in the list and our element does not exist
  //   //   cy.get(".todo-list li")
  //   //     .should("have.length", 1)
  //   //     .should("not.have.text", "Pay electric bill");

  //   //   // Finally, make sure that the clear button no longer exists.
  //   //   cy.contains("Clear completed").should("not.exist");
  //   // });
  //   it("", () => {});
  // });

  // it("navigate through Mon espace", () => {
  //   cy.contains("Mon espace").click();
  //   cy.contains("Historique").should("exist");
  //   cy.contains("Historique").click();
  //   cy.contains("Effacer l'historique").should("exist");
  // });
});
