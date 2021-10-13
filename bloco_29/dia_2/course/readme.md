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

### Modificando classe para uso de funcao define em models

- const User = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
  });

    return User;
  };

  module.exports = User;

### OBS:
- nossa lógica de validações, interação com o banco de dados (get, insert etc.), entre outras, se centralizavam no model. Com o Sequelize, essa lógica se centraliza nos controllers ou services. O modelo fica responsável apenas por representar a estrutura do banco de dados, para ajudar o sequelize a realizar as operações. 

## Migrations

- versionamento de schemas de banco de dados.
- um histórico com todas as alterações feitas no banco.
- Quem clona um projeto pela primeira vez roda suas migrations para configurar, sem ter que fazer mais nada, o banco de dados no formato mais recente enviado para master . Aí é possível trabalhar localmente no banco de dados da aplicação sem medo de ele ser diferente da versão mais nova que encontramos em master.
- UP and DOWN
    - toda migration, além de saber o que fazer para executar as mudanças no banco de dados ( Up ), também deve saber como reverter essas mudanças ( Down ). Isso significa que as migrations têm o poder de avançar ou reverter o seu banco de dados para qualquer um dos estados que ele já teve.
- XXXXXXXXXXXXXX-create-user.js
    - queryInterface:
        - é usado pelo sequelize para modificar o banco de dados, seguindo o "dialeto" do banco que estamos utilizando.
    - Sequelize: 
        -  armazena os tipos de dados disponíveis no contexto do banco, por exemplo varchar , string , integer , date etc.
    - adicionar a coluna "email"
        - ## <em>npx sequelize db:migrate</em>
        - caso queria reverter: npx sequelize db:migrate:undo
- adicionar nova coluna
    - ## <em>npx sequelize migration:generate --name add-column-phone-table-users</em> 

### Adicionando colunas

- npx sequelize migration:generate --name add-column-phone-table-users
- npx sequelize db:migrate
- adicionar nova coluna ao model User

## Seeders

- permitem que controlemos informações que devem ser criadas assim que nosso banco de dados/tabelas forem criadas. Ou seja, podemos configurar nosso banco para ser automaticamente criado e povoado!
- um seeder é usado para, basicamente, alimentar o banco de dados com informações necessárias para o funcionamento mínimo da aplicação.

### Criando um novo seed

- ### <em>npx sequelize seed:generate --name users</em>
- seeders:
    - queryInterface.bulkInsert('Tabela', [{ entradas }], {});
    - <em>npx sequelize db:seed:all</em> para add
    - <em>npx sequelize db:seed:undo:all</em> para remover

