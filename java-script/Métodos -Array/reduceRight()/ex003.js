var numeros = [[0, 1], [2, 3], [4, 5]];

novoarray = numeros.reduceRight((a,b) => {return a.concat(b);}, []);

console.log(novoarray);

//resposta = [ 4, 5, 2, 3, 0, 1 ]