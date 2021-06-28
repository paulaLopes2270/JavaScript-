// ======== OBJETO ============
var pessoa = {
  nome: "Paula",
  idade: 26,
};

// ======== MÉTODO ============
// é uma propriedade que possui uma função no local do seu valor
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// crie um objeto com os seus dados pessoais
var dados = {
  nome: "Paula",
  sobrenome: "Lopes",
  idade: "26",
};

// Crie um método no objeto anterior, que mostre o seu nome completo
 dados.nomeCompleto = function (){
   return `${this.nome} ${this.sobrenome}`
 }

 //modifique o valor da propriedade preço para 3000 se
 var carro = {
   preco:1000,
   portas: 4, 
   marca: 'Audi',
 }

 carro.preco = 3000;

 // Crie um objeto de um cachorro que represente um laborador que late ao ver um homem

 var cachorro = {
   raca: 'labrador',
   anos: 3, 
   cor: 'marron', 
   latir(pessoa) {
    if(pessoa === 'homem'){
      return 'cachorro latiu';
    } else {
      return 'cachorro não latiu';
    }
   }
 }