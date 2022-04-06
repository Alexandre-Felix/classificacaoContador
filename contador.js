let listaAlunos = ["Leonardo", "Robson", "rafael", "Raiane"]

let quantidadeAlunos = 5;

for(let contador = 0; contador < listaAlunos.length; contador++) {
    console.log(contador)

    // contador % 2 == 0 -> PAR
    // contador % 2 == 1 -> IMPAR

    if (contador == 0) {
    // interpolação -> Formata um texto inserindo valores dentro do texto
    console.log(`O aluno ${listaAlunos[contador]} é o número ZERO`)
    }else if (contador % 2 == 0) {
    // elif
    // Concatenação -> Junção de texto ->Operador: +
    console.log("O aluno " + listaAlunos[contador] + " é número PAR")
    } else if (contador % 2 == 1) {
        // interpolação -> Formata um texto inserindo valores dentro do texto
        console.log (`O aluno ${listaAlunos[contador]} é número IMPAR`)
    }

}