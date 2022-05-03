let numeros = [6,3,4,100,2,5];

// positivo, negativo ou 0
 
console.log(numeros)
console.log(numeros.sort(
        (a,b) =>  a-b // forma simplificada
       /* if(a < b) return -1;
        if(a > b) return 1;
        return 0;*/
        
    
))

/*
RESPOSTA

antes = [ 6, 3, 4, 100, 2, 5 ]
depois = [ 2, 3, 4, 5, 6, 100 ]

*/