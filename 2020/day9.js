const data = require('./day9data')

const preamble = 25

function canSum(array, number) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            const sum = array[i] + array[j]
            if(sum === number) {
                return true
            }
        }
    }

    return false
}

const cantsumnumberIdx = data.findIndex((elm, idx) => {
    if(idx < preamble) return false
    return !canSum(data.slice(idx-preamble, idx), elm)
})

const cantsumnumber = data[cantsumnumberIdx]
console.log('cantsumnumber', cantsumnumber)

const cantsumnumberArray = data.slice(cantsumnumberIdx-preamble, cantsumnumberIdx)
console.log('cantsumnumberArray', cantsumnumberArray+'')

// for (let i = 0; i < cantsumnumberArray.length; i++) {
//     for (let j = i+1; j < cantsumnumberArray.length; j++) {
//         const part = cantsumnumberArray.slice(i, j+1)
//         const sum = part.reduce((acum, val)=>acum+val, 0)
//         console.log('i', i, 'j', j, 'sum', sum, 'part', part+'')
//         if(cantsumnumber === sum) {
//             console.log('weakness', part)
//             console.log('weakness size', part.length)
//             return
//         }
//     }
// }


const target = cantsumnumber
let range = []

// Use .some here to short circuit as soon as we find a match
data.some((number, index) => {
    let total = 0

    // If it happens to be the target number, ignore it
    if (Number(number) === target) return false

    // cycle through every number starting at the next number from the parent loop
    return data.slice(index).some((n, i) => {

        // Keep track of the total
        total = Number(total) + Number(n)

        // If we find the total, set the range so we can later compute
        // filter the lowest and highest
        if (total === target) {
            range = [index, index + i]
            return true
        }
    })
})
// Create an array of the values, then add the lowest and highest
let numbers = data.slice(range[0], range[1] + 1)

console.log(Math.max(...numbers) + Math.min(...numbers))
