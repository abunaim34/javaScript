// ------------------CONVERT--------------------
// 12 inch 1 feet
function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
// const naimheight = inchToFeet(66)
// console.log(naimheight)

function inchToFeet2(inch){
    const feetFr = inch / 12;
    const feetnum = parseInt(feetFr)
    const inchRemaining = inch % 12;
    const result = feetnum + ' feet ' + inchRemaining + ' inch '
    return result
}
// const naimheight2 = inchToFeet2(75)
// console.log(naimheight2)

function mileToKilo(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

// mileToKilo()
// console.log(kiloMiter)


// -------------------LIPYEAR---------------
function lipyear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
// const islip = lipyear(2066)
// console.log(islip)

function ileapyear(year){
    if(year % 100 !== 0 && year % 4 === 0 ){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const li = ileapyear(2100)
const li2 = ileapyear(2400)
const li3 = ileapyear(2100)
const li4 = ileapyear(2052)
// console.log(li, li2, li3, li4)



// -------------------ODD AVERAGE-------------
function oddAvg(numbers){
    let odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            // console.log(number)
            odds.push(number)
        }
    }
    // console.log(odds)
    let sum = 0;
    for(const number of odds){
        sum = sum + number
    }
    const count = odds.length
    console.log(sum, count)
    // const avg = sum / count
    // return avg
}

// const numbers = [21, 24, 45, 71, 77, 99,]
// const avg = oddAvg(numbers)
// console.log('this is odd avg', avg)

function evenAvg(numbers){
    let evens = []
    for(const number of numbers){
        if(number % 2 === 0){
            // console.log(numbars)
            evens.push(number)
        }
    }
    // console.log(evens)
    let sum = 0;
    for(const number of evens){
        sum = sum + number
    }
    const count = evens.length
    console.log(sum, count)
    // const avg = sum / count 
    // return avg;
}
const numbers = [ 22, 47, 44, 58, 96, 78, 66]
// const avg = evenAvg(numbers)
// console.log('this is even avg', avg)



// ----------NO_DUPLICATE/UNIQUE_ARRAY------------
function noDuplicate(array){
    let unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    // return unique
}

const biriyaniKhor = ['said', 'tapa', 'omor', 'said', 'mobarak', 'tapa']
// const uniqueArray = noDuplicate(biriyaniKhor)
// console.log(uniqueArray)


function noDuplicate2(numbars){
    let unique = [];
    for(number of numbars){
        if(unique.includes(number) === false){
            unique.push(number)
        }
    }
    // return unique
}
const numbars = [25, 7, 25, 7, 55, 33, 55]
// const uniqueArray2 = noDuplicate2(numbars)
// console.log(uniqueArray2)



// -----------MATH-------------
// // const math = {
// //     min: function min(num1, num2){
// //         return mum2
// //     }
// // }
// // console.log(math.min)
// console.log(math.max)

// const min = Math.min(21, 58, 15, 85, 55, -445)
// console.log(min)
// const max = Math.max(21, 584, 15, 85, 55, -445)
// console.log(max)

// console.log(Math.PI)

// console.log(Math.abs(5-10))

// console.log(Math.round(2.25))
// console.log(Math.round(2.85))

// console.log(Math.floor(2.99))

// console.log(Math.ceil(2.01))

// console.log(Math.random())
// console.log(Math.random()*20)
// const rand = Math.round(Math.random()*10)
// console.log(rand)



// -------------------DATE----------------
const date = new Date ('2024-02-04')
// console.log(date)
// console.log(date.getMonth())
// console.log(date.getDate())

// const specificDate = new Date(2025, 11, 26,)
// console.log(specificDate)
// specificDate.setMonth(10)
// console.log(specificDate.toLocaleString('en-GB'))


// -------------------SWAP--------------------
let a = 5;
let b = 7;
// console.log(a, b)

// not working
// a = b;
// b = a;
// console.log(a, b)

const temp = a;
a = b;
b = temp;
// console.log(a, b)


let x = 9;
let y = 6;
// console.log(x, y);
[x, y] = [y, x];
// console.log(x, y)


let c = 5;
let passed = true;
console.log(c, d)
[c, d] = [d, c];
// console.log(c, d)