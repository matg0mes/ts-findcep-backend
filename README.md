# About

API cujo objetivo é retornar o endereço para o client-side através do envio de um código postal, esse endereço é armazenado em um banco de dados em memória (SQLite) que serve como cache para próximos retornos do mesmo endereço.

## Por que SQLite?

Foi utilizado SQLite por ele simular um mecanismo mais próximo do que consideramos cache do sistema, uma vez que ele armazena informações localmente visando melhorar a performance de consultas futuras.

## Como instalar?

Com node e npm instalado na máquina rode o comando para instalar as dependencias:

```nodejs
    npm install
```

## Iniciando a API

Com node e npm instalado na máquina rode o comando para iniciar o serviço, por padrão o serviço é iniciado na portta 3333, logo em http://localhost:3333:

```nodejs
    npm run dev
```

### GET /address

Exemplo retorno esperado:

```json
[
  {
    "id": "37263b2a-1475-489e-928f-b6a3093329e7",
    "zipCode": "09230511",
    "street": "Rua Abel Ferreira",
    "complement": "",
    "neighborhood": "Vila Camilópolis",
    "city": "Santo André",
    "state": "SP",
    "updated_at": "2021-05-06T14:20:58.560Z",
    "created_at": "2021-05-06T13:59:50.000Z"
  }
]
```

### GET /address/:cep

Exemplo retorno esperado com o cep 09230511:

```json
{
  "id": "37263b2a-1475-489e-928f-b6a3093329e7",
  "zipCode": "09230511",
  "street": "Rua Abel Ferreira",
  "complement": "",
  "neighborhood": "Vila Camilópolis",
  "city": "Santo André",
  "state": "SP",
  "updated_at": "2021-05-06T16:40:23.928Z",
  "created_at": "2021-05-06T13:59:50.000Z"
}
```

## Testes unitários

Com node e npm instalado na máquina rode o comando para rodar os testes unitários:

```nodejs
    npm run test:unit
```

## Migrations

### Aprendido na última Next Level Week (5) a API suporta a função de migrations, cujo o objetivo é compartilhar um ambiente dinâmico de estruturas e tabelas do banco entre os devs

Com node e npm instalado na máquina rode o comando para rodar as migrations:

```nodejs
    npm run migration:run
```

Revert:

```nodejs
    npm run migration:revert
```
