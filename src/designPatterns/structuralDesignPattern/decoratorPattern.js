// Un Decorator Pattern permet d'ajouter une fonctionnalité à un objet

/*
Un Decorator Pattern est composé de trois acteurs :

* Le premier est leClient. C’est, ici, l’objet ou la fonction qui va appeler le Decorator. Dans le cas du projet, le client va être l’objetApp.
* Le deuxième est le Component. C’est l’objet sans la nouvelle fonctionnalité. Pour Filmo Patterns, le component estMovieCard. Ici, cet objet ne sait pas qu’il est “décoré” (on pourrait aussi dire qu’il est surchargé).
* Le troisième acteur est leDecorator. Cet objet va récupérer un objet existant, le surcharger (en lui ajoutant une nouvelle fonctionnalité), et va le retourner.
*/

// Permet de rapidement ajouter de nouvelles fonctionnalités à un objet sans avoir à le surcharger ou à le complexifier
// Antippatern : surcharger un decorator qui surcharge un decorator et ainsi de suite

class Movie {
    constructor(title, duration) {
        this._title = title
        this._duration = duration
    }
 
    createMovieTitle() {
        return `
            <h1 class="movie-title">${this._title}</h1>
        `
    }
 }
 
 function movieWithAgeLimit(movie, ageLimit) {
    // Grâce au prototypage, je peux facilement ajouter de nouvelles propriétés et méthodes sur un objet existant
    movie.ageLimit = ageLimit
 
    movie.canSeeMovie = () => {
        console.log(`Vous devez avoir plus de ${movie.ageLimit} pour voir ${movie._title}`)
    }
 
    // Ici le return est important, c'est ce qui me permet de retourner une version modifiée de l'objet Movie
    return movie
 }
 
 // J'instancie un objet Movie "simple"
 const MovieWithoutAgeLimit = new Movie('Batman Returns', 130)
 
 // J'instancie un objet Movie décoré
 const MovieWithAgeLimit = movieWithAgeLimit(new Movie('Alien', 120), 16)

 // movieWithAgeLimit permet rapidement d'ajouter de nouvelles fonctionnalités à un objet existant