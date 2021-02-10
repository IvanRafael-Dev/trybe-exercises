const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.address.street}, nº: ${order.address.number}, apto: ${order.address.apartment}`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const pizzasTotal = order.order.pizza.margherita.price + order.order.pizza.pepperoni.price;
  const bebidasTotal = order.order.drinks.coke.price;
  const delivery = order.order.delivery.price;
  const totalPedido = pizzasTotal + bebidasTotal + delivery
  return `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${order.order.drinks.coke.type} é de R$ ${totalPedido.toPrecision(4)} reais`;
}

console.log(orderModifier(order));