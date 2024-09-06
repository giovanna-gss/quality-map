// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('acessarSite', () => {
    //cy.setCookie('cf_clearance','yDL14r6bK3LseDjsqZcZKgEvW0sY_ZXYIpuZHojA49U-1725629340-1.2.1.1-N3cA.hIyAEmFw2uDulsPTzYAeU90g34qSj57qc1PM0vukq1prNd6bxn0tC5DQYg5RELgEiGfnSlwIQOLJerCDbZkn4ICxFouT.GMzo434MJfhYlle3eZ97ym2mUGwLbFfLDBANqphl0QRryCjf1lMJgtKTXFQj9hYPXYSV8iqafUrQSESKDw2hwTy2CC27t9woj_JWrmkZMGrRFOM0UJlHDXIpviyZ.tBLKwJb6CNYvtNGp6liFPpf0obRLdb0p_WYbtNiGpsO7jswiTwbCjCw3e9bfw3Qsi7k.J4WoWQsnJD8MAJlbSZM43Sb8eVyMxzwtCwyzIVpVK.xsMoNyJ8v1F9C6iRCPOXn34LRvqmML4cQ_5oximEGIO_j456nXzWCVv.fRfgFYs1HMa05i6TwTwmbabkd.cquDlvLg2TfMt6d4calHMjSAWHe9LXGVT')
    cy.visit('https://demo.nopcommerce.com/',{ failOnStatusCode: false });
    
    cy.intercept('POST', '/captcha/endpoint', {
        statusCode: 200,
        body: { success: true }
      }).as('captchaBypass');
})

Cypress.Commands.add('buscarProdutoComSucesso', (produto) =>{
    cy.get('#small-searchterms').type(produto)
    cy.get('button').contains('Search').click()
})

Cypress.Commands.add('adicionarProdutoAoCarrinho', (botao) =>{
    cy.get(botao).click()
    cy.get('.content').should('have.text','The product has been added to your shopping cart').and('be.visible')
})

