var frutas = ['banana', 'apple', 'grapes', 'mango', 'melancia'];

function filterItems(query) {
    return frutas.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}

console.log(filterItems('ap'))
console.log(filterItems('an'))