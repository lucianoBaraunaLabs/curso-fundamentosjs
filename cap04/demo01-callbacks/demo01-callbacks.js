const fs = require('fs');

// O segundo argumento da função readFile é um callback que está dentro da conveção. O primeiro argumento de um callback sempre deve ser o error.
// fs.readFile('arq1.txt', (error, resposta) => {
//     if(error) {
//         console.error('Deu ruim no arquivo***', error.stack)
//         return;
//     }
//     console.log("Resposta: ", resposta.toString());

// })

// Esse modelo abaixo não é recomendado de ser trabalhar por conta da forma de leitura. Famoso callbackhell
fs.readFile('arq1.txt', (errorArq1, respostaArq1) => {
    if(errorArq1) {
        console.error('Deu ruim no arq1: ', errorArq1.stack)
        return;
    }

    fs.readFile('arq2.txt', (errorArq2, respostaArq2) => {
        if(errorArq2) {
            console.error('Deu ruim no arq2: ', errorArq2.stack)
            return;
        }

        fs.readFile('arq3.txt', (errorArq3, respostaArq3) => {
            if(errorArq3) {
                console.error('Deu ruim no arq3: ', errorArq3.stack)
                return;
            }

            const conteudo = `${respostaArq1}\n${respostaArq2}\n${respostaArq3}`
            fs.writeFile('./final.txt', conteudo, (errorWrite, respostaWrite) => {
                if(errorWrite) {
                    console.error("Deu ruim na gravacao", errorWrite)
                }
                console.log('Arquivo salvo com sucesso')
            })


        })

    })



})