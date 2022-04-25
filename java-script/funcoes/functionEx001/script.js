let NomedaNave = prompt('Digite o nome da Nave!')

let VelocidadedaNave = 0 

let opcaoescolhida

function Menu() {
    let opcao 
    while(opcao != '1' && opcao != '2' && opcao != '3' && opcao != '4') {
        opcao = prompt('O que deseja fazer?\n' +
                       '1- Acelerar a nave em 5km/s\n'+
                       '2- Desacelerar a nave em 5km/s\n'+
                       '3- imprimir dados de bordo\n'+
                       '4- Sair do programa')
    }
    return opcao
}
function Acelerar(velocidade) {
    let Novavelocidade = velocidade + 5
    return Novavelocidade
}

function Desacelerar(velocidade) {
    let Novavelocidade = velocidade - 5
    if(Novavelocidade < 0){
        Novavelocidade = 0
    }
    return Novavelocidade
}

function Imprimirdadosdebordo(NomedaNave, velocidade) {
    alert('Nome da nave: ' + NomedaNave + '\nVelocidade da nave: ' + velocidade + 'km/s')
}
 do{
     opcaoescolhida = Menu()
     switch(opcaoescolhida){
         case '1':
             VelocidadedaNave = Acelerar(VelocidadedaNave)
             break
        case '2':
            VelocidadedaNave = Desacelerar(VelocidadedaNave)
            break
        case '3':
             Imprimirdadosdebordo(NomedaNave,VelocidadedaNave)
            break
        default:
            alert('Encerra programa!')
            break
     }
 }while(opcaoescolhida != '4')
