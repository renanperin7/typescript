"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tenis", price: 129.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mai: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: "renanperin@hotmail.com", role: "Admin" };
const u2 = { email: "renan@hotmail.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const renan = {
    name: "Renan",
    age: 22
};
console.log(renan);
const shinra = {
    name: "Shinra",
    age: 18,
    superpowers: ["ShinraBanSho", "LightSpeed"]
};
console.log(shinra);
console.log(shinra.superpowers[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - readonly array
let myArray = ["maçã", "laranja", "banana"];
// myArray[3] = "mamao"
console.log(myArray);
myArray.forEach((item) => {
    console.log("fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
//number[]
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6]
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]
console.log(myNumberArray);
const anotherUser = ["Renan", 22];
console.log(anotherUser[0]);
anotherUser[0] = "joão";
console.log(anotherUser[0]);
// anotherUser[1] = "teste"
// 9 - tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
