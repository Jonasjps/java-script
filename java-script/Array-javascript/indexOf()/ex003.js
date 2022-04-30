function atualizarColecaoVegetais (Vegetais, vegetal) {
    if ( Vegetais.indexOf(vegetal) === -1) {
        Vegetais.push(vegetal);
        console.log('Nova coleção de vegetais é: ' + Vegetais);
    } else if (vegetais.indexOf(vegetal) > -1) {
        console.log(vegetal + ' já existe na coleção de vegetais. ');
    }
}

var vegetais = ['Batata', 'Tomate', 'Pimenta', 'Pimentão'];

atualizarColecaoVegetais(vegetais, 'Cenoura');