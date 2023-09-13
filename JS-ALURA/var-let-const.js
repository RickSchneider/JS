// var altura = 5;
// var comprimento = 7;

// var area = altura * comprimento;
// console.log (area)

let forma = "retangulo";
var altura = 5;
var comprimento = 7;
let area;

console.log(area);

if (forma === "retangulo") {
  area = altura * comprimento;
} else {
  area = (altura * comprimento) / 2;
}

console.log(area);

//diferença entre var, let e const

// var (escopo global) - escopo fora do bloco.

//let (escopo local) - escopo restrito ao bloco. const (não permitindo reatribuição e nem redeclaração) -
//pode ser alterado mas deve ser criada a variavel antes da modificação do valor

//constante. não respeitando bloco e permitindo a redeclaração e reatribuição
//nao é possivel modificar o valor da variavel fora da declaração da variavel
