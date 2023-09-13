// let x = "";
// console.log(x);
// x = "oi";

//1) declara a função
//                    tipo string
function imprimeTexto(texto) {
  console.log(texto);
}

// 2) executa a função uma ou mais vezes
imprimeTexto(soma());
// imprimeTexto("outro texto");

//tres formas de escrever funções
function soma() {
  const resultado = 2 + 2;
  //return tem que ser a ultima linha dentro do escopo, caso tenha algo depois do return, o js nao executará
  return resultado;
  //outra opção seria
  //   return 2 + 4;
}
// console.log(soma());
