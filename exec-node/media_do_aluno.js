var boletim = [3, 6, 4]
var media = (boletim[0] + boletim[1] + boletim[2])/3

// if(media >= 7) {
//         console.log("ALUNO APROVADO - MEDIA:" + media)
// }
// else if (media < 7 && media >= 5) {
//         console.log("ALUNO DE RECUPERAÇÂO - MEDIA:" + media)
// }
// else {
//         console.log("ALUNO REPROVADO - MEDIA:" + media)
// }


if(media >= 7) {
        console.log("ALUNO APROVADO - MEDIA:" + media)
}
if (media < 7 && media >= 5) {
        console.log("ALUNO DE RECUPERAÇÂO - MEDIA:" + media)
}
if (media < 5) {
        console.log("ALUNO REPROADO - MEDIA:" + media)
}