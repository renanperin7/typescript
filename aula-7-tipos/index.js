"use strict";
// 1 - generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(true));
console.log(showData(["teste"]));
// 2 - constraint em generic
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "porta", cor: "branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: "roupa" };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: "fusca", wheels: 4, engine: 1.0, color: "branco" };
const myPen = { name: "caneta bic", wheels: false, engine: false, color: "azul" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
// function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
//    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
// }
const server = {
    hd: "2TB",
    ram: "32GB"
};
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Renan",
    age: 22,
    hasDriveLicense: true
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
// console.log(showCharName("teste"))
// 6 - typeof type operator
const userName = "Renan";
const userName2 = "João";
const userName4 = "Roberto";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão de pouca carga'
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
