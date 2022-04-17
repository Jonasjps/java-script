function media(n1, n2) {
    var nota1 = n1;
    var nota2 = n2; 
    var media = (nota1 + nota2) / 2;
    //console.log(media)
    return media;
}

var res1 = media(8, 9);
var res2 = media(8, 5);

console.log(`${res1} e ${res2}`)