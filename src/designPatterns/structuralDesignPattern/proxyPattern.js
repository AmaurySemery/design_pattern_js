/*
Un Proxy Pattern est composé des acteurs suivants :

* Le Client : c’est la fonction ou l’objet qui va appeler le proxy.
* Le Proxy qui va être l’objet chargé de faire la communication entre le client et le Sujet.
* Le Sujet qui va être l’objet appelé par le proxy. 
*/

// Un proxy est un composant logiciel qui joue le rôle d’intermédiaire entre deux hôtes pour faciliter ou surveiller leurs échanges. Un hôte peut être un objet (comme c’est le cas dans notre projet), mais cela peut aussi être un serveur informatique.
// Dès lors qu’un objet est un peu complexe à manipuler, nous pouvons mettre en place un proxy pour faciliter sa manipulation.

/*
L’avantage d’utiliser un Proxy Pattern pour la gestion du cache, c’est que nous allons avoir des gains de performance très importants :

* Lors de la première requête auprès de notre librairie, le temps de réponse sera le même (1 seconde), sauf que nous allons stocker le résultat de la fonction dans notre proxy.
* Lors de la deuxième requête, le proxy va regarder si le résultat de la fonction a été stocké (ce qui sera le cas). Il va alors retourner directement le résultat plutôt que de rappeler à nouveau la fonction de la librairie. Le temps de réponse sera cette fois instantané !
*/

class GeoCoder {
    static ADDRESSES = [
        {
            name: "Amsterdam",
            latLng: "52.3700° N, 4.8900° E"
        },
        {
            name: "London",
            latLng: "51.5171° N, 0.1062° W"
        },
        {
            name: "Paris",
            latLng: "48.8742° N, 2.3470° E"
        },
        {
            name: "Berlin",
            latLng: "52.5233° N, 13.4127° E"
        }
    ]

    getLatLng(address) {
        console.log("Get from server")
        return GeoCoder.ADDRESSES.filter(add => add.name === address)[0]
    }
}

class ProxyGeoCoder {
    constructor() {
        this.cache = []
        this.GeoCoder = new GeoCoder()
    }

    getLatLng(address) {
        const cachedData = this.cache.filter(cachedAddress => cachedAddress.name === address)[0]

        if (cachedData) {
            console.log("Get from cache")
            return cachedData
        }

        const data = this.GeoCoder.getLatLng(address)
        this.cache.push(data)

        return data
    }
}

// Location
const location = "Paris"

const Proxy = new ProxyGeoCoder()

const firstResult = Proxy.getLatLng(location)
console.log(firstResult)

const secondResult = Proxy.getLatLng(location)
console.log(secondResult)