function minhaFuncao1(parametro1) {
    return `aeee`

}

const minhasFuncao2 = function(parametro1) {
    return `aeee ${parametro1}`
}

const minhasFuncao3 = (parametro1) => {
    return `aeee ${parametro1}`
}

const minhasFuncao4 = parametro1 => `aeee ${parametro1}`

const obj1 = {
    minhaFuncao: parametro1 => `aeee ${parametro1}`
}

const obj2 = {
    minhaFuncao (parametro1){
        return `aeee ${parametro1}`
    }
}

obj1.minhaFuncao('test')
obj2.minhaFuncao('test')