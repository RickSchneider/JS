//parametros de função
//              2    2
function soma(num1, num2) {
  return num1 + num2;
}

function somaOutroNumero() {
  return 25 + 50;
}
// console.log(soma(2, 2));
// console.log(soma(245, 210));
// console.log(soma(24, 20));
// console.log(soma(-224, 20));

//parametros x argumento

//ordem dos parametros

function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade(40, "otavio"));

// function multiplica(num1, num2) {
//   return num1 * num2;
// }

//console.log(multiplica(soma(4, 5), soma(3, 3)));

// function multiplica(num1, num2) {
//   return num1 * num2;
// }
//console.log(multiplica(soma(4, 5)));

// definir valor padrao para o argumento

function multiplica(num1 = 1, num2 = 1) {
  return num1 * num2;
}
console.log(multiplica(soma(4, 5)));
