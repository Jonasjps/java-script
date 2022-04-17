let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#result')
let valores = []

function Numero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }

}
function Lista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function Adicionar( ) {
    if(Numero(num.value) && !Lista(num.value, valores)) { // ! o sinal quer dizer não!
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text =`Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ''// essa função esvazia o campo em que fica o numero no navegador
    num.focus()//apos adicionar um numero o cursor continua piscando porque é onde meu foco esta!
}
    
  
function Finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) 
                maior = valores[pos]
             if (valores[pos] < menor) 
                menor = valores[pos]
            
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números adicionados!</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</P>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML +=`<p>A média dos valores digitados é ${media}</p>`
    }
    
    
}