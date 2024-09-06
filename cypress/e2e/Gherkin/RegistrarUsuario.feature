
Funcionalidade: Registrar usuário
	Eu como usuário com perfil autorizado
	Quero registrar um usuário
	Para realizar compras no site

#REGISTRAR
Esquema do Cenário: Informações obrigatórias ao registrar usuário
    Dado que o usuário autorizado deseja registrar um usuário
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

Esquema do Cenário: Validação ao informar e-mail inválido ao registrar usuário
    Dado que o usuário autorizado deseja registrar um usuário
    Quando informar email <formato>
    Então o usuário é alertado com <mensagem>
    E o usuário não é registrado

    Exemplos:
    | formato  | mensagem                            |
    | inválido | Please enter a valid email address. |
    | errado   | Wrong email                         |

Cenário: Validação ao informar senhas diferentes
    Dado que o usuário autorizado deseja registrar um usuário
    E é informado password
    E é informado confirm password diferente de password
    Quando clicar em REGISTER
    Então o usuário é alertado com "The password and confirmation password do not match."
    E o usuário não é registrado

Cenário: Validação ao informar senha inválida
    Dado que o usuário autorizado deseja registrar um usuário
    E é informado password menor que 6 caracteres
    E é informado confirm password igual ao password
    Quando clicar em REGISTER
    Então o usuário é alertado com "<p>Password must meet the following rules: </p><ul><li>must have at least 6 characters and not greater than 64 characters</li></ul>"
    E o usuário não é registrado

Cenário: Registrar usuário com sucesso
    Dado que o usuário autorizado deseja registrar um usuário
    E é informado First name      
    E é informado Last name       
    E é informado Email           
    E é informado Password        
    E é informado Confirm password
    Quando clicar em REGISTER
    Então o usuário é alertado com "Your registration completed"

Cenário: Alterar cadastro do usuário
    Dado que o usuário autorizado deseja alterar cadastro do usuário
    E o usuário está logado no sistema
    E está aberto tela My account
    Quando clicar em SAVE
    Então o usuário é alertado com "The customer info has been updated successfully."