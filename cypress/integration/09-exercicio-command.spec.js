// Pedir para fazerem um "command" que faça esse código funcionar

describe("Deve encontrar perfil do Jhemeson", function () {
  it("Home deve estar acessível", function () {
    cy.visit("https://github.com/");
    cy.contains("Let’s build from here");
  });

  it("Deve buscar pela string desejada", function () {
    cy.buscaCustomizada("Jhemeson Silva Mota");
    cy.contains("We couldn’t find any repositories matching");
  });

  it("Deve abrir perfil", function () {
    cy.contains("Users").click();
    cy.contains("jhemesonmotta").click();
    cy.contains("SW developer from Brazil.");
  });
});
