# World.JS
Are we living in simulation? What if our world written in JavaScript ? 😆

To run World, import `Universe` class from `universe.mjs`, one of initialization types from `initTypes.mjs` and make what do u want 😜
Exmaple `index.js`:
```js
import { Universe } from './universe.mjs'
import { bigBang } from './initTypes.mjs'

const myUniverse = new Universe()
myUniverse.init(bigBang)
myUniverse.makeGalaxy()
myUniverse.galaxies[0].makePlanet()
myUniverse.galaxies[0].makeStar()
myUniverse.galaxies[0].makeStar()

console.dir(myUniverse)
```
