describe("Home Page", () => {
  beforeEach(() => {
    cy.login("anon@test.com");
  });

  it("should show a list of products", () => {
    cy.getCookie('auth:token').then((authToken) => {
      cy.request({
        url: `${Cypress.env('API_URL')}/produtos`,
        headers: {
          authorization: `Bearer ${authToken?.value}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        const products = response.body.result;
        cy.visit("/");

        for (const product of products) {
          cy.contains(product.name).should("exist");
        }
      });
    });
  });
});
