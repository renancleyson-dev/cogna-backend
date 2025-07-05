describe("Product Details Page", () => {
  beforeEach(() => {
    cy.login("anon@test.com");
  });

  it("should navigate from home to product detail using real data", () => {
    cy.getCookie('auth:token').then((authToken) => {
      cy.request({
        url: `${Cypress.env('API_URL')}/produtos`,
        headers: {
          authorization: `Bearer ${authToken?.value}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        const products = response.body.result;
        expect(products.length).to.be.greaterThan(0);

        const product = products[0];

        cy.visit("/");

        cy.contains(product.name).click();

        cy.contains(product.name);
        cy.contains(product.description);
      });
    });
  });
});
