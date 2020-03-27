// meses começam com 0
const dataAniversario = new Date(2020, 05, 15);

console.log(dataAniversario);

const primeraDataDoJS = new Date(0);
console.log(primeraDataDoJS);

const hoje = new Date()
// console.log(hoje.getTime());
// console.log(hoje.toLocaleDateString()); // data da onde está localizado o usuário.

// formato global recomendado
// console.log(hoje.toISOString());


// const dia = hoje.getDate();
// hoje.setDate(dia + 5) // adicionando mais 5 dias
// hoje.setHours(10, 30, 10) // etando horas

// console.log('dia de hoje', dia);
// console.log('setando', hoje);

console.log(`
    Dia: ${hoje.getDate()},
    Mês: ${hoje.getMonth()},
    Ano: ${hoje.getFullYear()},
    Hora: ${hoje.getHours()},
    Min: ${hoje.getMinutes()},
    Seg: ${hoje.getSeconds()}
`);


console.log(
    new Date(2020, 1, 20) > new Date(2000, 1, 1)
);




