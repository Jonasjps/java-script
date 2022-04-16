let num = document.querySelector('input#num')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#result')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }

}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function Adicionar( ) {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        alert('tudo OK')
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
}
    
  
    /*if(numero == 0 || numero > 100 ) {
        alert('Invalido verifique os dados e tente novamente!')
    }else{
        let option = document.createElement('option')
        option.text = `Valor ${numero} adicionado`
        sel.value = `tab ${numero}`
        sel.appendChild(option)
        
    }
}
function Finalizar() {
    
      res.innerHTML = 'Resultado final'
    
    
    
}*/