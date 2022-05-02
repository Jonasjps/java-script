var myfish = ['angel', 'clown', 'mandarin', 'surgeon'];

var removed = myfish.splice(2, 0, 'drum');
console.log(myfish)
console.log(removed)

removed = myfish.splice(3, 1);
console.log(myfish)
console.log(removed)

removed = myfish.splice(2, 1, 'trumpet')
console.log(myfish)
console.log(removed)

removed = myfish.splice(0, 2, 'parrot', 'anemone','blue')
console.log(myfish)
console.log(removed)

removed = myfish.splice(3, Number.MAX_VALUE)
console.log(myfish)
console.log(removed)