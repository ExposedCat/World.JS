import { Universe } from './universe.mjs'
import { bigBang } from './initTypes.mjs'

const myUniverse = new Universe()
myUniverse.init(bigBang)
myUniverse.makeGalaxy()
myUniverse.galaxies[0].makePlanet()
myUniverse.galaxies[0].makeStar()
myUniverse.galaxies[0].makeStar()

console.dir(JSON.stringify(myUniverse, null, ' '))