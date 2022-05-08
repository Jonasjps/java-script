var array = [2, 5, 9, 2];
console.log(array);

Novoarray = array.lastIndexOf(2);
console.log(Novoarray);

Novoarray = array.lastIndexOf(7);
console.log(Novoarray);

Novoarray = array.lastIndexOf(2, 3);
console.log(Novoarray);

Novoarray = array.lastIndexOf(2, 2);
console.log(Novoarray);

Novoarray = array.lastIndexOf(2, -2);
console.log(Novoarray);

Novoarray = array.lastIndexOf(2, -1);
console.log(Novoarray);

/*

3
-1
3
0
0
3

*/