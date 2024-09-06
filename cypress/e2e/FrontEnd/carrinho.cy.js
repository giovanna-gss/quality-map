const faker = require('faker-br')

const nome = faker.name.firstName()

context('Quality Map', () => {

    before(() => {
        cy.acessarSite();   
    });

    it ('Buscar produto com sucesso', () => {
        cy.buscarProdutoComSucesso('Nokia Lumia 1020');
    
    /** 
    Cenário: Buscar produto com sucesso
        Dado que o usuário autorizado deseja buscar produto no site
        E não é informado descrição do produto no campo de pesquisa
        Quando clicar em SEARCH
        Então é apresentado item(ns) referente(s) a descrição informada
    */

    })

    it ('Adicionar produto a carrinho com sucesso', () => {
        cy.adicionarProdutoAoCarrinho('.product-box-add-to-cart-button');
    
    /**
    Cenário: Adicionar produto a carrinho com sucesso
        Dado que o usuário autorizado deseja adicionar produto ao carrinho
        E é apresentado produtos
        Quando clicar em ADD TO CART
        E clicar em ADD TO CART novamente
        Então o produto é adicionado ao carrinho
    */
    })

    it ('Validaçao do produto Virtual Gift Card', () => {
        cy.buscarProdutoComSucesso('Virtual Gift Card');
        cy.get('.product-box-add-to-cart-button').click()
        cy.get('#add-to-cart-button-43').click()
        cy.get('.bar-notification > :nth-child(1)').should('have.text','Enter valid recipient name').and('be.visible')
        cy.get('.bar-notification > :nth-child(2)').should('have.text','Enter valid recipient email').and('be.visible')
        cy.get('.bar-notification > :nth-child(3)').should('have.text','Enter valid sender name').and('be.visible')
        cy.get('.bar-notification > :nth-child(4)').should('have.text','Enter valid sender email').and('be.visible')
    
        /** 
        Cenário: Validaçao do produto Virtual Gift Card
            Dado que o usuário autorizado deseja adicionar produto ao carrinho
            E o produto é Virtual Gift Card
            E não é informado <informacao>
            Quando clicar em ADD TO CART
            Então o usuário é alertado com <mensagem>
        
            Exemplos:
            | informacao        | mensagem                    |
            | Recipient's Name  | Enter valid recipient name  |
            | Recipient's Email | Enter valid recipient email |
            | Your Name         | Enter valid sender name     |
            | Your Email        | Enter valid sender email    |
        */
    })

    it ('Adicionar Virtual Gift Card ao carrinho com sucesso', () => {
        cy.buscarProdutoComSucesso('Virtual Gift Card');
        cy.get('.product-box-add-to-cart-button').click()
        cy.get('#giftcard_43_RecipientName').type(nome)
        cy.get('#giftcard_43_RecipientEmail').type(nome+"@quality.com")
        cy.get('#giftcard_43_SenderName').type(nome)
        cy.get('#giftcard_43_SenderEmail').type(nome+"@quality.com")
        cy.get('#add-to-cart-button-43').click()
        cy.get('.content').should('have.text','The product has been added to your shopping cart').and('be.visible')

        /** 
        Cenário: Adicionar produto ao carrinho com sucesso
            Dado que o usuário autorizado deseja adicionar produto ao carrinho
            E o produto é Virtual Gift Card
            E é informado Recipient's Name 
            E é informado Recipient's Email
            E é informado Your Name        
            E é informado Your Email       
            Quando clicar em ADD TO CART
            Então o usuário é alertado com "The product has been added to your shopping cart"
        */
    })
    /** 
    it ('Alterar quantidade do produto no carrinho', () => {
        cy.get('#quantity-up-11227').click()
        
        /**
        Cenário: Alterar quantidade do produto no carrinho
            Dado que o usuário autorizado deseja alterar quantidade do produto carrinho
            E está aberto o carrinho
            Quando alterar quantidade do produto pela seta
            Então a quantidade do produto é alterada
            E o preço total do produto é alterado
            E o preço total do carrinho é alterado
        
    });
    */

    it ('Remover produto do carrinho', () => {
        cy.get('.cart-label').click()
        cy.get(':nth-child(2) > .remove-from-cart > .remove-btn').click()
        
        /**
        Cenário: Remover produto do carrinho
            Dado que o usuário autorizado deseja remover produto do carrinho
            E está aberto o carrinho
            Quando clicar em Remove no item desejado
            Então o produto é removido da lista
        */
    });
});
