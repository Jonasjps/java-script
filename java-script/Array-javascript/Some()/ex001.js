


let maiorque10 = [ 2, 5, 8, 1, 4, 12];

let maior = maiorque10.some(element => element > 10);


console.log(maior);

// resposta = true

/*
Usando função Nomeada, tambem da o mesmo resultado.

let array = [ 2, 5, 8, 1, 4, 12];

let resultado = array.some(maiorque10)

function maiorque10 (maior) {
    return maior > 10;
}


console.log(resultado)
*/