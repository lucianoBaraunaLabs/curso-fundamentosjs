class Heroi {
    atacar() {
        console.log(`Atacou!!!`);

    }

    defender() {
        console.log(`Defendeu!!!`);

    }
}

const heroi = new Heroi()
heroi.atacar()
heroi.defender()

// usando constructor
// o construtor é um função que é invocada quando é instanciada o obj new

class Heroi2 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    atacar() {
        console.log(`O ${this.nome} atacou!!!`);

    }
}

const heroi2 = new Heroi2('Flash', 80)
heroi2.atacar()

// Quando utilizamos um método static nós não utilizamos o this como no constructor. O método é
// utilizado para valores que não se alteram e ao termino da invocação o método é destruido.

class Heroi3 {
    static obterAnoNascimento(idade) {
        return 2020 - idade
    }
}

const anoNascimento = Heroi3.obterAnoNascimento(32);
console.log(`O ano de nascimento do Heroi é: ${anoNascimento}`);
