// string, boolean, number, ...
let x: number = 10;

x = 16;

console.log(x);

// inferencia x annotation 
let y = 16;
// y = 'teste'

let z : number = 16;

// tipos básicos
let firstName: string = 'Renan'
let agr: number = 22
const isAdmin: boolean = true

// String != string

console.log(typeof firstName);

firstName = "joão"

console.log(firstName)

// object 
const myNumbers: number[] = [1, 2, 3]

console.log(myNumbers)
console.log(myNumbers.length)
// console.log(myNumbers.toUpperCase())
console.log(firstName.toUpperCase())
myNumbers.push(5)

console.log(myNumbers)

// tuplas -> tuple
let myTuple: [number, string, string[]]

myTuple = [5, 'teste', ["a", "b"]]

// object literals -> {prop: value}
const user: {name: string, age: number} = {
    name: "Renan",
    age: 22
}

console.log(user)

console.log(user.name)

// user.job = "programador"

// any
let a: any = 0

a = "teste"
a = true
a = []

// union type
let id: string | number = "10"

id = 200

// id = true
// id = []

// type alias
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = "00001"
const shirId: myIdType = 123

// enum 
// tamanho de roupas (size: medio, size: pequeno)
enum Size {
    P = "pequeno",
    M = "medio",
    G = "grande"
}

const camisa = {
    name: 'Camisa gola V',
    size: Size.G
}

console.log(camisa)

// literal types
let teste: "autenticado" | null

// teste = "outrovalor"
teste = "autenticado"
teste = null

// funcoes 
function sum(a:number, b:number) {
    return a + b
}

console.log(sum(12, 12))
// console.log(sum("12", 12))

function sayHelloTo(name: string):string {
    return `Hello ${name}`
}

console.log(sayHelloTo("Renan"))

function logger(msg: string):void {
    console.log(msg)
}

logger("teste")

function greeting(name: string, greet?: string) {
    if(greet) {
        console.log(`Ola ${greet} ${name}`)
        return;
    }
    console.log(`Ola ${name}`)
} 

greeting("Renan")
greeting("Renan", "Sir")

// interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers (nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}

console.log(sumNumbers({n1:1, n2:2}))

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2
}

const someNumbers:MathFunctionParams = {
    n1:5, 
    n2:10
}

console.log(multiplyNumbers(someNumbers))

// narrowing
// checagem de tipos
function doSomething(info: number | boolean) {
    if(typeof info === "number") {
        console.log(`o numero é ${info}`)
        return
    }
    console.log("nao foi passado numero")
}

doSomething(5)
doSomething(true)

// generics
function showArraysItens<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [a, 2, 3]
const a2 = ["a", "b", "c"]

showArraysItens(a1)
showArraysItens(a2)

// classes
class User {
    name
    role
    isApproved

    constructor(name: string, role:string, isApproved:boolean) {
        this.name = name
        this.role = role
        this. isApproved = isApproved
    }

    showUserName() {
        console.log(`O nome do usuario é ${this.name}`)
    }

    showUserRole(canShow: boolean) {
        if(canShow) {
            console.log(`${this.role}`)
            return
        }
        console.log("informaçao restrita")
    }
}

const zeca = new User("Zeca", "admin", true)

console.log(zeca)

zeca.showUserName()

zeca.showUserRole(false)

//interface em classes
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand 
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const fusca = new Car("VW", 4)

fusca.showBrand()

//heranca
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("audi", 4, 2.0)

console.log(a4)

a4.showBrand()

// decorators

// constructor decorator
function BaseParameters() {
    return function<T extends {new(...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random()
            createdAt = new Date()
        }
    }
}

@BaseParameters()
class Person {
    name

    constructor(name: string) {
        this.name = name
    }
}

const sam = new Person("Sam")

console.log(sam)
