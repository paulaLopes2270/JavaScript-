// ================== PI =============================
function pi() {
  return 3.14;
}
var total = 5 * pi();

console.log(pi());

// ================== IMC =============================
function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(71, 1.57));

// ================= COR FAVORITA =============================

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de mato";
  } else {
    return "Eu não gosto de cores";
  }
}

// ================= OI AO CLICAR NA PÁGINA =============

// addEventListener("click", function () {
//   console.log("Oi");
// });

// ================= TERCEIRA IDADEA =================

function terceiraIdade(idade) {
if (typeof idade !== 'number'){
//Return cancela toda a função abaixo
return 'Por favor, preencha um número válido'
} else if (idade >= 60) {
  return 'Você é idoso'
  } else 
    return 'Você não é idoso'
}

terceiraIdade(60)

// ================= PAÍSES VISITADOS =================
var totalPaises = 193;
function faltaVisitar(paisesVisitados) {
    return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}
console.log(totalPaises)
// Quando declaro a variável fora do escopo consegue ver do lado de fora. 




