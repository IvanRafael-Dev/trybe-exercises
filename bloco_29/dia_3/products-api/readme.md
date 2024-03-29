# Associations

## Add a foreign key to Products table

### *Relacionamento 1 : N*

```javascript
up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Products', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: { 
        model: 'Users', // userId de products aponta para id de model // model = table!!!
        key: 'id',
      },
      onUpdate: 'CASCADE', // se User id mudar aqui tbm é atualizado
      onDelete: 'CASCADE', // caso User id excluido, exclui todos os registros que apontar para aquele id
    });
  },

```

- depois da modificação no banco, precisamos modificar tbm o model de Product

```javascript
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
  });

  Product.associate = (models) => {
    Product.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    // Produto perternce a um usuario, o produto chama esse usuario de user (posso definir qquer nome)
    // e a chave que vc usa para associar um com o outro é userId
  };
  return Product;
};

// esse 'user' se torna um atributo de Product e pode ser acessado:
const product = Product.findByPk(1);
product.user;
```
- adicionar o ***userId*** aos controllers que fazem seu ***uso***

## Formas de carregar as informações de um model

- **eager loading**: 
    - forma mais 'ansiosa' de carregar (carrega todos os dados em uma unica query);

    ```javascript
    const product = await Product.findByPk(req.params.id, 
      { include:
        { model: User, as: 'user', attributes: { exclude: ['password'] } } 
      });
    // carrego os produtos já com os usuários inclusos na resposta
    // incluir o model User na tabela product na chave user
    // lembrando que a fk associada é a userId
    // product retornará algo como:
    {
      "createdAt": "2021-10-17T15:33:12.000Z",
      "description": "iPhone X novo",
      "id": 1,
      "name": "iPhone",
      "price": 15000,
      "updatedAt": "2021-10-17T15:33:12.000Z",
      "user": {
          "createdAt": "2021-10-17T16:24:25.000Z",
          "email": "teste@email.com",
          "id": 1,
          "name": "ivan",
          "updatedAt": "2021-10-17T16:24:25.000Z",
          "username": "ivandolim"
      },
      "userId": 1
    }   
    ```
    


- lazy loading:
    - quando eu precisar dos dados ele faz uma segunda query para carregar os dados;
    ```javascript
    // lazy loading: 
    const product = await Product.findByPk(req.params.id);
    const user = await product.getUser();
    ```

- na relação 1 : N sempre quem recebe a fk é a N
- podemos dizer entao que User tem varios Produtos:
```javascript
const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  user.associate = (models) => {
    user.hasMany(models.Product, { as: 'products', foreignKey: 'userId' });
    // repare que a mesma FK da tabela N é referenciada
    // vamos na tabela de produtos e vemos quantos produtos um usuario tem
    // observando a chave userId de product
    // automaticamente tbm é criada uma funcao getProducts() 
    // que pode ser usada como user.getProducts() que vai retornar os produtos pertencentes ao usuario
  };

  return user;
};

module.exports = User;
```

- no controller (users) entao podemos ter (lazy loading):

```javascript
  router.get('/:id', (req, res) => {
  User.findByPk(req.params.id, { attributes: { exclude: ['password'] } })
    .then(async (user) => {
      if (user === null) return res.status(404).json({ message: 'Usuario não encontrado' });
      if (!req.query.includeProducts) return res.status(200).json(user);
      
      const products = await user.getProducts();
      return res.status(200).json({ ...user.dataValues, products });
    })
    .catch((e) => {
      console.log(e.message);
      return res.status(500).json({ message: 'Algo deu errado' });
    });  
  });  
```

## Relacionamentos N : N
  <img src="./assets/images/estruturaLiquidacoes.png" width="70%">

- criar a tabela `SellOffs`:
    ```
    npx sequelize-cli model:generate --name Selloff --attributes name:string,discount:float,startDate:date,endDate:date
    ```
- tudo ok rodamos a migration:  
  ```
  npx sequelize-cli- db:migrate
  ```

### Criando a tabela Selloff-Products 

- ```
  npx sequelize-cli migration:create --name create-selloffs-products-table
  ```
- criamos a tabela Selloff-Products contendo duas PK que sao tambem as FK das tabelas relacionadas. 
A juncao dessas duas PK formam a PK da tabela Selloff-Products.
- nossa migration ficaria assim: 
```javascript
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SelloffProducts', {
      selloffId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Selloffs',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('SelloffProducts');
  },
};
```
-  agora é só executar a migration
 ```
 npx sequelize-cli db:migrate
 ```

 ### Criando o Model selloffProducts

 -  ```javascript
  module.exports = (sequelize, _DataTypes) => {
    const SelloffProducts = sequelize.define('SelloffProducts',
      {}, // geralmente sao as colunas que esse model tem
          // quando criarmos a association o sequelize vai entender que essas propriedades precisam existir
          // selloffId e productId
      { timestamps: false });

    SelloffProducts.associate = (models) => {
      models.Product.belongsToMany(models.Selloff, {
        as: 'selloffs', // chave que identifica as liquidacoes do produto 
        through: SelloffProducts, // atraves desse model o sequelize sabe qual produto pertence a qqual liquidação
        foreignKey: 'productId', // chave da tabela onde é criada a associação
        otherKey: 'selloffId',
      });

      models.Selloff.belongsToMany(models.Product, {
        as: 'products', // chave que identifica as liquidacoes do produto 
        through: SelloffProducts, // atraves desse model o sequelize sabe qual produto pertence a qqual liquidação
        foreignKey: 'selloffId', // chave da tabela onde é criada a associação
        otherKey: 'productId',
      });
    };

    return SelloffProducts;
  };
    ```