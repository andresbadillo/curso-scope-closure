var firstName; // undefined
firstName = "Andrés";
console.log(firstName);

var lastName = "Badillo"; // Declarar y asignar
lastName = "Bonilla"; // Reasignar
console.log(lastName);

var secondName = "David"; // Declarar y asignar
var secondName = "Esteban"; // Redeclarar y Reasignar
console.log(secondName);

// let

let fruit = "Apple"; // Declarar y asignar
fruit = "Kiwi"; // Reasignar
console.log(fruit);

let fruit = "Bananna"; // No se puede redeclarar

//  const

const animal = "Dog"; // Declarar y asignar
animal = "Cat"; // No se puede reasignar
const animal = "Snake"; // No se puede redeclarar
console.log(animal);

const vehicles = [];
vehicles.push("audi");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);