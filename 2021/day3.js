const data = require('./day3data')

let gamma = ''
let epsilon = ''

data[0].split('').forEach((_, idx)=> {
    let ones = 0
    let zeros = 0
    data.forEach((byte) => {
        const bit = byte[idx]
        if(bit === '1') ones++
        else zeros++
    })
    if(ones>zeros) {
        gamma+='1'
        epsilon+='0'
    } else {
        gamma+='0'
        epsilon+='1'
    }
})

gamma = parseInt(gamma, 2)
epsilon = parseInt(epsilon, 2)
console.log('Parte 1', gamma*epsilon)


function getRating(data, conditionFn) {
    let rating = data
    let idx = 0
    while(rating.length>1) {
        const {ones, zeros} = rating.reduce((acum, byte) => {
            if(byte[idx] === '1') {
                acum.ones.push(byte)
            } else {
                acum.zeros.push(byte)
            }
            return acum
        }, {ones: [], zeros: []})
        rating = conditionFn(ones, zeros)
        idx++
    }

    return parseInt(rating[0], 2)
}

const o2rating  = getRating(data, (ones, zeros) => ones.length >= zeros.length ? ones : zeros)
const co2rating = getRating(data, (ones, zeros) => zeros.length <= ones.length ? zeros : ones)

console.log('Parte 2', o2rating*co2rating)
