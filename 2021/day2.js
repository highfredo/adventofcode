const data = require('./day2data')

let posX = 0
let posY = 0

data.forEach(line => {
    let [direction, units] = line.split(' ')
    units = parseInt(units)
    switch (direction) {
        case 'forward':
            posX+=units
            break
        case 'down':
            posY+=units
            break
        case 'up':
            posY-=units
            break
        default:
            throw new Error('bad direction')
    }
})

console.log("Parte 1", posX*posY)

let aim = 0
posX = 0
posY = 0
data.forEach(line => {
    let [direction, units] = line.split(' ')
    units = parseInt(units)
    switch (direction) {
        case 'forward':
            posX+=units
            posY+=aim*units
            break
        case 'down':
            aim+=units
            break
        case 'up':
            aim-=units
            break
        default:
            throw new Error('bad direction')
    }
})

console.log("Parte 2", posX*posY)
