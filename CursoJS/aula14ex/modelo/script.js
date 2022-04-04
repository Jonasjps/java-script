function Contar() {
    var inicio = Number(document.querySelector('input#txtini').value)
    var fim = Number(document.querySelector('input#txtfim').value)
    var passo = Number(document.querySelector('input#txtpas').value)
    var res = Number(document.querySelector('div#result').value)
    var inicio = 1
    while( inicio <= 10 ) {
        res.innerHTML += `${passo}`
    }
    
}