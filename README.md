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
