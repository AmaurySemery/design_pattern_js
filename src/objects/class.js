class Me {
    constructor(firstName, lastName) {
        this._firstName = firstName
        this._lastName = lastName
    }
 
    getFullName() {
        return `${this._firstName} ${this._lastName}`
    }
 
    sayHello() {
        console.log("Hello")
    }
 }
 
 const Thomas = new Me("Thomas", "Dimnet")
 
 // Retourne mon prénom et nom
 console.log(Thomas.getFullName())
 
 // Dit bonjour
 Thomas.sayHello()