import { Galaxy } from './galaxy.mjs'

export class Universe {
    constructor() {
        this.initialized = false
        this.creationDate = new Date()
    }
    init(initType) {
        initType(this)
        this.initialized = true
        this.initializationDate = new Date()
        return this
    }
    age() {
        return initializationDate - new Date()
    }
    makeGalaxy() {
        if (!this.initialized) {
            throw new Error('Universe must be initialized to make galaxy')
        }
        this.galaxies.push(new Galaxy(this))
    }
}