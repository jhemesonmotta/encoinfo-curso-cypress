describe("Formulário Deve Funcionar", function () {
  it("Home deve estar acessível", function () {
    cy.visit("https://github.com/");
    cy.contains("Let’s build from here");
  });

  it("Menu Sign In deve estar acessível", function () {
    cy.contains("Sign in").click();
    cy.contains("Sign in to GitHub");
  });

  it("Preenchimento de formulário deve funcionar", function () {
    cy.get("#login_field").type("Humberto Gessinger");
    cy.get("#password").type("Humberto Gessinger");
    cy.contains("Sign in").click(); // vai dar errado. Pedir para corrigirem.
    // cy.contains("Sign in").eq(1).click(); // alt 1: segundo "sign in" que achar.
    // cy.get('input[name="commit"]').click(); // alt 2: jeito certo
  });

  it("Detecção de bot deve funcionar", function () {
    cy.contains("Your browser did something unexpected. Please try again.");
  });
});
