import { random } from './worldUtils/random.mjs'
import { generateSize } from './worldUtils/generateSize.mjs'


export class Star {
    constructor() {
        this.name = random('name')
        this.diameter = generateSize('star')
    }
}