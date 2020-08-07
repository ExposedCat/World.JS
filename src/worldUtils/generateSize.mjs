import { random } from './random.mjs'

const sizes = {
    galaxy: {
        amount: {
            number: {
                min: 5.2,
                max: 11
            },
            order: 4
        },
        measure: 'ly'
    },
    star: {
        amount: {
            number: {
                min: 4.87,
                max: 15019680
            },
            order: 5
        },
        measure: 'km'
    },
    planet: {
        amount: {
            number: {
                min: 4.8794,
                max: 142.984
            },
            order: 3
        },
        measure: 'km'
    }
}

export function generateSize(forEntity) {
    const sizeLimits = sizes[forEntity]
    return {
        number: random(sizeLimits.amount.number.min, sizeLimits.amount.number.max, sizeLimits.amount.order, sizeLimits.amount.order),
        measure: sizeLimits.measure
    }
}