context('Quality Map', () => {

    before(() => {  
        cy.acessarSite();
    });

    it ('Adicionar produto na lista de desejo', () => {
        cy.buscarProdutoComSucesso('Nokia Lumia 1020');
        cy.get('button').contains('Add to wishlist').click()
        cy.get('.content').should('have.text','The product has been added to your wishlist').and('be.visible')
    
        /**
        Cenário: Adicionar produto na lista de desejo
            Dado que o usuário autorizado deseja adicionar produto na lista de desejo
            E é apresentado produto
            Quando clicar em Add to wishlist
            Então o usuário é alertado com "The product has been added to your wishlist"
            E o produto é adicionado na lista
        */
    
    })

    it ('Visualizar lista de desejo', () => {
        cy.get('.wishlist-label').click()
    
        /**
        Cenário: Visualizar lista de desejo
            Dado que o usuário autorizado deseja visualizar lista de desejo
            Quando clicar no botão Whishlist
            Então é apresentado produtos na lista
        */
    
    })

    it ('Remover produto da lista de desejo', () => {
        cy.get('.wishlist-label').click()
        cy.get('.remove-btn').click()
    
        /**
        Cenário: Remover produto da lista de desejo
            Dado que o usuário autorizado deseja remover produto da lista de desejo
            E está aberto a lista de desejo
            Quando clicar em Remove no item desejado
            Então o produto é removido da lista
        */
    
    })
})  