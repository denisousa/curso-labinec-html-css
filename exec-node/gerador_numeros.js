// https://www.npmjs.com/package/d3-random

// Chute um número qualquer: * (Denis)
// O número aleatório gerado foi: * (Máquina)
// Você o acertou o chute!
// Você errou o chute!

// Importação das bibliotecas
const { randomInRange } = require('make-random')
var prompt = require('prompt-sync')();

// Pegar dados do usuário
var chute = prompt(`Chute um número qualquer: `)
chute = parseInt(chute)

// Geração do número aleatório

var numero_aleatorio = randomInRange(1,10)
.then(resp => {
    numero_aleatorio = resp
    numero_aleatorio = parseInt(numero_aleatorio)
})
console.log(`O número aleatório gerado foi: ${numero_aleatorio}`)

// Verificação se o número aleatório é igual ao chute
if(numero_aleatorio == chute) {
    console.log(`Você acertou o chute!`)
}
if(numero_aleatorio != chute) {
    console.log(`Você errou o chute!`)
}
