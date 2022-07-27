// 1 - exemplo decorator
function myDecorator() {

    console.log("iniciando decorator!")
    
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executando decorator")
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    }
}

class myClass {

    name!: string

    @myDecorator()
    testing() {
        console.log("terminan a execução do método!")
    }
}

const myObj = new myClass()

myObj.testing()

// 2 - multiplos decorators
function a() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("executou a.")
    }
}

function b() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("executou b.")
    }
}

function c() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("executou c.")
    }
}
class MultipleDecorators {
    @a()
    @b()
    @c()
    testing() {
        console.log("terminando exec")
    }
}

const mult = new MultipleDecorators

mult.testing()

// 3 - class decorator
function classDec(constructor: Function) {
    console.log(constructor.name)
    if(constructor.name === "User") {
        console.log("criando usuário")
    }
}

@classDec
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

const renan = new User("Renan")

console.log(renan)

// 4 - method decorator
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value
    }
}

class Machine {
    name

    constructor(name: string) {
        this.name = name
    }

    @enumerable(false)
    showName() {
        console.log(this)
        return `O nome da máquina é: ${this.name}`
    }
}

const trator = new Machine("Trator")

console.log(trator.showName())

// 5 - acessor decorator
class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName() {
        return `Nome do monstro: ${this.name}`
    }

    @enumerable(true)
    get showAge() {
        return `Idade do monstro: ${this.age}`
    }
}

const charmander = new Monster("Charmander", 18)

console.log(charmander)

// 6 - property decorator
// 1 - 00001
function formatNumber() {
    return function(target: any, propertyKey: string) {

        let value: string

        const getter = function() {
            return value
        }

        const setter = function(newVal: string) {
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })
    }
}

class ID{
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id
    }
}

const newItem = new ID("1")

console.log(newItem)
console.log(newItem.id)

// 7 - exemplo real com class decorator
function createdDate(created: Function) {
    created.prototype.createdAt = new Date()
}

@createdDate
class Book {
    id
    createdAt?: Date

    constructor(id: number) {
        this.id = id
    }
}

@createdDate
class Pen {
    id

    constructor(id: number) {
        this.id = id
    }
}

const newBook = new Book(12)

const pen = new Pen(6)

console.log(newBook)
console.log(pen)

console.log(newBook.createdAt)

// 8 - exemplo real method decorator
function checkIfUserPosted() {

    return function(target: object, kwy: string | symbol, descriptor: PropertyDescriptor) {
        const childFunction = descriptor.value
        // console.log(childFunction)
        descriptor.value = function(...args: any[]) {
            if(args[1] === true) {
                console.log("vc ja postou")
                return null
            } else {
                return childFunction.apply(this, args)
            }
        }

        return descriptor
    }
}

class Post {
    alreadyPosted = false

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted= true
        console.log(`Post do usuário: ${content}`)
    }
}

const newPost = new Post()

newPost.post("meu primeiro post!", newPost.alreadyPosted)

newPost.post("meu segundo post!", newPost.alreadyPosted)

newPost.post("meu terceiro post!", newPost.alreadyPosted)

// 9 - exemplo real com property decorator
function Max(limit: number) {

    return function(target: Object, propertyKey: string) {

        let value: string

        const getter = function(){
            return value
        }

        const setter = function(newVal: string) {
            if(newVal.length > limit) {
                console.log(`O valor deve ter no maximo ${limit} digitos`)
                return
            } else {
                value = newVal
            }
        }

        Object.defineProperty(target, propertyKey, {
            get: getter, 
            set: setter
        })
    }
}

class Admin {
    @Max(10)
    username 

    constructor(username: string) {
        this.username = username
    }
}

let pedro = new Admin("pedroadmin12345")
let lee =  new Admin("lee")

console.log(lee)