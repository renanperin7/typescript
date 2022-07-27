// 1 - tipo de objeto para função com interface
interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if(product.isAvailable) {
        console.log("O produto está disponível")
    }
}

const shirt: Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
}

showProductDetails(shirt)
showProductDetails({name: "Tenis", price: 129.99, isAvailable: false})

// 2 - interface com propriedades opcionais
interface User {
    email: string,
    role?: string
} 

function showUserDetails(user: User) {
    console.log(`O usuário tem o e-mai: ${user.email}`)

    if(user.role) {
        console.log(`A função do usuário é: ${user.role}`)
    }
}

const u1: User = {email: "renanperin@hotmail.com", role: "Admin"}
const u2: User = {email: "renan@hotmail.com"}

showUserDetails(u1)
showUserDetails(u2)

// 3 - readonly
interface Car {
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)

// fusca.wheels = 5

// 4 - index signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

// coords.z = "teste"

// 5 - extending interfaces
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const renan: Human = {
    name: "Renan",
    age: 22
}

console.log(renan)

const shinra: SuperHuman = {
    name: "Shinra",
    age: 18,
    superpowers: ["ShinraBanSho", "LightSpeed"]
}

console.log(shinra)

console.log(shinra.superpowers[1])

// 6 - intesection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold", 
    type: "Shotgun",
    caliber: 12
}

console.log(arnold)

console.log(arnold.caliber)

// 7 - readonly array
let myArray: ReadonlyArray<string> = ["maçã", "laranja", "banana"]

// myArray[3] = "mamao"

console.log(myArray)

myArray.forEach((item) => {
    console.log("fruta: " + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)

// 8 - tuplas
type fiveNumbers = [number, number, number, number, number]

//number[]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6]
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["Renan", 22]

console.log(anotherUser[0])

anotherUser[0] = "joão"

console.log(anotherUser[0])

// anotherUser[1] = "teste"

// 9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
    // numbers[0] = 10
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1, 2])