const frutas = ['banana', 'apple', 'grapes', 'mango', 'melancia'];

 const filterItems = (query) =>  frutas.filter(el =>  el.toLowerCase().indexOf(query.toLowerCase()) > -1)


console.log(filterItems('ap'))
console.log(filterItems('an'))

/*
RESPOSTA
 
[ 'apple', 'grapes' ]
[ 'banana', 'mango', 'melancia' ]

*/