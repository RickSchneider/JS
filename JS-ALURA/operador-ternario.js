//operador ternario funciona como um if, como uma comparação

const idadeMinima = 18;
const idadeCliente = 20;

// if (idadeCliente >= idadeMinima) {
//   console.log("cerveja");
// } else {
//   console.log("kisuco");
// }
//condição                    |true     | false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "kisuco");
//não é o ideal utilizar este modelo de comparação (boas praticas)
