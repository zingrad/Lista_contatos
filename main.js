const nomeContato = document.getElementById('nome_contato')
const telefoneContato = document.getElementById('telefone_contato')
let linhas = []


addEventListener('submit',function(e) {
    e.preventDefault()
    adicionarLinha()
    atualizaTabela()
})


function adicionarLinha(){
    let linha = `<tbody><td>${nomeContato.value}</td><td> ${telefoneContato.value}</td></tbody>`
 
   linhas += linha
   console.log(linhas)
}


function atualizaTabela(){
    const corpoTabela = document.querySelector('table tbody')
    corpoTabela.innerHTML = linhas

    telefoneContato.value = ''
    nomeContato.value =''
}



