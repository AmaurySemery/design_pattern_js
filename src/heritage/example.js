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
 
 // Ici j'instancie quelques classes de films
 const PredatorMovie = new Movie("Predator", 1987, 107)
 const TerminatorMovie = new Movie("Terminator", 1984, 107)
 const AlienMovie = new Movie("Alien", 1979, 117)
 
 // Ici j'instancie quelques séries
 const FriendsTvShow = new TvShow("Friends", 23, 10)
 const ScrubsTvShow = new TvShow("Scrubs", 20, 9)
 const CougarTownTvShow = new TvShow("Cougar Town", 13, 5)