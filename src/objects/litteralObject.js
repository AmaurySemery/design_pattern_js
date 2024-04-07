// L'objet littéral
const Me = {
    firstName: "Thomas",
    lastName: "Dimnet",
    getFullName: () => `${Me.firstName} ${Me.lastName}`,
    sayHello: () => console.log("Hello")
 }
 
 // Retourne mon prénom et mon nom
 console.log(Me.getFullName())
 
 // Dit bonjour
 Me.sayHello()