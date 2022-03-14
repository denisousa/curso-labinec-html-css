// https://www.npmjs.com/package/d3-random

// Chute um número qualquer: * (Denis)
// O número aleatório gerado foi: * (Máquina)
// Você o acertou o chute!
// Você errou o chute!

// Importação das bibliotecas
var rn = require('random-number')
var config = {min: 1, max: 10, integer: true}
var gen = rn.generator(config)
var prompt = require('prompt-sync')()

// Pegar dados do usuário
var chute = prompt(`Chute um número qualquer: `)
chute = parseInt(chute)

// Geração do número aleatório
var numero_aleatorio = gen()
console.log(`O número aleatório gerado foi: ${numero_aleatorio}`)

// Verificação se o número aleatório é igual ao chute
if(numero_aleatorio == chute) {
    console.log(`Você acertou o chute!`)
}
if(numero_aleatorio != chute) {
    console.log(`Você errou o chute!`)
}
