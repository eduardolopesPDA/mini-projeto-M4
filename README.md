<<<<<<< HEAD
# Mini Projeto API F1

Este projeto é uma API para gerenciar informações sobre pilotos de Fórmula 1 utilizando o Prisma como ORM para interagir com o banco de dados.

## Estrutura do Projeto

```
mini-projeto-api-f1
├── prisma
│   └── schema.prisma       # Define o esquema do banco de dados
├── src
│   ├── controllers
│   │   └── F1Controller.js # Controlador para gerenciar requisições HTTP
│   ├── models
│   │   └── F1Model.js      # Modelo para interagir com dados de pilotos
│   ├── routes
│   │   └── F1Routes.js     # Define as rotas da API
│   ├── services
│   │   └── F1Service.js    # Lógica de negócios e operações CRUD
│   └── index.js            # Ponto de entrada da aplicação
├── package.json             # Configuração do npm
└── README.md                # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd mini-projeto-api-f1
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure o banco de dados no arquivo `prisma/schema.prisma`.

4. Execute as migrações do Prisma:
   ```
   npx prisma migrate dev --name init
   ```

## Uso

Para iniciar o servidor, execute:
```
npm start
```

A API estará disponível em `http://localhost:3000`.

## Endpoints

- `GET /f1/pilotos`: Retorna a lista de todos os pilotos.
- `GET /f1/pilotos/:id`: Retorna um piloto específico pelo ID.
- `GET /f1/equipes/:equipe`: Retorna a lista de pilotos de uma equipe específica.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.
=======
bem vindo ao meu repositorio! Essa é a minha primeira API, espero que goste!!
neste ReadMe vou te ensinar a rodar a API, então preste bastante atenção nas informações abaixo

##  Como Rodar a API

Siga estas instruções para executar a API localmente.

### ⚙️ Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** (Node Package Manager) instalados em sua máquina.


---------------------
▶️ Execução
Rodando com nodemon

npm run dev

Rodando com node:

npm start
--------------------


---------------------
🔗 Endpoints da API
--------------------
--------------------
➡️ GET: /f1/pilotos

Retorna uma lista de todos os pilotos do grid de 2025 com suas respectivas equipes.
---------------------



------------------------
➡️ GET: /f1/pilotos/:id

Retorna as informações de um piloto específico com base no seu ID.



Exemplo de Requisição:

/f1/pilotos/3
-----------------------


----------------------------
➡️ GET: /f1/equipes/:equipe

Retorna a lista de pilotos de uma equipe específica.



Exemplo de Requisição:


/f1/equipes/Red Bull Racing
---------------------------

-----------------------
🛠️ Tecnologias
-
Node.js
-
Express
----------------------
>>>>>>> 822ddfbaa1adbff98428d2ae6b87d85efd9d1ece
