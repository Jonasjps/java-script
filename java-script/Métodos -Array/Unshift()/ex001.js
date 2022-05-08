var array = [1, 2, 3, 4];

console.log(array)

array.unshift(0);

console.log(array);

array.unshift(-2,-1),

console.log(array)

array.unshift([-3]);

console.log(array);

/*
RESPOSTA

[ 1, 2, 3, 4 ]
[ 0, 1, 2, 3, 4 ]
[-2, -1, 0, 1, 2,  3, 4]
[[ -3 ], -2, -1, 0, 1,  2, 3, 4]

*/