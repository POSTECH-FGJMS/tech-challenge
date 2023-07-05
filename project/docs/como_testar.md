# Como testar

## Postman

Para testar a aplicação recomendamos o uso do [Postman](https://www.postman.com/) ou outra aplicação similar da sua escolha.

Fornecemos uma collection do postman com alguns exemplos de como utilizar as rotas disponíveis na aplicação, essa collection está disponível em [/docs/postman/tech_challenge.postman_collection.json](./postman/tech_challenge.postman_collection.json).
Bara utiliza-la basta importa-la no próprio postman.


## Rotas disponíveis

Além da collection do postman, também é possível ver uma documentação sobre as rotas disponíveis em [/project/docs/rotas.md](./rotas.md)

## Happy Path

Esse é o fluxo feliz e recomendado para a realização de um pedido.

 - Deve ser adicionado um item no cardápio pelo gerente
   - Para isso deve ser feita a ação [POST /item](./rotas.md#post-item)
 - O cliente deve se cadastrar na plataforma
   - Para isso deve ser feita a ação [POST /clients](./rotas.md#post-clients)
 - O cliente deve realizar um pedido adicionando os items desejados
   - Para isso deve ser feita a ação [POST /order](./rotas.md#post-order)
 - O pedido está feito e pode ser acompanhado através da fila
   - Para isso deve ser feita a ação [GET /order/queue](./rotas.md#get-orderqueue)
