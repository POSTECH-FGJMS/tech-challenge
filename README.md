# Tech Challenge Wiki

## Publicando documentação no github pages

Como explicado na [documentação do mkdocs](https://www.mkdocs.org/user-guide/deploying-your-docs/), executar o comando abaixo na raiz do projeto (ou onde estiver o arquivo mkdocs.yml):

```sh
mkdocs gh-deploy
```

A documentação vai estar disponível no endereço: https://postech-fgjms.github.io/tech-challenge/

## Rodando localmente

Seguem abaixo os passos para rodar a wiki localmente.

### Instalar dependências

- [Docker](https://docs.docker.com/get-docker/)
- [docker-compose](https://docs.docker.com.zh.xy2401.com/v17.12/compose/install/)

### Comandos para rodar

```sh
docker-compose up --build
```

Após rodar esses passos a wiki deve estar disponível em `http://localhost:8000`.
