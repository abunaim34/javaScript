// ------------------FUNCTION-----------------
// function declare
function madrasa(){
    console.log('ami abu naim')
    console.log('ami madrasay pori')
    console.log( 'ami hedaya jamate pori')
    console.log('ami barite thaki')
    console.log('ami madrasay giye giye class kore asi')
}
// call the funtion
// madrasa()

function devoloper(){
    console.log(' ami ekjon webdeveloper hote cia')
    console.log('ami big big biggenar')
    console.log('ami just html css pari')
    console.log('ami javascript suru krchi')
    console.log('ami inshaallah ekdin sofol hbo')
}
// devoloper();


// --------------PARAMETER------------
function squre(number){
    // console.log(number)
    console.log('This is numbers', number)
    const borgo = number * number
    console.log('This is borgo', borgo)
}
// squre(8);
// console.log('------------')
// squre(12);
// squre(18);
// squre(19);

// even funtion
function add(nam1, nam2){
    const sum = nam1 + nam2;
    console.log(sum)
}
// add(755,966)
// add(3226,83335)

function addAll(a, b, s, d, f){
    const total = a + b + s + d + f;
    console.log(total)
}
// addAll(55, 44, 44)
// addAll(55, 44, 44, 11, 47)


//------------ arguments------------
function doubleit(numbers){
    const doubled = numbers * 2;
    console.log(doubled, numbers)
}
// console.log('I will call the function')
// doubleit(15)
// console.log('-----------')
// doubleit(85)
// console.log('-----------')
// doubleit(951)
// const number = 25;
// doubleit(number)
// const num = 488;
// doubleit(num)


// -------------DEFFERENCE---------
function defference(num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'defference is', diff)
}
const fthrAge = 40;
const myAge = 20;
// defference(fthrAge,myAge)


// -----------RETURN------------
function tenTime(numbe){
    const result = numbe * 10;
    return result;
}

function cutHalf(numbe){
    const half = numbe / 2;
    return half;
}

// tenTime(5)
const output = tenTime(5)
// console.log('output', output)

// const big = tenTime(55)
// console.log('big', big)


// ----------- FUNCTION RETUNR RECAP-----------
function add(price1, price2){
    const total = price1 + price2;
    return total
}

const bill = add(40, 70)

function add2(price1, price2){
    return price1 + price2
}
const bill2 = add2(52, 74)
// console.log(bill, bill2)


function doMath(num1, num2){
    const sum = num1 + num2; 
    const diff = num1 - num2;
    const mult = sum * diff;
    const result = mult / 2;
    return result;
}

const resul = doMath(25,20)
// console.log(resul)


// --------CONDITIONAL RETURN--------
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
// console.log(isEven(5))
// console.log(isEven(110))


function isodd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;
}
// console.log(isodd(7))
// console.log(isodd(70))


//--------VARIOS PARAMS---------
function evenString(str){
    const size = str.length;
    console.log(str, size)
    if(size % 2 === 0){
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
}

// const result = evenString('noakhalii', 'dhaka')
// console.log(evenString('dhaka'))
// console.log(evenString('noakhali'))

// evenString('Noakhalii')
// evenString('Senbag')

function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
// console.log(doubleOrTriple(5, true))
// console.log(doubleOrTriple(5, false))

function numberOrEliment(number){
    const len = number.length
    return len;
}

// console.log(numberOrEliment([45, 522, 778, 255, 144]))

function getAge(person){
    const age = person.age;
    return age
}

// console.log(getAge.age)
// getAge(50)


// ------------ARRAY OPARATION---------
function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number)
        sum = sum + number
    }
    return sum;
}

const numbs = [42, 55, 28,]
// const sum = sumOfNumbers(numbs)
// console.log('sum of number is', sum)


// ------------EVEN ONLY----------
function evenOnlyNumbers(numbers){
    const evens = [];
    for(const number of numbers){
        if(number % 2 ===0){
            console.log(number)
            evens.push(number)
        }
    }
    return evens;
}
const numbers = [20, 27, 58, 11,42]
// const evens = evenOnlyNumbers(numbers)
// console.log('evens number', evens)


function sumOfEvensNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number)
            sum = sum + number
        }
    }
    return sum;
}
const numbss = [20, 27, 58, 11,42]
const sum = sumOfEvensNumber(numbss)
// console.log('this is even', sum)

function getMenu() {
    console.log("Burger, Pizza, Pasta");
}
getMenu()