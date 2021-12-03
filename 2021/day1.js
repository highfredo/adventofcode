const data = require('./day1data')

let increasedNum = 0
for (let i = 1; i < data.length; i++) {
    if(data[i] > data[i-1]) {
        increasedNum++
    }
}
console.log('Parte 1: ', increasedNum)

increasedNum = 0
for (let i = 2; i < data.length; i++) {
    const window1sum = data[i-2] + data[i-1] + data[i]
    const window2sum = data[i-1] + data[i] + data[i+1]
    // const window1sum = data[i-2]
    // const window2sum = data[i+1]
    if(window2sum > window1sum) {
        increasedNum++
    }
}
console.log('Parte 2: ', increasedNum)
