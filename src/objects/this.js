/*
Dans le snippet de code qui suit,  this  correspond au contexte d'exécution de la classe. 
Autrement dit, c’est ce qui me permet de récupérer l’attribut  firstName  dans la méthode  getFullName. 
Si vous oubliez ce mot clé, vous ne serez pas capable de communiquer avec les méthodes et propriétés composant votre classe.
*/

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
 
 // Retourne mon prénom et mon nom
 Thomas.getFullName()
 
 // Dit bonjour
 Thomas.sayHello()

 // Plus de ressources sur this ici : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/this