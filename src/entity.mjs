export class Entity {
    constructor(species, lifeCycle, characteristics, abilities) {
        const errorText = `Can not create Entity: %field field must be type of %expectedType, but got %type`

        if (typeof species !== 'string') {
            throw new Error(
                errorText
                    .replace('%field', 'species')
                    .replace('%expectedType', 'string')
                    .replace('%type', typeof species)
            )
        }
        if (typeof lifeCycle !== 'function') {
            throw new Error(
                errorText
                    .replace('%field', 'lifeCycle')
                    .replace('%expectedType', 'function')
                    .replace('%type', typeof lifeCycle)
            )
        }
        if (typeof characteristics !== object) {
            throw new Error(
                errorText
                    .replace('%field', 'characteristics')
                    .replace('%expectedType', 'object')
                    .replace('%type', typeof characteristics)
            )
        }
        if (typeof abilities !== object) {
            throw new Error(
                errorText
                    .replace('%field', 'abilities')
                    .replace('%expectedType', 'object')
                    .replace('%type', typeof abilities)
            )
        }

        this.species = species
        this.abilities = abilities
        this.lifeCycle = lifeCycle
        this.characteristics = characteristics
    }
    create() {
        this.creationDate = new Date()
        this.lifeCycle()
    }
}
