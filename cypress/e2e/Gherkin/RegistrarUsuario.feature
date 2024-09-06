
Funcionalidade: Registrar usuário
	Eu como usuário com perfil autorizado
	Quero registrar um usuário
	Para realizar compras no site

Esquema do Cenário: Informações obrigatórias ao registrar usuário
    Dado que o usuário autorizado deseja registrar um usuário
    E está na tela de registrar usuário
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