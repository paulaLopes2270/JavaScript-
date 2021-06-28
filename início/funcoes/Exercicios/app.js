// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado) {
  return !!dado; 
}


// Crie uma função matemática que retorne o perímetro de um quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}

// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return ` ${nome} ${sobrenome} `
}

// Crie uma função que verifica se um número é par
function numeroPar (numero) {
if (numero %2 ==0){
  return'Esse numero é par'
}
else {
  return 'Esse numero é impar'
}
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado (dado) {
  return typeof dado;
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  console.log("Paula Lopes ")
})