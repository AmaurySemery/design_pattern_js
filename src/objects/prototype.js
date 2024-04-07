function Me(firstName, lastName) {
    this._firstName = firstName
    this._lastName = lastName  
 }
 
 Me.prototype.getFullName = function() {
    return `${this._firstName} ${this._lastName}`
 }
 
 Me.prototype.sayHello = function() {
    console.log("Hello")
 }
 
 const Thomas = new Me("Thomas", "Dimnet")
 
 // Retourne mon prénom et nom
 console.log(Thomas.getFullName())
 
 // Dit bonjour
 Thomas.sayHello()