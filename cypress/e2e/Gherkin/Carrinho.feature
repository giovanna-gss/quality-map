Funcionalidade: Carrinho
	Eu como usuário com perfil autorizado
	Quero consultar, adicionar e alterar produto do carrinho
	Para realizar compra final do produto

#BUSCAR PRODUTO
Cenário: Buscar produto com sucesso
    Dado que o usuário autorizado deseja buscar produto no site
    E não é informado descrição do produto no campo de pesquisa
    Quando clicar em SEARCH
    Então é apresentado item(ns) referente(s) a descrição informada

#ADICIONAR AO CARRINHO
Cenário: Adicionar produto a carrinho com sucesso
	Dado que o usuário autorizado deseja adicionar produto ao carrinho
	E é apresentado produtos
	Quando clicar em ADD TO CART
    E clicar em ADD TO CART novamente
	Então o produto é adicionado ao carrinho
	
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

Cenário: Adicionar Virtual Gift Card ao carrinho com sucesso
    Dado que o usuário autorizado deseja adicionar produto ao carrinho
	E o produto é Virtual Gift Card
    E é informado Recipient's Name 
    E é informado Recipient's Email
    E é informado Your Name        
    E é informado Your Email       
    Quando clicar em ADD TO CART
    Então o usuário é alertado com "The product has been added to your shopping cart"

#ALTERAR QUANTIDADE DO PRODUTO PELO CARRINHO
Cenário: Alterar quantidade do produto no carrinho
    Dado que o usuário autorizado deseja alterar quantidade do produto carrinho
    E está aberto o carrinho
    Quando alterar quantidade do produto pela seta
    Então a quantidade do produto é alterada
    E o preço total do produto é alterado
    E o preço total do carrinho é alterado

#REMOVER ITEM DO CARRINHO
Cenário: Remover produto do carrinho
    Dado que o usuário autorizado deseja remover produto do carrinho
    E está aberto o carrinho
    Quando clicar em Remove no item desejado
    Então o produto é removido da lista