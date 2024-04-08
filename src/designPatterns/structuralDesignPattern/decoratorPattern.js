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