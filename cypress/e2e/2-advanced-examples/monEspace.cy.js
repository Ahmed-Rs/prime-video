describe("test de la page monEspace", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should run monEspace page correctly", () => {
    const lastItem = "Mon espace";

    cy.get(".nav__links a")
      .should("have.length", 4)
      .last()
      .should("have.text", lastItem);
  });

  it("navigate through Mon espace", () => {
    cy.contains("Mon espace").click();
    cy.contains("Historique").should("exist");
    cy.contains("Historique").click();
    cy.contains("Effacer l'historique").should("exist");
  });
});
