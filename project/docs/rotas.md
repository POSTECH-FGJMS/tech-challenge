## Rotas da Aplicação

## Cliente

As rotas a seguir dizem respeito ao domínio de Cliente.

### POST /clients

Essa rota tem a função de adicionar um cliente.
Toda vez que um cliente for fazer um pedido, um novo cliente deve ser adicionado.

url: `http://localhost:8080/clients`

request body:
```
{
    "name": "Pedro", // Representa o nome do cliente. Esse campo é opcional
    "cpf: "69814268038", // Representa o cpf do cliente. Esse campo é opcional 
    "email": "email@email.com", // Representa o email do cliente. Esse campo é opcional
}
```
Obs.: Todos os campos são opcionais, tendo em vista que o cliente pode querer não se identificar. Nesse caso, deve ser feito um post enviando um objeto vazio, para que um id seja gerado.

response body:
```
{
    "name": "Pedro",
    "email": "email@email.com",
    "cpf": "69814268038",
    "id": "7f740db9-f545-4db4-8a56-77f1e58750c9"
}
```

### GET /clients

Essa rota tem a função de retornar os dados de clientes

url: `http://localhost:8080/clients`

query parameters:
 - id
 - name
 - cpf
 - email

reposnse body:
```
[
    {
        "id": "7f740db9-f545-4db4-8a56-77f1e58750c9",
        "name": "Pedro",
        "email": "email@email.com",
        "cpf": "69814268038"
    }
]
```

## Item

As rotas a seguir dizem respeito ao domínio de Item.

### POST /item

Essa rota tem a função de adicionar um item ao cardápio.

url: `http://localhost:8080/item`

request body:
```
{
    "name": "Big Mac", // Representa o nome do item que aparecerá no cardápio
    "description": "Hambúrguer com três pães", // Representa a descrição do item que aparecerá no cardápio
    "price": 10.99, // Representa o preço do item no cardápio
    "category": "Lanche" // Representa a categoria do item, pode ser: Lanche, Acompanhamento, Bebida ou Sobremesa
}
```

response body:
```
{
    "name": "Big Mac",
    "description": "Hambúrguer com três pães",
    "price": 10.99,
    "category": "Lanche",
    "id": "076cb5ec-37b3-4d90-b6a8-657e24f32ac9"
}
```

### GET /item

Essa rota tem a função de resgatar informações sobre items no cardápio.

url: `http://localhost:8080/item`

query parameters:
 - id
 - name
 - description
 - price
 - category

response body: 
```
[
    {
        "id": "076cb5ec-37b3-4d90-b6a8-657e24f32ac9",
        "name": "Big Mac",
        "description": "Hambúrguer com três pães",
        "price": "10.99",
        "category": "Lanche"
    }
]
```

### PATCH /item/{id}

Essa rota tem a função de atualizar informações de um item no cardápio.

url: `http://localhost:8080/item/{id}`

request body:
```
{
    "name": "Big Mac",
    "description": "Hambúrguer com três pães",
    "price": 10.99,
    "category": "Lanche" 
}
```
Obs.: Todos os campos dessa requisição são opcionais, será atualizado apenas o campo enviado na requisição.

### DELETE /item/{id}

Essa rota tem a função de remover informações um item do cardápio.

url: `http://localhost:8080/item/{id}`

## Pedido

As rotas a seguir dizem respeito ao domínio de Pedido.

### POST /order

Essa rota tem a função de adicionar um pedido na fila.

url: `http://localhost:8080/order`

request body:
```
{
    "status": "Recebido", // Representa o status do pedido, pode ser Recebido, Em preparação, Pronto ou Finalizado. Esse campo é opcional
    "items": ["076cb5ec-37b3-4d90-b6a8-657e24f32ac9"], // Lista de ids dos items que compõem o pedido
    "client": "7f740db9-f545-4db4-8a56-77f1e58750c9" // Id do cliente que realizou o pedido
}

```
Obs.: caso um status não seja enviado, o status será "Recebido" por padrão.

response body:
```
{
    "client": {
        "id": "7f740db9-f545-4db4-8a56-77f1e58750c9"
    },
    "items": [
        {
            "id": "076cb5ec-37b3-4d90-b6a8-657e24f32ac9"
        }
    ],
    "id": "ea483e8d-8b30-4d74-8ce3-51d544d5d663",
    "status": "Recebido",
    "createdAt": "2023-07-05T15:40:30.087Z"
}
```

### GET /order

Essa rota tem a função de resgatar informações sobre um pedido.

url: `http://localhost:8080/order`

query parameters:
 - id
 - status
 - createdAt

response body:
```
[
    {
        "id": "ea483e8d-8b30-4d74-8ce3-51d544d5d663",
        "status": "Recebido",
        "createdAt": "2023-07-05T15:40:30.087Z",
        "items": [
            {
                "id": "076cb5ec-37b3-4d90-b6a8-657e24f32ac9",
                "name": "Big Mac",
                "description": "Hambúrguer com três pães",
                "price": "10.99",
                "category": "Lanche"
            }
        ],
        "client": {
            "id": "7f740db9-f545-4db4-8a56-77f1e58750c9",
            "name": "Pedro",
            "email": "email@email.com",
            "cpf": "69814268038"
        }
    }
]
```

### GET /order/queue

Essa rota tem a função de resgatar informações sobre os pedidos que estão atualmente na fila.

url: `http://localhost:8080/order/queue`

response body:
```
[
    {
        "id": "ea483e8d-8b30-4d74-8ce3-51d544d5d663",
        "status": "Recebido",
        "createdAt": "2023-07-05T15:40:30.087Z",
        "items": [
            {
                "id": "076cb5ec-37b3-4d90-b6a8-657e24f32ac9",
                "name": "Big Mac",
                "description": "Hambúrguer com três pães",
                "price": "10.99",
                "category": "Lanche"
            }
        ],
        "client": {
            "id": "7f740db9-f545-4db4-8a56-77f1e58750c9",
            "name": "Pedro",
            "email": "email@email.com",
            "cpf": "69814268038"
        }
    }
]
```

### PATCH /order/{id}

Essa rota tem a função de atualizar informações sobre um pedido.

url: `http://localhost:8080/order`

request body:
```
{
    "status": "Recebido",
    "items": ["076cb5ec-37b3-4d90-b6a8-657e24f32ac9"],
    "client": "7f740db9-f545-4db4-8a56-77f1e58750c9"
}
```
Obs.: Todos os campos são opcionais. Somente os campos enviados serão alterados.


### DELETE /order/{id}

Essa rota tem a função de remover um pedido do banco de dados.

url: `http://localhost:8080/order`
