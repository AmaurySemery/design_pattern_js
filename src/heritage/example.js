/*
class Movie {
    constructor(title, releasedDate, duration) {
        this._title = title
        this._releasedDate = releasedDate
        this._duration = duration
    }
}

class TvShow {
    constructor(title, numberOfEpisodePerSeason, numberOfSeasons) {
        this._title = title
        this._numberOfEpisodePerSeason = numberOfEpisodePerSeason
        this._numberOfSeasons = numberOfSeasons
    }
}
*/

// L’héritage permet, lors de la déclaration d’une nouvelle classe ou d’un nouvel objet, d’y inclure les caractéristiques (telles que les propriétés et méthodes) d’une autre classe.
// La classe Media ci-dessus contiendra la fonctionnalité pour lancer le film ou la série via la méthode play

class Media {
    constructor(url) {
        this._url = url
    }

    play() {
        /**
         * Ici, je ne lance pas le film, je fais simplement
         * un console.log mais le résultat est le même ;)
         */
        console.log(this._url)
    }
}

// Adaptation des classes de bases pour intégrer l'héritage de Media
// L'utilisation du mot clé extends permet aux classes Movie et TvShow de récupérer la fonctionnalité play
// super() permet de passer les paramètres de l'URL à la classe Media

class Movie extends Media {
    constructor(url, title, releasedDate, duration) {
        super(url)
        this._title = title
        this._releasedDate = releasedDate
        this._duration = duration
    }
 }
 
 class TvShow extends Media {
    constructor(url, title, numberOfEpisodePerSeason, numberOfSeasons) {
        super(url)
        this._title = title
        this._numberOfEpisodePerSeason = numberOfEpisodePerSeason
        this._numberOfSeasons = numberOfSeasons
    }
 }

// // Ici j'instancie quelques classes de films
// const PredatorMovie = new Movie("Predator", 1987, 107)
// const TerminatorMovie = new Movie("Terminator", 1984, 107)
// const AlienMovie = new Movie("Alien", 1979, 117)

// // Ici j'instancie quelques séries
// const FriendsTvShow = new TvShow("Friends", 23, 10)
// const ScrubsTvShow = new TvShow("Scrubs", 20, 9)
// const CougarTownTvShow = new TvShow("Cougar Town", 13, 5)


// Je crée mon instance pour le film Predator et je renseigne bien l'URL
const PredatorMovie = new Movie("https//www.google.com", "Predator", 1987, 107)

// Je lance Predator via la méthode play de la classe Media
PredatorMovie.play()