import { random } from './worldUtils/random.mjs'
import { generateSize } from './worldUtils/generateSize.mjs'
import { generateComponents } from './worldUtils/generateComponents.mjs'


export class Planet {
    constructor() {
        this.name = random('name')
        this.entities = []
        this.components = generateComponents('planet')
        this.diameter = generateSize('planet')
    }
}