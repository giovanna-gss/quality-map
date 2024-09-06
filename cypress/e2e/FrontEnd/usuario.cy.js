const faker = require('faker-br') 

const nome = faker.name.firstName()

context('Quality Map', () => {

    before(() => {  
        cy.acessarSite();
    });
    
        it ('Informações obrigatórias ao registrar usuário', () => {
            cy.get('.ico-register').click()
            cy.get('button').contains('Register').click()
            cy.get('.field-validation-error').should('have.text','First name is required.Last name is required.Email is required.Password is required.').and('be.visible')
       
        /** 
        Esquema do Cenário: Informações obrigatórias ao registrar usuário
            Dado que o usuário autorizado deseja registrar um usuário
            E o usuário está tela de registrar novo usuário
            E não é informado <informacao>
            Quando clicar em REGISTER
            Então o usuário é alertado com <mensagem>
            E o usuário não é registrado

            Exemplos:
            | informacao       | mensagem                |
            | First name       | First name is required. |
            | Last name        | Last name is required.  |
            | Email            | Email is required.      |
            | Password         | Password is required.   |
            | Confirm password | Password is required.   |

        */

        })
        it ('Registrar usuário com sucesso', () => {
            cy.get('#FirstName').type(nome)
            cy.get('#LastName').type('Sampaio')
            cy.get('#Email').type(nome+"@teste.com")
            cy.get('#Password').type('123456')
            cy.get('#ConfirmPassword').type('123456')
            cy.get('button').contains('Register').click()
            cy.get('.result').should('have.text','Your registration completed').and('be.visible')
        
            /**
            Cenário: Registrar usuário com sucesso
                Dado que o usuário autorizado deseja registrar um usuário
                E o usuário está tela de registrar novo usuário
                E é informado First name      
                E é informado Last name       
                E é informado Email           
                E é informado Password        
                E é informado Confirm password
                Quando clicar em REGISTER
                Então o usuário é alertado com "Your registration completed"
            */
        })

        it ('Alterar cadastro do usuário', () => {
            cy.get('.ico-account').click()
            cy.get('#save-info-button').click()
            cy.get('.bar-notification').should('have.text','The customer info has been updated successfully.').and('be.visible')
        
            /**
            Cenário: Alterar cadastro do usuário
                Dado que o usuário autorizado deseja alterar cadastro do usuário
                E o usuário está logado no sistema
                E está aberto tela My account
                Quando clicar em SAVE
                Então o usuário é alertado com "The customer info has been updated successfully."
            */
        })
    })
