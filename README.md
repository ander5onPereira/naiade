## Instalação

    yarn install

## Rodar a aplicação

    yarn dev

## Rodar os testes

    yarn test

## Gerar build

    npx tsc

## Rodar build

    yarn start

## Configuração de Banco de dados

    Banco de dados: Postgres
    database test: CreativeCodeDev
    database produção: CreativeCode
    

# COMPONENTES DTO

## Usuario_DTO
  
    - id?: string;
    - nome: string;
    - telefone: string | null;
    - email: string;
    - idade: number | null;
    - peso: number | null;
    - etnia: string<enum>;
    - token: string | null;
    - createdAt?: Date;
    - updatedAt?: Date;

## Endereco_DTO

    - id?: string;
    - endereco: string;
    - numero: number | null;
    - complemento: string | null;
    - cep: string;
    - cidade: string;
    - estado: string;
    - id_usuario: string;
    - createdAt?: Date;
    - updatedAt?: Date;

# REST API

Seguem a descrição das funcionalidades da api. 

## Status da api

### Request

> `GET /status`

  URL: http://localhost:3330/status

### Response Success

  HTTP/1.1 200 OK
  Content-Type: application/json; 
  Location: /status

  return: true


## Cadastro de Usuario

### Request

> `POST /usuario`

    URL: http://localhost:3330/usuario
    body.json( {Usuario_DTO} )

### Response Success

    Status: 201 Created
    Content-Type: application/json
    Location: /usuario

    return: {Usuario_DTO}


## Cadastro de Usuario e Endereço

### Request 

> `POST /usuario`

    URL: http://localhost:3330/usuario
    body.json( {Usuario_DTO, Endereco_DTO} )

### Response Success

    Status: 201 Created
    Content-Type: application/json
    Location: /usuario

    return: {Usuario_DTO,Endereco_DTO}

## Login

### Request

> `POST /login`

    URL: http://localhost:3330/login
    body.json( { "email": "exemplo@email.com" } )

### Response Success

    Status: 200 OK
    Content-Type: application/json
    Location: /login

    return: {Usuario_DTO}

## Logout

### Request

> `POST /logout`

    URL: http://localhost:3330/logout
    query (?id=usuario_DTO.email)
    Authorization:Bearer + "token"

### Response Success

    Status: 200 OK
    Content-Type: application/json
    Location: /logout

    return: Realize login

## Cadastro Endereço

### Request

> `POST /endereco`

    URL: http://localhost:3330/endereco
    body.json( {endereco_DTO} )

### Response Success

    Status: 200 OK
    Content-Type: application/json
    Location: /endereco
    Authorization:Bearer + "token"

    return: {Usuario_DTO}

## Listar Usuarios

### Request

> `GET /usuario`

    URL: http://localhost:3330/usuario
    body.json( {endereco_DTO} )
    Authorization:Bearer + "token"

### Response Success

    Status: 200 OK
    Content-Type: application/json
    Location: /usuario

    return: [ { Usuario_DTO } ]

## Listar Endereços

### Request

> `GET /endereco`

    URL: http://localhost:3330/endereco
    body.json( {endereco_DTO} )
    Authorization:Bearer + "token"

### Response Success

    Status: 200 OK
    Content-Type: application/json
    Location: /endereco

    return: [ { Endereco_DTO } ]

## Atualizar Usuario

### Request

> `PUT /usuario`

    URL: http://localhost:3330/usuario
    body.json( {usuario_DTO} )
    query (?id=usuario_DTO.id)
    Authorization:Bearer + "token"

### Response Success

    Status: 200 OK
    Content-Type: application/json
    Location: /usuario

    return: {Message:"sucsess"}

## Atualizar Endereço

### Request

> `PUT /endereco`

    URL: http://localhost:3330/endereco
    body.json( {endereco_DTO} )
    query (?id=endereco_DTO.id)
    Authorization:Bearer + "token"

### Response Success

    Status: 200 OK
    Content-Type: application/json
    Location: /endereco

    return: {Message:"sucsess"}

## Apagar Endereço

### Request

> `DELETE /endereco`

    URL: http://localhost:3330/endereco
    query (?id=endereco_DTO.id)
    Authorization:Bearer + "token"

### Response Success

    Status: 200 OK
    Content-Type: application/json
    Location: /endereco

    return: {Message:"sucsess"}

## Apagar Usuario

### Request

> `DELETE /usuario`

    URL: http://localhost:3330/usuario
    query (?id=usuario_DTO.id)
    Authorization:Bearer + "token"

### Response Success

    Status: 200 OK
    Content-Type: application/json
    Location: /usuario

    return: {Message:"sucsess"}

## Buscar Usuario

### Request

> `GET /usuario/busca`

    URL: http://localhost:3330/usuario/busca
    query (?id= usuario_DTO)
    Authorization:Bearer + "token"

### Response Success

    Status: 200 OK
    Content-Type: application/json
    Location: /usuario/busca

    return: [{usuario_DTO}]

## Buscar Endereço

### Request

> `GET /endereco/busca`

    URL: http://localhost:3330/endereco/busca
    query (?id= endereco_DTO)
    Authorization:Bearer + "token"

### Response Success

    Status: 200 OK
    Content-Type: application/json
    Location: /endereco/busca

    return: [{endereco_DTO}]
