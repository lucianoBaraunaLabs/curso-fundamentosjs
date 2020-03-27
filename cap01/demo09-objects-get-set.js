/**
 * Quando criamos uma propriedade com _ nós estamos dizendo que
 * essa propriedade é privada e ela não deve ser acessada por uma
 * forma pública como `foo.nome`, sendo assim ela só deve ser
 * acessada por métodos acessores como get e set.
 */

 const pessoa = {
    _nome: '',
    _idade: 20,

    get nome() {
        return this._nome
    },

    set nome(valor) {
        this._nome = valor.toUpperCase();
    },

    set idade(valor) {
        this._idade = valor
    },

    get podeDirigir() {
        return this._idade > 18
    }
 }

pessoa.nome = 'EPAMINONDAS'
console.log('pegando a propriedade nome: ', pessoa.nome);

pessoa.idade = 16
console.log('pessoa pode dirigir ? ', pessoa.podeDirigir);

pessoa.idade = 25
console.log('pessoa pode dirigir ? ', pessoa.podeDirigir);


