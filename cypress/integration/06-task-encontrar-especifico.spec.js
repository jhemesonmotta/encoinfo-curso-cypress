// Exercício 3: acessar o books.toscrape e encontrar o livro com o título Dark Notes e abri-lo.

describe("Listagem Deve Funcionar", function () {
  it("O site está acessível", function () {
    cy.visit("http://books.toscrape.com/");
    cy.contains("We love being scraped!");
  });

  it("Deve filter por categoria", function () {
    cy.contains("Erotica").click();
    cy.contains("1 result.");
  });

  it("Deve abrir o livro", function () {
    cy.contains("Dark Notes").click();
    cy.contains("They call me a slut.");
  });
});
