function randomNumber(min, max) {
    min = min > max ? [max, max = min][0] : min
    return Math.random() * (max - min) + min
}

export function random(min, max, orderMin, orderMax) {
    if (min === 'name') {
        return Math.random().toString(36).substring(5)
    }
    const number = randomNumber(min, max)
    const order = +(orderMin === undefined ? 0 : randomNumber(orderMin, orderMax)).toFixed()
    return {
        number,
        order: +order.toFixed(),
        string: `${number} * 10^${order}`
    }
}