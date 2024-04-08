/* 
Le principe d’un Singleton est de restreindre l’instanciation d’une classe ou d’un prototype à un seul objet. Cela va permettre de n’avoir qu’une seule connexion à la base de données, et de faciliter la gestion d’objets globaux.

Un Singleton ne peut être instancié qu’une seule fois !

* L’un des avantages de ce pattern est qu’il va vous permettre une économie de ressources.
* L’autre avantage du Singleton est qu’il permet de diminuer l’impact des variables globales dans votre application.

Attention malgré tout, les variables globales ne sont pas tout le temps une bonne pratique en programmation, parce qu’elles favorisent le plus souvent des effets de bord.
*/

// Exemple pour implémenter un singleton sur JS bin : https://jsbin.com/?html,output

class User {
    constructor(firstName, lastName) {
      if (User.exists) {
        return User.instance
      }
      
      this._firstName = firstName
      this._lastName = lastName
      
      User.exists = true
      User.instance = this
        
      return this
  
    }
    
    get firstName() {
      return this._firstName
    }
    
    get lastName() {
      return this._lastName
    }
    
    get user() {
      return {
        firstName: this._firstName,
        lastName: this._lastName
      }
    }
  }
  
  
  const FirstUser = new User('thomas', 'd')
  const SecondUser = new User('alexandra', 'c')
  
  console.log(FirstUser)
  console.log(SecondUser)