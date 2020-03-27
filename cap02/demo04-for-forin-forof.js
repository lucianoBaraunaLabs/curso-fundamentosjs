const textoPar = "par"
const textoImpar = "impar"

// for (let index = 0; index < 10; index++) {
//     const decisao = index % 2 === 0 ? textoPar : textoImpar
//     console.log(`O número ${index} é ${decisao}`);

// }

const minhaListaDeHerois = [
    {
        id: parseInt(Math.random() * 10),
        nome: "Zezinho",
        poder: 'Veloz'
    },
    {
        id: parseInt(Math.random() * 10),
        nome: "Mariazinha",
        poder: 'Super força'
    }
]

// precisa do index e contador
for (let index = 0; index < minhaListaDeHerois.length; index++) {
    const item = minhaListaDeHerois[index];
    console.log(
        `
        id: ${item.id}
        nome: ${item.nome}

        `
    );
}

// não precisa de contador
for (const index in minhaListaDeHerois) {
    const item = minhaListaDeHerois[index];
    console.log('Nome', item.nome);

}

// não precia usar index e nem o contador
for (const item of minhaListaDeHerois) {
    console.log('Nome**', item.nome);

}