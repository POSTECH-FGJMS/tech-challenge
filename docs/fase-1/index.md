# Entrega

## Histórico de Revisão

|Data|Versão|Descrição|Autor(es)|
|----|------|---------|---------|
|07/05/2023|0.1|Criação do documento|Marianna Teixeira|

A aplicação deve ser entregue com um Dockerfile configurado para executá-la corretamente.

- Aplicação deverá ser escalável para atender grandes volumes nos horários de pico
- Banco de dados a sua escolha
- Inicialmente deveremos trabalhar e organizar a fila dos pedidos apenas em banco de dados
- Não será necessário o desenvolvimento de interfaces para o frontend, o foco deve ser total no backend.

Para validação da POC, temos a seguinte limitação de infraestrutura:

- 1 instância para banco de dados
- 1 instância para executar aplicação

## Documentação

utilizar linguagem ubíqua para documentar os seguintes fluxos:

1. Realização do pedido e pagamento
1. Preparação e entrega do pedido

## API

Uma aplicação para todo sistema de backend (monolito) que deverá ser desenvolvido seguindo os padrões apresentados nas aulas e utilizando arquitetura hexagonal.

Endpoints:

1. Cadastro do Cliente
1. Identificação do Cliente via CPF
1. Criar, editar e remover de produto
1. Buscar produtos por categoria
1. Fake checkout: apenas enviar os produtos escolhidos para a fila
1. Listagem dos pedidos
