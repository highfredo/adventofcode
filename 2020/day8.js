const data = require('./day8data')

let acum = 0
let pointer = 0
let finished = false
const visited = []

function exec(line) {
    let [instruction, value] = line.split(' ')
    value = parseInt(value)
    if(isNaN(value)) {
        throw new Error('valor no reconocido')
    }

    if(instruction === 'acc') {
        acum+=value
        pointer++
    } else if(instruction === 'jmp') {
        pointer+=value
        console.log(pointer, line)
    } else if(instruction === 'nop') {
        pointer++
        console.log(pointer, line)
    } else {
        throw new Error('instruccion no reconocida')
    }
}

while(!finished) {
    if(visited.includes(pointer)) {
        finished = true
    }
    visited.push(pointer)
    exec(data[pointer])
}

console.log('fin', acum)
