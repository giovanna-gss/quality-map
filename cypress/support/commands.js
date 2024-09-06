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

Cypress.Commands.add('buscarProdutoComSucesso', (produto) =>{
    cy.get('#small-searchterms').type(produto)
    cy.get('button').contains('Search').click()
})

Cypress.Commands.add('adicionarProdutoAoCarrinho', (botao) =>{
    cy.get(botao).click()
    //cy.get('button').contains('Search').click()
    cy.get('.content').should('have.text','The product has been added to your shopping cart').and('be.visible')
})

