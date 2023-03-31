async function buscaEndereco(cep){
    let = mensagemErro = document.querySelector('#erro')
    mensagemErro.innerHTML = ""

    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()

        if(consultaCEPConvertida.erro){
            throw Error ('CEP não existente!')
        }

        var cidade = document.querySelector('#cidade')
        var logradouro = document.querySelector('#endereco')
        var estado = document.querySelector('#estado')
        var bairro = document.querySelector('#bairro')

        cidade.value = consultaCEPConvertida.localidade
        logradouro.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf
        bairro.value = consultaCEPConvertida.bairro

        console.log(consultaCEPConvertida)
        return consultaCEPConvertida
    } catch(erro){
        mensagemErro.innerHTML = '<p>CEP inválido. Tente novamente!</p>'
    }
}

var cep = document.querySelector('#cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))