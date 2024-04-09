/*
Un State Pattern est composé des éléments suivants :
* Vous avez le Context. Cet objet va vous permettre d’une part de connaître le State courant, et d’autre part d’effectuer les modifications de State. 
* Vous avez le ou les States. Ce sont des objets qui composent l’objet Context.
*/

// Le principe d’un State Pattern est de gérer facilement les changements d’état d’une application

// Chaque State correspond à un des états possibles de l’application. Par exemple, pour un utilisateur, on pourrait avoir   connected ,   anonymous , etc.

// Le State Pattern est souvent bien pratique pour le débogage. Vous connaissez par avance dans quel état se trouve votre application, et vous centralisez vos changements d’état à un seul endroit.

// Le Context
class TrafficLight {
    constructor() {
      this._states = [
        new GreenLight(),
        new YellowLight(),
        new RedLight()
      ]
      this._currentLight = this._states[0]
    }
    
    handleTraffic() {
      const totalStates = this._states.length
      const currentIndex = this._states.findIndex(light => light === this._currentLight)
      
      if (currentIndex + 1 < totalStates) {
        this._currentLight = this._states[currentIndex + 1]
      } else {
        this._currentLight = this._states[0]
      }
    }
    
    sign() {
      return this._currentLight.sign()
    }
  }
  
  // Les States
  class RedLight {
    constructor() {
      this._light = 'red'
    }
    
    sign() {
      return "S'arreter"
    }
  }
  
  class YellowLight {
    constructor() {
      this._light = 'yellow'
    }
    
    sign() {
      return 'Ralentir'
    }
  }
  
  class GreenLight {
    constructor() {
      this._light = 'green'
    }
    
    sign() {
      return 'Démarrer'
    }
  }
  
  
  const Context = new TrafficLight()
  
  console.log(Context.sign())
  Context.handleTraffic()
  
  console.log(Context.sign())
  Context.handleTraffic()
  
  console.log(Context.sign())
  Context.handleTraffic()
  
  console.log(Context.sign())
  Context.handleTraffic()