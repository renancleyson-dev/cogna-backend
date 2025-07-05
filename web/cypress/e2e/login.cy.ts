describe("Login Page", () => {
  it("should display the login form", () => {
    cy.visit("/login");

    cy.get('input[name="email"]').should("exist");
    cy.get("button").contains("Entrar").should("exist");
  });

  it("should login successfully and redirect to home", () => {
    cy.visit("/login");

    cy.get('input[name="email"]').type("anon@test.com");
    cy.get("button").contains("Entrar").click();

    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });

  it("should show error on invalid credentials", () => {
    cy.visit("/login");

    cy.get('input[name="email"]').type("invalid@test");
    cy.get("button").contains("Entrar").click();

    cy.get('[role="alert"]').should("exist");
  });
});
