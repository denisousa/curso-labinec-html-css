// https://www.npmjs.com/package/prompt-sync

// ALGORITMO: MAIOR NÚMERO

// Digite um número X:
// Digite um número Y:
// O número X é maior que Y
// O número Y é maior que X

var prompt = require('prompt-sync')();
var num1 = prompt('Digite um número X: ');
var num2 = prompt('Digite um número Y: ');
if(num1 > num2) {
    console.log(`O número ${num1} é maior que ${num2}`)
}
else {
    console.log(`O número ${num2} é maior que ${num1}`)
}
