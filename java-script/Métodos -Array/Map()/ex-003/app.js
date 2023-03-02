 products = [
    { name: 'Mouse sem Fio', price: 30},
    { name: 'Pen Drive', price: 25},
    { name: 'Cartucho de Tinta', price: 50},
    { name: 'Suporte Ergonômico para Notebook', price: 23},
    { name: 'Repetidor de sinal wi-fi', price: 44}
]

const NewPrices = products.map((product) => {
    if(product.price >= 30) {
        return {name: product.name, price: product.price / 2}
    }
    return product
})

console.log(products)
console.log(NewPrices)