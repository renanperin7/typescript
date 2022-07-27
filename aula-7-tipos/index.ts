// 1 - generics
function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("testando generic"))
console.log(showData(true))
console.log(showData(["teste"]))

// 2 - constraint em generic
function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é: ${obj.name}`
}

const myObj = {name: "porta", cor: "branca"}
const otherProduct = {name: "Carro", wheels: 4, engine: 1.0}
const thirdObj = {price: 19.99, category: "roupa"}

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))
// console.log(showProductName(thirdObj))

// 3 - interface com generic
interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {name: "fusca", wheels: 4, engine: 1.0, color: "branco"}
const myPen: Pen = {name: "caneta bic", wheels: false, engine: false, color: "azul"}

console.log(myCar)
console.log(myPen)

// 4 - type parameters
// function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
//    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
// }

const server = {
    hd: "2TB", 
    ram: "32GB"
}

// console.log(getSomeKey(server, "ram"))
// console.log(getSomeKey(server, "teste"))

// 5 - keyof type operator
type Character = {name: string, age: number, hasDriveLicense: boolean}

type C = keyof Character

function showCharName(obj: Character, key: C): string {
    return `${obj[key]}`
}

const myChar: Character = {
    name: "Renan", 
    age: 22,
    hasDriveLicense: true
}

console.log(showCharName(myChar, "name"))
console.log(showCharName(myChar, "age"))
// console.log(showCharName("teste"))

// 6 - typeof type operator
const userName: string = "Renan"

const userName2: typeof userName = "João"

// const userName3: typeof userName = 14

type x = typeof userName

const userName4: x = "Roberto"

// 7 - indexed access type
type Truck = {km: number, kg: number, description: string}

type Km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão de pouca carga'
}

function showKm(km: Km) {
    console.log(`O veículo tem a km de: ${km}`)
}

showKm(newTruck.km)

const newCar = {
    km: 5000,
    kg: 1000
}

showKm(newCar.km)

// 8 - conditional expressions type
interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number: string

const someVar: myType = 5
// const someVar2: myType = "teste"

type myTypeA = Teste extends {showNumber(): number} ? string : boolean
type myTypeB = Teste extends {showName(): string} ? string : boolean

// 9 - template literals
type testA = "text"

type CustomType = `some ${testA}`

const testing: CustomType = "some text"
// const testing2: CustomType = "some text 2"

type a1 = "testando"
type a2 = "union"

type a3= `${a1}` | `${a2}`