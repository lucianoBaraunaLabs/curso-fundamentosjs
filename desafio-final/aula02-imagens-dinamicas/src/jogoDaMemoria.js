class JogoDaMemoria {
    // A class jogo da memoria quando instaciada precisa dos dados da tela.
    // se mandar um obj = {tela: 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pegar somente a propriedade
    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
            { img: './arquivos/batman.png', name: 'batman'},
            { img: './arquivos/ciclop.png', name: 'ciclop'},
            { img: './arquivos/deadpool.png', name: 'deadpool'},
            { img: './arquivos/mulhermaravilha.png', name: 'mulhermaravilha'}
        ]
    }

    // para usar o this, não podemos usar static!
    inicializar() {
        // vai pegar todas as funcoes da classe tela!
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        // bind forca a tela a usar o THIS do jogo da memória
        this.tela.configurarBotaoJogar(this.jogar.bind(this))

    }

    embaralhar() {
        const copias = this.heroisIniciais
        // duplicar itens
        .concat(this.heroisIniciais)
        // entrar em cada item e cria um id aleatoria
        .map(item => {
            return Object.assign({}, item, { id: Math.random() / 0.5 })
        })
        // ordenar (baguncar os cards)
        .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias)

    }

    jogar() {
        this.embaralhar()
    }
}