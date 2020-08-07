import { random } from './random.mjs'

const components = [
    'Oxygen',
    'Iron',
    'Silicon',
    'Magnesium',
    'Sulfur',
    'Carbon dioxide',
    'Nitrogen',
    'Argon',
    'Oxygen',
    'Water vapor'
]

export function generateComponents() {
    let totalPercent = 0
    const structure = {}
    while (totalPercent !== 100) {
        for (const component of components) {
            if (totalPercent === 100) {
                break
            }
            if (random(0, 1).number >= 0.5) {
                let percent = +(random(0, 50).number).toFixed()
                if (totalPercent + percent > 100) {
                    percent = 100 - totalPercent
                }
                totalPercent += percent
                if (!structure[component]) {
                    structure[component] = 0
                }
                structure[component] += percent
            }
        }
    }
    return structure
}