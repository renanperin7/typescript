// 1 - Type guard
function sum(a: number | string, b: number | string) {

    if(typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b))
    } else if(typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    } else {
        console.log("Impossivel realizar essa operação!")
    }

}

sum("4","2")
sum(4,2)
sum("4",2)

// 2 - checando se o valor existe
function operations(arr: number[], operation?: string | undefined) {

    if(operation) {

        if(operation === "sum") {
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        } else if (operation === "multiply") {   
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }

    } else {
        console.log("Por favor, defina uma operação")
    }
}


operations([1,2,3])
operations([1,2,3], "sum")
operations([1,2,3], "multiply")

// 3 - instance of
class User {
    name

    constructor(name:string) {
        this.name = name
    }

}

class SuperUser extends User {
    
    constructor(name:string) {
        super(name)
    }

}

const jhon = new User("jhon")
const paul = new SuperUser("paul")

console.log(jhon)
console.log(paul)

function userGreeting(user:Object) {

    if(user instanceof SuperUser){
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
    } else if(user instanceof User){
        console.log(`Olá ${user.name}`)
    }

}

userGreeting(jhon)
userGreeting(paul)

// 4 - operador in
class Dog {
    name
    breed 

    constructor(name:string, breed?: string) {
        this.name = name
        if(breed) {
            this.breed = breed
        }
    }
}

const turca = new Dog("Turca")
const bob = new Dog("Bob", "Pastor Alemão")

function showDogDetails(dog: Dog){

    if("breed" in dog) {
        console.log(`O cachorro ${dog.name} é da raça ${dog.breed}`)
    } else {
        console.log(`O cachorro ${dog.name} é um SRD`)
    }

}

showDogDetails(turca)
showDogDetails(bob)

// desafio 
type Review = number | boolean

function showUserReview(review: Review) {

    if(!review) {
       console.log("Voce nao avalior o produto")
       return
    }

    console.log(`A nota que voce deu foi: ${review}, obrigado!`)

}

showUserReview(false)
showUserReview(5)
showUserReview(2)