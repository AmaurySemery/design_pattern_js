/*
Un Adapter Pattern est composé de trois acteurs :

* Le client qui correspond à l’objet (ou plus généralement à l’élément) qui réalise la requête. Dans le cas de notre projet fil rouge, le client est notre objet   FilterForm  .
* L’adapter est l’objet qui va être utilisé par le client. Le client va instancier l’adapter, et c’est l’adapter qui sera chargé de faire les modifications pour pouvoir communiquer avec l’adapté.
* L’adapté qui va être appelé par l’adapter. Ici, c’est bien l’adapter qui se charge de faire la transposition entre l’ancienne librairie et la nouvelle.
*/

// Dès que vous réalisez une mise à jour vers une nouvelle API, vous pouvez passer par un Adapter.
// De cette manière, le code est modifié avec une solution propre sans avoir à réécrire une grosse partie.
// Il suffit  d'ajouter un nouvel objet qui sera chargé de faire la traduction entre deux objets aux interfaces incompatibles.

class OldCalculator {
    constructor() {
        this.operations = function(number1, number2, operation) {
            switch (operation) {
                case 'add':
                    return number1 + number2
                case 'sub':
                    return number1 - number2
                default:
                    return NaN
            }
        }
    }
}

class NewCalculator {
    static add(number1, number2) {
        return number1 + number2
    }

    static sub(number1, number2) {
        return number1 - number2
    }
}

class AdaptedCalculator {
    constructor() {
        this.operations = function(number1, number2, operation) {
            switch (operation) {
                case 'add':
                    return NewCalculator.add(number1, number2)
                case 'sub':
                    return NewCalculator.sub(number1, number2)
                default:
                    return NaN
            }
        }
    }
}

// Old Calc
const Calculator = new OldCalculator()
console.log(Calculator.operations(10, 5, 'add'))

// New Calc
console.log(NewCalculator.add(10, 5))
console.log(NewCalculator.sub(10, 5))

// Adapted Calc
const AdaptCalculator = new AdaptedCalculator()
console.log(AdaptCalculator.operations(10, 5, 'add'))