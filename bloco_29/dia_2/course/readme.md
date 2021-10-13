# Guia Sequelize

## Modulos

- npm i sequelize sequelize-cli mysql2

## Iniciar sequelize

- npx sequelize-cli init

### Esse comando irá criar as seguintes pastas:
- config : contém um arquivo de configuração, que "fala" para o CLI como conectar-se com o nosso banco de dados;
- models : contém todos os modelos da nossa aplicação;
- migrations : contém todos os arquivos de migração da nossa aplicação;
- seeders : contém todos os arquivos de "seeds".

## Conectando ao banco

Agora só nos resta configurar o arquivo config.json gerado pelo init do CLI. Ao alterar esse arquivo, estamos configurando o acesso da aplicação ao nosso banco de dados. Vamos modificar somente o objeto development.

- config/config.json
  - {
      "development": {
        "username": "root",
        "password": "",
        "database": "orm_example",
        "host": "127.0.0.1",
        "dialect": "mysql"
        }
    // No resto do arquivo você vai encontrar as convenções para conectar o Sequelize em outros ambientes
    }

- Usuário de acesso ao banco de dados;
- Senha de acesso ao banco de dados;
- Nome do banco de dados no qual queremos conectar;
- Host que estamos conectando - por ser local, utilizamos o 127.0.0.1 ;
- Dialect é, nada mais nada menos, qual banco estamos utilizando. Dito isso, passamos "mysql".

## Criando o banco usando o CLI do Sequelize

- npx sequelize db:create

## Criando um model

- exemplo (não precisa ser executado)
  -  npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string
      - name -> nome da tabela
      - attributes -> nome das colunas e tipo de dados
- exemplo de criação da tabela users
  - npx sequelize model:generate --name User --attributes fullName:string
      - criado arquivo na pasta migration (yyyy-MM-dd:hh:mm:ss) e User.js na pasta model