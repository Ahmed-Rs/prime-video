import { TMDB_API_KEY, API_URL } from "../../../utils/config";
import { mockedRes } from "../../fixtures/example";

const endpoint = `trending/all/week?`;
const lang = "en";
const startChar = endpoint.includes(`?`) ? `&` : `?`;
const preParams = `${startChar}api_key=${TMDB_API_KEY}&language=${lang}`;
const testUrl = `${API_URL}/${endpoint}${preParams}&page=3`;
const globalUrl = `${testUrl}/trending/all/week?`;

describe("example to-do app", () => {
  beforeEach(() => {
    cy.intercept("GET", globalUrl, mockedRes);
    cy.visit("http://localhost:3000/");
  });

  const user = {
    name: "fakeName",
    email: "fakeemail@gmail.com",
    password: "ffffff",
  };

  it("Simulation d'une inscription", () => {
    // Inscription
    cy.visit("http://localhost:3000/");
    cy.get(".profiles_dropdown_menu").first().click();
    cy.get(".nav_bar_ul_menu > li > a").first().click();
    cy.contains("S'identifier").should("exist");
    cy.get(".signUpLink").click();
    cy.contains("Créer un compte").should("exist");
    cy.get("input[name=register_name]").type(user.name);
    cy.get("input[name=register_email]").type(user.email);
    cy.get("input[name=register_password]").type(user.password);
    cy.get("input[name=register_password_check]").type(user.password);
    cy.get("input[name=signup]").click();

    // Arrivée à la page d'accueil du user
    cy.get(".profiles_dropdown_name").should("have.text", user.name);

    // Déconnexion du user
    cy.get(".profiles_dropdown_name").click();
    cy.get(".nav_dropl_col_left").should("exist");
    cy.get(".nav_dropl_col_left li a")
      .last()
      .should("contain.text", "Déconnexion")
      .click();
    cy.get(".profiles_dropdown_menu").first().should("have.text", "Menu");
  });

  it("Simulation d'une connexion utilisateur", () => {
    cy.get(".profiles_dropdown_menu").first().click();
    cy.get(".nav_bar_ul_menu > li > a").first().click();
    cy.contains("S'identifier").should("exist");
    cy.get("input[name=email]").type(user.email);
    cy.get("input[name=password]").type(user.password);
    cy.get("input[id='signInSubmit']").click();

    // Vérification de la présence du nom du user connecté
    cy.contains("fakeName").should("exist");
  });

  it("Simulation déconnexion user", () => {
    cy.get(".profiles_dropdown_name").click();
    cy.get(".nav_dropl_col_left").should("exist");
    cy.get(".nav_dropl_col_left li a")
      .last()
      .should("contain.text", "Déconnexion")
      .click();
    cy.get(".profiles_dropdown_menu").first().should("have.text", "Menu");
  });

  // it.todo("Suppression du user A FAIRE");
});
