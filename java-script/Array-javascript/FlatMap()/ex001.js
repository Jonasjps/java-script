var arr1 = [1, 2, 3, 4];

Novoarray = arr1.map(x => [x * 2]);

console.log(Novoarray);

Novoarray = arr1.flatMap(x => [x * 2]);

console.log(Novoarray);

Novoarray = arr1.flatMap(x => [[x * 2]]);

console.log(Novoarray);

/*
        Resposta

[ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]

[ 2, 4, 6, 8 ]

[ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]


*/