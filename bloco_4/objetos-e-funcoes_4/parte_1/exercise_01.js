/* 
Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
Valor esperado no console: Bem-vinda, Margarida */

let info = {
    nome:'Ivan',
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  function boasVindas(name){
      return ' meu nome é '+name+', seja bem vinda à Trybe!';
  }

  console.log('Olá '+info.personagem+boasVindas('Ivan'));
