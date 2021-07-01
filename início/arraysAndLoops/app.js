//  Array é um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável

// var videoGames = ['Switch', 'PS4', 'XBox'];

// videoGames[0]//switch
// videoGames[2]

//acesse um elemento do array utilizando [n]

//métodos e propriedades de um array 
// var videGames2= ['Switch', 'PS4', 'Xbox'];

// videoGames2.pop(); // Remove o último item e retorna ele
// videoGames2.push('3DS'); // adiciona ao final do Array 
// videoGames2.length; //3 quantos itens tem no array
// Existem diversos outros métodos, como map, reduce, ferEach


//FOR LOOP 
for (var numero = 0; numero < 4; numero++) {
  console.log(numero);
}
//o for possui 3 partes: início, condição e incremento

//WHILE LOOP
var i = 0; 
while (i < 10) {
  console.log(i);
  i = i +5;
}

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
}
//BREAK  O loop irá parar caso encontro e palavra break
var videoGames3 = ['Swith', 'PS4', 'XBox', '3DS'];
for (var i =0; i < videoGames3.length; i++) {
  console.log(videoGames3[i]);
  if(videoGames3[i] === 'PS4') {
    break
  }
}
//FOREACH
//é um método que executa uma função para cada item da Array. é uma forma mais simples de utilizarmos um loope com arrays (ou array-like)
var videoGames4 = ['Switch', 'PS4', 'XBox', '3DS']; videoGames4.forEach(function(item, array, index){
  console.log(array, index);//o atributo item será atribuido dinamicamente

  //podemos passar os seguintes parâmetros item, index array
});


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
basilCampeao = ['1959' , '1962', '1970', '1994', '2002'] 
for (var i = 0; i < basilCampeao.length; i++) {
  console.log(`O Brasil ganhou a copa de ${basilCampeao[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(contador = 0; contador < frutas.length; contador++) {
  console.log(frutas[contador])
if(frutas[contador]=== 'Pera') {
  break
}
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var frutas2 = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
var ultimaFruta = frutas2[frutas2.length - 1];