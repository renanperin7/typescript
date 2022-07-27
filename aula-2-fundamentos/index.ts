// 1 - numbers
let x:number = 10

console.log(x)

x = 16

console.log(typeof x)

const y:number = 15.4124124

console.log(typeof y)

console.log(y)

console.log(y.toPrecision(3))

// 2 - string

const firstName = "Renan"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Perin"

fullName = firstName + " " + lastName

console.log(fullName)

console.log(typeof fullName)

// 3 - boolean

let a: boolean = false

console.log(a)
console.log(typeof a)


// desafio

const n1:number = 40

const numberToString = n1.toString()

const printMyNumber:string = `Eu vou imprimir meu numero ${numberToString}`

console.log(printMyNumber)