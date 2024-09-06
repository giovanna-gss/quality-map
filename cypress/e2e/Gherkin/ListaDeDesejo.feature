Funcionalidade: Lista de desejo
	Eu como usuário com perfil autorizado
	Quero consultar, adicionar e alterar produto da lista de desejo
	Para facilitar procura de produtos posteriormente

#ADICIONAR PRODUTO NA LISTA DE DESEJO
Cenário: Adicionar produto na lista de desejo
    Dado que o usuário autorizado deseja adicionar produto na lista de desejo
    E é apresentado produto
    Quando clicar em Add to wishlist
    Então o usuário é alertado com "The product has been added to your wishlist"
    E o produto é adicionado na lista

#REMOVER ITEM DA LISTA DE DESEJO
Cenário: Remover produto da lista de desejo
    Dado que o usuário autorizado deseja remover produto da lista de desejo
    E está aberto a lista de desejo
    Quando clicar em Remove no item desejado
    Então o produto é removido da lista