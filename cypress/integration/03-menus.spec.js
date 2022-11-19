describe("Menus devem estar acessíveis", function () {
  it("Home deve estar acessível", function () {
    cy.visit("https://github.com/");
    cy.contains("Let’s build from here");
  });

  it("Menu pricing deve funcionar", function () {
    cy.contains("Pricing").click();
    cy.contains("Get the complete developer platform.", { timeout: 20000 });
  });

  // Isso vai dar erro pela resolução... mostrar 1 formas de alterar (através do cypress.json)
  // Executar com npx cypress run e...
  // Quando der erro, mostras as pastar recém criadas: screenshots e videos.
  // Exercício 1: encontrar um site qualquer que curtam e testar se o conteúdo da home
  // e de alguns menus foram carregados.
});
