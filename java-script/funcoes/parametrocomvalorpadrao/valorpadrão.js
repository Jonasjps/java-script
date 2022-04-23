function Comprimentos(Nome, Mensagem="Olá") { //Nesse caso o meu segundo parâmetro recebe um valor padrão
    alert(Mensagem + ', ' + Nome)
}
Comprimentos('Jonas')
/*
(ARMADILHA DOS PARÂMETROS)

function Acelerar(Velocidade, Aceleração, unidade ="km/s") {
    let Novavelocidade = Velocidade + Aceleração
    alert('Nova velocidade: ' + Novavelocidade + unidade)
}
Acelerar(20,50 )
*/