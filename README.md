<br />
<p align="center">
  <h1 align="center">API REST - Hamburgueria (Módulo 4 - Resilia Educação</h1>
  
  <img src="./readme/topo.gif" alt="Logo" width="500">
 
</p>

# Pré-requisitos:

### Instalando e executando a API:

Você precisará instalar em seu PC: <br>

[Git](https://git-scm.com) ✔ <br>
[Node.js](https://nodejs.org/en/) ✔ <br>
[Insomnia](https://insomnia.rest/download) ✔ <br>
[VSCode](https://code.visualstudio.com/) ✔ <br>

# Passo a Passo
## no terminal digite os comandos:

1 - git clone https://github.com/jonatastalves/API-HAMBURGUERIA.git<br>
2 - npm install: Para instalar as dependencias necessárias para rodar o projeto<br>
3 - npm start: Para iniciar o Projeto<br>

# Sobre

Projeto de conclusao do Módulo 4 da Resilia Educação, que tem como objetivo criar uma API REST com o tema "Hamburgueria"

Nesta API poderemos usar todo CRUD

# Rotas da API

## Endereços

<b>[GET] </b> /cliente - A rota exibirá todos os clientes cadastrados<br>

________________________________________________________________________________________________________________

<b>[GET] </b> /cliente/:id - A rota exibirá o cliente do ID especificado.<br>

________________________________________________________________________________________________________________

<b>[POST] </b> /Endereco/criar - A rota criará um novo cliente com base nas informações passadas no corpo da requisição.<br>

```javascript
{
   "nome": "...",
   "telefone": ...,
   "idade": ...,
   "cpf": ...
   
}
```

<h4>Observações:</h4>
 ✔ será gerado automaticamente um campo chamado ID no arquivo (database.sqlite) para realização do CRUD.

________________________________________________________________________________________________________________

<b>[PUT] </b> /cliente/:id - A rota atualizará o cliente com as informações passadas no corpo da requisição<br>

<h4>Observações:</h4>
 ✔ Você poderar alterar o campo que achar necessário no cliente.<br>
 ✔ para encontrar o id você pode realizar um GET anteriormente!

________________________________________________________________________________________________________________

<b>[DELETE] </b> /Endereco/:id - A rota deletará baseado em seu ID.<br>

<h4>Observações:</h4>
 ✔ O ID se encontra no arquivo (database.sqlite) ou será exibido quando efetuar um GET.

________________________________________________________________________________________________________________

# Validação de dados

Foi adicionada as seguintes validações para os dados recebidos nas requisições: <br><br>
<b>[POST] </b> /Endereco/criar <br>

- O campo "nome" deverá receber somente letras e ter entre 1 e 24 caracters<br>
- Os campos "telefone", "idade" e "cpf" deverão receber somente numeros inteiros<br>


# Conhecimentos Praticados

<p align="center" >
<img src="./readme/imgbin_sqlite-database-android-mysql-png.png" alt="Logo" width="200">
<img src="./readme/node-js.png" alt="Logo" width="100">
<img src="./readme/pngwing.com.png" alt="Logo" width="200">
<img src="./readme/58482ee4cef1014c0b5e4a75.png" alt="Logo" width="100">
<img src="./readme/insomnia-logo-A35E09EB19-seeklogo.com.png" alt="Logo" width="100">
</p>


<p align="center"><img src="./readme/giphy.gif" alt="hamburger-dance-Gif" width=""></p>
