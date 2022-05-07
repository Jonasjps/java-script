var arr4 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
novoarray = arr4.flat(Infinity);

console.log(arr4);

console.log(novoarray);

//resposta=[1, 2, 3, 4, 5, 6, 7, 8]