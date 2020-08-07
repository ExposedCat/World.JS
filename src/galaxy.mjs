import { random } from './worldUtils/random.mjs'
import { generateSize } from './worldUtils/generateSize.mjs'
import { Planet } from './planet.mjs'
import { Star } from './star.mjs'


export class Galaxy {
    constructor() {
        this.name = random('name')
        this.stars = []
        this.planets = []
        this.diameter = generateSize('galaxy')
    }
    makePlanet() {
        this.planets.push(new Planet())
    }
    makeStar() {
        this.stars.push(new Star())
    }
}