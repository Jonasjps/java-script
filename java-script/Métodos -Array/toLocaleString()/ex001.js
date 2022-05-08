var numero = 1337;
var data = new Date();
var meuarray = [numero, data, 'foo'];

var resultado = meuarray.toLocaleString();

console.log(resultado);

//resposta = '1.337,08/05/2022 20:26:42,foo'