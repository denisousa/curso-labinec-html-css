// 1. O que é uma função?
// R: Função é um bloco de código que pode ser reutilizado em qualquer parte do código
//    A função pode receber parâemtros e utiliza-los como bem entenedr
//    A etapa de criação e etapa de chamada/execução
// 2. O que é um parâmetro de função?
// R: É um dado que a função recebe como entrada
// 3. Diferença entre função com ou sem retorno?
// R: Algumas funções retornam dados e outras retornam nada

function soma(num1, num2){ // Criação
        var soma = num1 + num2;
        return soma
}

function olaTurma(){ // Criação
        console.log("Ola turma do LABINEC")
}

var resultado = soma(10, 2) // Chamada
console.log(resultado)

olaTurma()
