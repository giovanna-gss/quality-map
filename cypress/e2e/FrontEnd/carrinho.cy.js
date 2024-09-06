const faker = require('faker-br') //Biblioteca do fake

const nome = faker.name.firstName()

context('Quality Map', () => {

    before(() => {
        cy.setCookie('cf_clearance','s9qd6i2YE.tnWhIzF8CAF7tsj0L0QP1yUmxGGIihqWs-1725597934-1.2.1.1-k2cD3ncsOPbKNG9YaMz4y8BIa1H44nrL7KbqrjgZdYgmbZvIpEOJOIY03kSIo6puRF9vSnsm2_pFsWV8C58rsj2tv7uBlWBFMxos4fXBSTk1TNb8oJ2b_eEftfA8QLtHqzpJ8.WvXgdt14dx8wj.GIeQaXhxSZteMmLBvSG8GZ05MySF0r_qwWP3aG73CfIoqTSYEwsYQOgQytMp3uxraZuIVhRUxIV7UINezKFunens2Qoq5NH3IgLS934XEaaT2gfIcqWfmiLnER.yqGd1sgOr1nD6nIIAbM_KCGoJLw_C9IYnRpY.MrqaFlaC2be4v8eLY93WXMuPnV1PidVIfMw2znyPhBRB6JoAPmKeK2wEUipAhE1QzTFz1_rQbwP6SQrdZAlIMS5h5MVRseOAkhioNE9Er.fYO4kD2bDPoOuhm3HdC9VeRdmlBvN2bt8B')
        cy.visit('https://demo.nopcommerce.com/',{ failOnStatusCode: false });     
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
         //cy.get('#small-searchterms').type('Virtual Gift Card')
         //cy.get('button').contains('Search').click()
         //cy.adicionarProdutoAoCarrinho('.product-box-add-to-cart-button');
         cy.get('.product-box-add-to-cart-button').click()
         //cy.get('.button.button-2.product-box-add-to-cart-button').click()
         //cy.get('button').contains('Add to cart').click()
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

/**


#ALTERAR QUANTIDADE DO PRODUTO PELO CARRINHO
Cenário: Alterar quantidade do produto no carrinho
    Dado que o usuário autorizado deseja alterar quantidade do produto carrinho
    E está aberto o carrinho
    Quando alterar quantidade do produto pela seta
    Então a quantidade do produto é alterada
    E o preço total do produto é alterado
    E o preço total do carrinho é alterado

#REMOVER ITEM DO CARRINHO


#FINALIZAR
Cenário: Finalizar compra sem conconrdar com os termos
    Dado que o usuário autorizado deseja finalizar a compra
    E está aberto o carrinho
    E não é aceito os termos de serviço
    Quando clicar em CHECKOUT
    Então o usuário é alertado com "Please accept the terms of service before the next step."
    E a compra não é finalizada
*/