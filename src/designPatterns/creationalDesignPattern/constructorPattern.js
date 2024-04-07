/*
Un Constructor Pattern est souvent utilisé pour faciliter la création et/ou le formatage d’objets. Il sert pour :
Formater des données. Ces données peuvent provenir d’une API, d’un Local Storage ou d’un Session Storage.
Créer des objets.
*/

// Le Parent
class Movie {
    constructor(data) {
        this._title = data.title
        this._duration = data.duration
    }
 
    get title() {
        return this._title
    }
 
    get duration() {
        return this._duration
    }
 }
 
  
 const dataExample = {
    title: "Titre de film",
    duration: "1h20"
 }
 
 // Le "New Object"
 const MovieExample = new Movie(dataExample)

 /*
 Les getters sont aussi appelés des accesseurs. 
 Il existe deux types d’accesseurs : les getters et les setters. 
 Les getters permettent de récupérer les valeurs des propriétés d’instance. 
 Par exemple,  get title  me permet de récupérer la propriété  title  (ici,  this._title  ) contenue dans mon objet. 
 Les setters permettent de modifier cette propriété.
 */