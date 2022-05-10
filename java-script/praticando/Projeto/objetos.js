let Carro = {
    velocidade: 0,
    acelerar: function(aceleracao) {
        this.velocidade += aceleracao
    }
}

function pegandoDados() {
    Carro.nome = prompt('Informe o Nome do Carro:')
    Carro.marca = prompt('Informe o modelo do Carro:')
    Carro.velocidadeMaxima = Number(prompt('Informe a velocidade Máxima do carro (km/s):'))
}

function Acelerador() {
    let aceleracao = Number(prompt('Quanto você quer acelerar? (km/s)'))
    Carro.acelerar(aceleracao)
    if (Carro.velocidade > Carro.velocidadeMaxima) {
        alert('VELOCIDADE MÁXIMA ULTRAPASSADA!' +
              '\nVelocidade do Carro: ' + Carro.velocidade + 'km/s' +
              '\nVelocidade máxima do Carro permitida: ' + Carro.velocidadeMaxima + 'km/s')

    }
}

function Parar() {
    alert('Nome: ' + Carro.nome + 
          '\nMarca: ' + Carro.marca + 
          '\nVelocidade do Carro: ' + Carro.velocidade + 'km/s' +
          '\nVelocidade Máxima permitida: ' + Carro.velocidadeMaxima + 'km/s') 
          Carro.velocidade = 0
}

function Menu() {
   let OpcaoEscolhida
   do {
       OpcaoEscolhida = prompt('Você deseja: \n1-Acelerar. \n2-Parar.')
       switch (OpcaoEscolhida) {
           case '1':
               Acelerador()
               break
            case '2':
                Parar()
                break
            default:
                alert('Opção invalida!')
       }
   }while(OpcaoEscolhida != 2)
}

pegandoDados()
Menu()
