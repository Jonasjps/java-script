let NomedaNave = prompt('Digite o nome da Nave')

let velocidadedaNave = 0 

let opçãoescolhida

function Menu() {
    let opção 
    while (opção != '1' && opção != '2'  && opção != '3' && opção != '4' ) {
        opção = prompt('O que deseja fazer?\n'+
                '1- Acelerar a Nave em 5km/s\n'+
                '2- Desacelerar a Nave em 5km/s\n'+
                '3- Imprimir dados de bordo\n'+
                '4- Sair do programa')
} 

return opção
}

function Acelerar(Velocidade) {
    let Novavelocidade = Velocidade + 5
    return Novavelocidade
}

function Desacelerar(Velocidade) {
    let Novavelocidade = Velocidade - 5
    if(Novavelocidade < 0) {
        Novavelocidade = 0
    }
    return Novavelocidade
}
function ImprimirdadosdaNave(NomedaNave,Velocidade){
    alert(  `Espaçonave:  ${NomedaNave} \nVelocidade:   ${Velocidade} Km/s`)
}


do {
    opçãoescolhida = Menu()
    switch(opçãoescolhida){
        case '1':
            velocidadedaNave = Acelerar(velocidadedaNave)
            break
    case '2':
        velocidadedaNave = Desacelerar(velocidadedaNave)
        break
    case '3':
        ImprimirdadosdaNave(NomedaNave, velocidadedaNave)
        break
    default:
        alert('Ecerrando programa de bordo')
    }
} while (opçãoescolhida != '4')
