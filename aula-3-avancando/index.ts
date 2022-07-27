// 1 - arrays
let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

// numbers = "teste"

const nomes: string[] = ["renan", "joao"]

// nomes.push(4)

// 2 - outra sintaxe array

const nums: Array<number> = [100, 200, 300]

nums.push(90)

console.log(nums)

// nums.push("teste")

console.log(nums[0])

// 3 - any

const arr1: any = [1, "teste", true, [], {nome:"Renan"}]

console.log(arr1)

arr1.push([1, 2 ,3])

console.log(arr1)

// 4 - parametros tipados

function soma(a:number, b:number) {
    console.log(a + b)
}

soma(4, 5)

// soma("a", "b")

// 5 - retorno de função

function greeting(name: string): string {
    return `Olá ${name}`
}

console.log(greeting("Renan"))

// 6 - função anonima

setTimeout(function() {

    const sallary: number = 1000
    
    // console.log(parseFloat(sallary))

    // console.log(sallary)

}, 2000)

// 7 - tipos de objeto

function passCoordinates(coord: {x:number, y:number}) {
    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 45.2}

passCoordinates(objCoord)
// passCoordinates({nome: 1, sobrenome: 2})

const pessoaObj:{nome: string, surname: string} = {nome: "Renan", surname: "Perin"}

// 8 - props opcionais

function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    if (c) {
        console.log("C: " + c)
    }
}

showNumbers(1, 2 , 3)
showNumbers(1, 2)
// showNumbers(4)

// 9 - validando argumento opcional

function advancedGreeting(firstName: string, lastName?: string) {

    if(lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }

    return `Olá, ${firstName}, tudo bem?`

}

console.log(advancedGreeting("Renan", "Perin"))
console.log(advancedGreeting("João"))

// 10 - union type

function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance("500")
// showBalance(true)

const arr2: Array<number | string | boolean> = [1, "teste", true]

// 11 - avancando em union types

function showUserRole(role: boolean | string) {
    if(typeof role === "boolean") {
        return "usuario nao aprovado"
    }

    return `A funcao do usuario é: ${role}` 
}

console.log(showUserRole(false))
console.log(showUserRole("adimn"))

// 12 - type alias

type ID = string | number

function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("200")
showId(123)

// 13 - interface

interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj: Point = {
    x:10,
    y:15, 
    z:50
}

showCoords(coordObj)

// 14 - interface x type alias

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Renan", age: 22}

console.log(somePerson)

type personType = {
    name: string
}

// type personType = {
//    agr: number
// }

// 15 - literal types

let test: "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center"){
    console.log(`A direção é: ${direction}`)
}

showDirection("left")
// showDirection("top")

// 16 - non null assertion operator

const p = document.getElementById("some-p")

console.log(p!.innerText)

// 17 - bigint

let n: bigint 

// n = 1

n = 1000n

console.log(n)

console.log(typeof n)

console.log(n + 100n)

// 18 - symbol

let symbolA: symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)

