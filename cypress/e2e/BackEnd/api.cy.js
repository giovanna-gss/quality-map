const faker = require('faker-br') 

var token = '' 
var id = '' 
const nome = faker.name.firstName() 
const email = nome + "@qa.com.br" 
const url = 'https://serverest.dev' 

describe('api', () => {

  it('Login', () => {
    cy.request({
      method: 'POST',
      url: url + "/login",
      failOnStatusCode: false, //esse comando permite que o teste continue mesmo se o status for diferente de 200
      body: {
        "email": "fulano@qa.com",
        "password": "teste"
      }
    }).as('post')

    cy.get('@post').then((response) => {
      expect(response.status).equal(200)
      expect(response.body.message).equal("Login realizado com sucesso")
      expect(response.body.authorization).to.exist
      token = response.body.authorization
    })
  })

  it('Cadastrar Usuário', () => {
    cy.request({
      method: 'POST',
      url: url + "/usuarios",
      failOnStatusCode: false,
      body: {
        "nome": nome,
        "email": email,
        "password": "teste",
        "administrador": "true"
      },
      headers: {
        "Authorization": token,
      },
    }).as('post2')

    cy.get('@post2').then((response) => {
      expect(response.status).equal(201)
      expect(response.body.message).equal("Cadastro realizado com sucesso")
      id = response.body._id
    })
  })

  it('Editar Usuário', () => {
    cy.request({
      method: 'PUT',
      url: url + "/usuarios/" + id,
      failOnStatusCode: false,
      body: {
        "nome": nome + " Editado",
        "email": email,
        "password": "teste",
        "administrador": "true"
      },
      headers: {
        "Authorization": token,
      },
    }).as('post2')

    cy.get('@post2').then((response) => {
      expect(response.status).equal(200)
      expect(response.body.message).equal("Registro alterado com sucesso")
    })
  })

  it('Buscar Usuário', () => {
    cy.request({
      method: 'GET',
      url: url + "/usuarios/" + id,
      failOnStatusCode: false,
      headers: {
        "Authorization": token,
      },
    }).as('post2')

    cy.get('@post2').then((response) => {
      expect(response.status).equal(200)
      expect(response.body.nome).equal(nome + " Editado")
      expect(response.body.email).equal(email)
      expect(response.body.password).equal("teste")
      expect(response.body.administrador).equal("true")
      expect(response.body._id).equal(id)
    })
  })

  it('Excluir Usuário', () => {
    cy.request({
      method: 'DELETE',
      url: url + "/usuarios/" + id,
      failOnStatusCode: false,
      headers: {
        "Authorization": token,
      },
    }).as('post2')

    cy.get('@post2').then((response) => {
      expect(response.status).equal(200)
      expect(response.body.message).equal("Registro excluído com sucesso")
    })
  })
})