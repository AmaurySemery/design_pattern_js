/*
cf le diagramme de l'image :
Dans le diagramme ci-dessus, vous pouvez voir que le Factory Pattern est composé des éléments suivants :
* La Factory. Elle va récupérer les données qui lui seront passées, et va déléguer la création et le formatage de ces données au bon Constructor. Ici, les données sont celles des fichiers   new-movie-data.json  et   external-movie-data.json  .
* Les objets qui vont être créés par la Factory. Dans notre cas, nous allons avoir deux Constructor Patterns. Un qui existe déjà (Movie.js) et l’autre qui reste à créer. Ils vont formater la donnée pour nous. Ils vont l’envoyer dans notre fichier de template   MovieCard  sans que ce dernier ait de traitements supplémentaires à réaliser.
*/

// Un factory pattern permet de déléguer la création d'un objet

/*
Le rôle du Factory Pattern est de faciliter la création d’objets au sein d’une base de code. On va s’en servir pour créer et gérer différents types d’objets qui présentent des caractéristiques similaires. Dans la pratique, on peut, par exemple, s’en servir pour :
* Gérer différentes sources de données. Dans le cas de notre application, ces données proviennent de deux fichiers différents. Cela dit, ces données pourraient aussi venir d’une API et d’une base de données ;
* Gérer des basculements de données. Autrement dit, passer de données mockées (comme c’est le cas actuellement dans notre projet) à des données provenant d’une API.
*/

class MoviesFactory {
    constructor(data, type) {
        // Si le type correspond à l'ancienne API, alors retourne-moi l'ancien formatage
        if (type === 'oldApi') {
            return new OldMovie(data)
            // Sinon retourne-moi le nouveau formatage
        } else if (type === 'newApi') {
            return new Movie(data)
            // Une bonne pratique est de déclencher une erreur si le format n'est pas reconnu
        } else {
            throw 'Unknown type format'
        }
    }
}

// dans le fichier app.js, on peut appeler la Factory :
const OldMovies = oldMoviesData
    .map(movie => new MoviesFactory(movie, 'oldApi'))

// Attention ceci dit, un Factory Pattern peut complexifier une base de code assez rapidement. C'est donc à utiliser judicieusement.