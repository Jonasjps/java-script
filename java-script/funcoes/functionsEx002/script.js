function Desacelerar(Velocidade, Printer) {
    let Diminuir = 20

    while(Velocidade > 0) {
        Printer(Velocidade)
        Velocidade -= Diminuir
    }
    alert('Nave parada. As comportas podem ser abertas.')

}

let VelocidadedaNave = 150

Desacelerar(VelocidadedaNave, Velocidade => {
    console.log('Velocidade Atual: ' + Velocidade)
})
