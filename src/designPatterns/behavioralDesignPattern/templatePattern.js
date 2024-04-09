/*
Un Template Pattern est composé des éléments suivants :
* Un acteur Template. Cet acteur peut réaliser une série d’étapes, par exemple envoyer ou recevoir des données d’une API ;
* Des objets qui héritent de l’acteur Template. C’est dans ces objets que nous allons réaliser l’implémentation de l’algorithme.
*/

// Le Template Pattern permet de faciliter la création de plusieurs algorithmes ayant une structure similaire mais des implémentations différentes.

// Vehicule sera notre classe abstraite. On s'en servira uniquement pour l'héritage
class Vehicule {
    constructor(name, type) {
        this._name = name
        this._type = type
    }

    description() {
        console.log(`${this._name} - ${this._type}`)

        this.getGas()
    }
}

// Par contre, on pourra instancier un objet Car
class Car extends Vehicule {
    constructor(name, type) {
        super(name, type)
    }

    getGas() {
        return "Pour faire le plein, je dois arrêter le moteur, sortir de la voiture et ouvrir le réservoir d'essence"
    }
}

// Et un objet Motorcycle
class Motorcycle extends Vehicule {
    constructor(name, type) {
        super(name, type)
    }

    getGas() {
        return "Pour faire le plein, je peux rester sur la moto et ouvrir le réservoir d'essence"
    }
}

const Punto = new Car('Fiat Punto', 'Car')
console.log(Punto.getGas())

const Cbr = new Motorcycle('CBR 650RR', 'Motocycle')
console.log(Cbr.getGas())