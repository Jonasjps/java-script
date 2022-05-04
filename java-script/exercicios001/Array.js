navesespaciaisengatadas = [
    ['Fenix', 8, true],
    ['Golias', 10, true],
    ['Helmet', 5, false],
    ['Elemental', 3, true],
    ['Darwin', 15, false]
]

let tripulaçãoMaiorque9 = navesespaciaisengatadas.filter(espaçonave => {
    return espaçonave[1] > 9
}).map(espaçonave => {
    return espaçonave[0]
})

let PlataformaHitchemandamento = navesespaciaisengatadas.findIndex(espaçonave => {
    return espaçonave[2] == false
})

let Navesemdestaque = navesespaciaisengatadas.map(espaçonave => {
    return espaçonave[0].toUpperCase()
})

let mensagem = 'Espaçonaves com mais de 9 tripulantes: ' + tripulaçãoMaiorque9.join(", ")
mensagem += '\nPlatarforma com processo de engate: ' + (PlataformaHitchemandamento + 1)
mensagem += '\nEspaço naves destacadas: ' + Navesemdestaque.join(", ")

alert(mensagem)