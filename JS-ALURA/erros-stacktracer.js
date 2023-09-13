//const numero;
// SyntaxError: Missing initializer in const declaration
//     at Object.compileFunction (node:vm:352:18)
//     at wrapSafe (node:internal/modules/cjs/loader:1031:15)
//     at Module._compile (node:internal/modules/cjs/loader:1065:27)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47

//sempre se atentar ao erro informado no inicio
//SyntaxError: Missing initializer in const declaration
//informa que o erro é ocorrido devido a falta de informação na declaração do valor, sendo uma const, ja devemos colocar o valor, caso fosse uma let, nao teria o erro

// const num = 1;
// console.log(num

// SyntaxError: missing ) after argument list
// at Object.compileFunction (node:vm:352:18)
// at wrapSafe (node:internal/modules/cjs/loader:1031:15)
// at Module._compile (node:internal/modules/cjs/loader:1065:27)
// at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
// at Module.load (node:internal/modules/cjs/loader:981:32)
// at Function.Module._load (node:internal/modules/cjs/loader:822:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
// at node:internal/main/run_main_module:17:47

//note que o erro fala que esta faltando o fechar de parenteses

// console.log(minhaVar);

// ReferenceError: minhaVar is not defined
//     at Object.<anonymous> (C:\dev\JS\JS-ALURA\erros-stacktracer.js:32:13)
//     at Module._compile (node:internal/modules/cjs/loader:1101:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47

//note que que informa que a variavel "minhaVar" não foi definida.
//note tambem que na segunda linha ele informa o arquivo que ta dando o erro e tambem a linha que o erro ocorre
//at Object.<anonymous> (C:\dev\JS\JS-ALURA\erros-stacktracer.js:32:13)

//outras formas de conseguir identificar os erros do js

// RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.

// ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

// SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

// TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.
