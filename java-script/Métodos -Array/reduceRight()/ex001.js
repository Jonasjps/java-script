array = [0, 1, 2, 3, 4]

Novoarray = array.reduceRight(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
},0);

console.log(Novoarray);

//Resposta = 10