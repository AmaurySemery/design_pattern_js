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