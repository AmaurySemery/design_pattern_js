// L’Observer Pattern crée un objet qui va notifier d’autres objets de votre code au moment de changements d’état.

/*
Un Observer Pattern est composé des acteurs suivants :
* Vous avez le Sujet. Ce dernier maintient la liste des observateurs. Il permet à des observateurs de s’abonner ou de se désabonner. Une fois que l’état du sujet change, grâce à ce système d’abonnement, les observateurs vont être notifiés que l’état du sujet a changé.
* Puis, vous avez le ou les Observers. Lorsqu’ils vont être notifiés d’un changement d’état du sujet, ils vont pouvoir déclencher un script. Ici, il est important de voir qu’il peut y avoir plusieurs observateurs différents pour un même sujet.
*/

// Quand on parle d’Observers, on dit souvent qu’ils permettent de “découpler” une architecture 
// Plutôt que de faire grossir un objet en lui ajoutant une nouvelle fonctionnalité, en utilisant un Decorator par exemple, on va plutôt créer des objets qui vont communiquer entre eux : on aurait donc plein de “petits” objets qui feront des tâches spécifiques.

class Subject {
    constructor() {
        this._observers = []
    }

    subscribe(observer) {
        this._observers.push(observer)
    }

    unsubscribe(observer) {
        this._observers = this._observers.filter(obs => obs !== observer)
    }

    fire(productName) {
        this._observers.forEach(observer => observer.addToWishList(productName))
    }
}

class WishList {
    constructor() {
        this.products = []
    }

    addToWishList(productName) {
        console.log(`Add the product ${productName} to the wishlist`)
        this.products.push(productName)
    }
}


class Mailer {
    constructor(email) {
        this._email = email
    }

    addToWishList(productName) {
        console.log(`Send an email to ${this._email} with the product name ${productName}`)
    }
}

const Sub = new Subject()

const Mail = new Mailer('email@example.com')
const WL = new WishList()

Sub.subscribe(Mail)
Sub.subscribe(WL)


Sub.fire('Terminator')