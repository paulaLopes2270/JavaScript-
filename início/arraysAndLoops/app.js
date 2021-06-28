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