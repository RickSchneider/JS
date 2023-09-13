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
