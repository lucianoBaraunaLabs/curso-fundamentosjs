const podeDirigir = false

if(podeDirigir) {
    console.log(podeDirigir)
}

const saldoEmConta = 0

if(!saldoEmConta) {
    console.log('não tem saldo !')
}

const boolComString = 'aew parceiro';

// forçando o valor booleano com !!
console.log('boolComString', !!boolComString);

// negação
console.log('boolComString', !boolComString);

// negação + forçar o booleano
console.log('boolComString', !(!!boolComString));
