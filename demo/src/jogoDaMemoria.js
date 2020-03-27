class JogoDaMemoria {
    // A class jogo da memoria quando instaciada precisa dos dados da tela.
    // se mandar um obj = {tela: 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pegar somente a propriedade
    constructor({ tela, util }) {
        this.tela = tela
        this.util = util

        this.heroisIniciais = [
            { img: './arquivos/batman.png', nome: 'batman'},
            { img: './arquivos/ciclop.png', nome: 'ciclop'},
            { img: './arquivos/deadpool.png', nome: 'deadpool'},
            { img: './arquivos/mulhermaravilha.png', nome: 'mulhermaravilha'}
        ]

        this.iconePadrao = './arquivos/default.png'
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }

    // para usar o this, não podemos usar static!
    inicializar() {
        // vai pegar todas as funcoes da classe tela!
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        // bind forca a tela a usar o THIS do jogo da memória (this do contexto atual)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
        this.tela.configurarBotaoMostrarTudo(this.mostarHeroisEscondidos.bind(this))

    }

    async embaralhar() {
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
        this.tela.exibirCarregando()

        const idDoIntervalo = this.tela.iniciarContador()
        // vamos esperar 3 segundo para atualizar a tela
        // setTimeout(() => {
        //    this.esconderHerois(copias)
        // }, 1000);
        await this.util.timeout(3000)
        this.tela.limparContador(idDoIntervalo)
        this.esconderHerois(copias)
        this.tela.exibirCarregando(false)


    }

    esconderHerois(herois) {
        // vamos trocar a imagem de todos os herois existentes
        // pelo icone padrão
        // como fizemos no construtor, vamos extrai somente o necessario
        // usando a sintaze ({ chave: 1 })  estamos falando que vamos retornar
        // o que tiver dentro dos parenteses
        // quando nao usamos : (exemplo do id), o JS sentende que o nome
        // é o mesmo do valor. Ex. id: id, vira id
        const heroisOcultos = herois.map(({ nome, id }) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        // atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        // guardamos os herois para trabalhar com eles depois
        this.heroisEscondidos = heroisOcultos
    }

    exibirHerois(nomeHeroi) {
        // vamos procurar esse herois pelo nome em nossos heroisIniciais
        // vamos obter somente a imagem dele
        const { img } = this.heroisIniciais.find(({ nome }) => nomeHeroi === nome)
        this.tela.exibirHerois(nomeHeroi, img)

    }

    verificarSelecao(id, nome) {
        const item = { id, nome }
        // vamos verificar a quantidade de herois selecionados
        // e tomar ação se escolher certo ou errado
        const heroisSelecionados = this.heroisSelecionados.length
        switch (heroisSelecionados) {
            case 0:
                // adiciona a escolha na lista, esperando pela proxima
                // clicada
                this.heroisSelecionados.push(item)
                break;
            case 1:
                // se a quantidade de escolhidos for 1, significa
                // que o usuario só pode escolher mais um
                // vamos obter o primeiro item da lista
                const [ opcao1 ] = this.heroisSelecionados
                // zerar itens para nao selecionar mais de dois
                this.heroisSelecionados = []
                // conferimos se os nomes e ids batem conforme
                // o esperado
                if(opcao1.nome === item.nome &&
                 // aqui verificamos se são ids diferentes para
                 // o usuario nao clicar duas vezes no mesmo
                 opcao1.id !== item.id
                ) {
                    this.exibirHerois(item.nome)
                    // como o padrao e true, nao precisa passar nada
                    this.tela.exibirMensagem()
                    return;
                }

                this.tela.exibirMensagem(false)
                // fim do jogo
                break;

        }

    }
    mostarHeroisEscondidos () {
        // vamos pegar todos os herois da tela e colocar seu
        // respectivo valor correto

        const heroisEscondidos = this.heroisEscondidos
        for (const heroi of heroisEscondidos) {
            const { img } = this.heroisIniciais.find(item => item.nome === heroi.nome)
            heroi.img = img
        }
        this.tela.atualizarImagens(heroisEscondidos)

    }

    jogar() {
        this.embaralhar()
    }
}