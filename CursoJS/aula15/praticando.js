let num = [5, 8, 4, 9, 7]
num.sort()
/*

num.push(10)

console.log(num)
//console.log(`Aposição é ${num.indexOf(7)}`)
console.log(`O vetor tem ${num.length} posições!`)

console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])

for(let pos = 0 ; pos < num.length ; pos ++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

for(let pos in num) {//SIMPLIFICANDDO MEU CODIGO...
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}