//Utilizando fuções em objetos

let spaceship = {
    name: 'Demeter', 
    type: 'Extração',
    maxCrew: 20,
    turnOn: function() {
        alert('Preparando propulsão')
        alert('Ligando computador de bordo')
        alert(this.name)
    }
}

spaceship.velocitty = 0
spaceship.speedUp = function( acceleration) {
    this.velocitty += acceleration
}

console.log(spaceship.turnOn());

spaceship.speedUp(10);

console.log(spaceship);