var arr = ['a', 'b', 'c'];
var iterator = arr.keys();



console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


/*

{ value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: undefined, done: true }

*/


