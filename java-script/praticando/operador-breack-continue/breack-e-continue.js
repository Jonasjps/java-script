// operrador break

let score = [10, 13, 20, 0, 34, 100, 50]

for (let c = 0; c < score.length; c++) {
    if (score[c] === 0) {
        continue
    } 

    console.log(`Sua pontuação: ${score[c]}`)
   

    if (score[c] === 100) {

        console.log('Parabens você atingio 100 pontos')
        break
    }


}