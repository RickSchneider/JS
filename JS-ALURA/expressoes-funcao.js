function minhaFuncao() {
  //escopo
}

minhaFuncao("param");

//expressao de funcao

// const soma = function (num1, num2) {
//   return num1 + num2;
// };
// console.log(soma(1, 1));

// diferença principal: HOISTING ->  que é içar ou levantar; que é, exatamente, trazer todas essas declarações para cima do nosso código, no topo dele.
// funcoes e var sao "listadas" no topo do arquivo
console.log(apresentar());

function apresentar() {
  return "ola";
}

console.log(soma(1, 1));
const soma = function (num1, num2) {
  return num1 + num2;
};
