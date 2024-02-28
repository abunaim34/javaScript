// // ---------------------MAX------------------
// const salma = 90;
// const naim = 70;

// // if(salma > naim){
// //     console.log('naim will be kitab')
// // }
// // else{
// //     console.log('salma will be strow')
// // }

// function getMax(num1, num2){
//     if(num1 > num2){
//         return num1
//     }
//     else{
//         return num2
//     }
// }
// const max = getMax(91, 90);
// const max2 = getMax(50, 100)
// const ultimateMax = getMax(max, max2)
// // console.log('this is high', ultimateMax)


// const naim1 = 900;
// const rofiq = 800;
// const said = 900;


// // --------------MAX3-------------
// if(naim1 > rofiq && naim1 > said){
// //     console.log('naim is boss')
// // }
// // else if(rofiq > naim && rofiq > said){
// //     console.log('rofiq boss')
// // }
// // else{
// //     console.log('said boss')
// }

// function doOfThree(num1, num2, num3){
//     if(num1 > num2 && num1 > num3){
//         return num1;
//     }
//     else if(num2 > num1 && num2 > num3){
//         return num2;
//     }
//     else{
//         return num3;
//     }
// }
// const all = doOfThree(210, 150, 70)
// // console.log('this is boss', all)


// // ---------------MAX4--------------
// const max1 = Math.max(10, 20, 30, 40, 50, 158,)
// // console.log('this is the boss', max1)


// -----------TALLEST-----------

const heights = [25, 45, 44, 55, 74, 85,]

function getMax(numbars){
    let max = numbars[0]
    for(const numbar of numbars){
        if(numbar > max){
            max = numbar
        }
    }
    // return max;
}
const max3 = getMax(heights)
// console.log('this is num', max3)


// -------------------WOOD--------------
function woodQuantity(chair, table, bed){
    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 20;

    const totalChairWood = chair * chairWood
    const totalTalerWood = table * tableWood
    const totalBedWood = bed * bedWood

    const allWood = totalChairWood + totalTalerWood + totalBedWood;
    // return allWood
}
const wood = woodQuantity(0, 0, 1)
// console.log('need wood', wood)


function shopping(panjabi, payjama, juta){
    const panjabiPrice = 1000;
    const payjamaPrice = 800;
    const jutaPrice = 500;

    const pricePanjabi = panjabi * panjabiPrice 
    const pricePayjama = payjama * payjamaPrice 
    const priceJuta = juta * jutaPrice 

    const allPrice = pricePanjabi + pricePayjama + priceJuta;
    // return allPrice
}

const price = shopping(1, 1, 1)
// console.log(price)

// -----------------MIN--------------
const dam = [1200, 20000, 522222, 444777, 144444, 774444 ]

function getMin(numbers){
    let min = numbers[0]
    for(const number of numbers){
        if(number < min){
            min = number
        }
    }
    return min
}
const cheap = getMin(dam);
// console.log(cheap)


// -----------------CHEAPEST------------
const phones = [
    {name: "Iphone", price: 98000, cemera: '12mp', color: 'black'},
    {name: "samsumg", price: 91000, cemera: '12mp', color: 'black'},
    {name: "xoumi", price: 88000, cemera: '12mp', color: 'black'},
    {name: "realme", price: 78000, cemera: '12mp', color: 'black'},
    {name: "oppo", price: 68000, cemera: '12mp', color: 'black'},
    {name: "walton", price: 58000, cemera: '12mp', color: 'black'},
]

function getCheapestPhones(phones){
    let min = phones[0]
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    // return min;
}
const cheap2 = getCheapestPhones(phones)
// console.log(cheap2)

const phoness = [
    {name: "Iphone", price: 98000, cemera: '12mp', color: 'black'},
    {name: "samsumg", price: 91000, cemera: '12mp', color: 'black'},
    {name: "xoumi", price: 88000, cemera: '12mp', color: 'black'},
    {name: "realme", price: 78000, cemera: '12mp', color: 'black'},
    {name: "oppo", price: 68000, cemera: '12mp', color: 'black'},
    {name: "walton", price: 58000, cemera: '12mp', color: 'black'},
]

function getCheapestPhones(phoness){
    let min = phoness[0]
    for(const phone of phoness){
        if(phone.price > min.price){
            min = phone;
        }
    }
    // return min;
}
const cheap3 = getCheapestPhones(phoness)
// console.log(cheap3)

const numbers = [300, 100, 700, 1200]

const products = [
    {namme: 'shamp', price: 300},
    {namme: 'ciruni', price: 100},
    {namme: 'panjabi', price: 700},
    {namme: 'payjama', price: 1200},
]

function getProducts(products){
    let total = 0;
    for(const product of products){
        total = total + product.price
    }
    // return total;
}
const total = getProducts(products)
// console.log('this is total', total)

// -----------------SHOPPING CART------------
const numbars = [300, 100, 700, 1200]

const shops = [
    {namme: 'shamp', price: 300, quantity: 2},
    {namme: 'ciruni', price: 100, quantity: 3},
    {namme: 'panjabi', price: 700, quantity: 4},
    {namme: 'payjama', price: 1200, quantity: 1},
]

function getShops(shops){
    let total = 0;
    for(const shop of shops){
        const shopCost = shop.price * shop.quantity;
        total = total + shopCost
    }
    // return total
}
const cost = getShops(shops);
// console.log(cost)


// -------------DISCOUNT--------------
function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
        return total
    }
}
const total1 = discountedPrice(201)
// console.log(total1)



// -----------------layered-discount------------
function layeredDiscount(quantity){
    const firstHanddet = 100;
    const secondHanded = 90;
    // const lastHanded = 70;

    if(quantity <= 100){
        const total = quantity * firstHanddet;
        // return total;
    }
    else if(quantity <= 200) {
        const first100total = 100 * firstHanddet;
        const remaingQulity = quantity - 100;
        const remaingTotal = remaingQulity * secondHanded;
        const total = first100total + remaingTotal;
        // return total; 
    }
    else{
        const firstTotal = 100 * firstHanddet;
        const secondTotal = 100 * secondHanded;
        const remaingQulity = quantity - 200;
        // const remaingTotal = remaingQulity * lastHanded;
        // const total = firstTotal + secondTotal + remaingTotal;
        // // return total;
        
    }
}
const total2 = layeredDiscount(201)
// console.log(total2)


// ---------------CALCULATOR------------
function add(num1, num2){
    return num1 + num2
}
function subtract(num1, num2){
    return num1 - num2
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num1 / num2
}

function calculator(a, b, oparation){
    if(oparation === 'add'){
        const result = add(a, b)
        // return result
    }
    else if(oparation === 'subtract'){
        const result = subtract(a, b);
        // return result;
    }

    else if(oparation === 'multiply'){
        const result = multiply(a, b);
        // return result;
    }

    else if(oparation === 'divide'){
        const result = divide(a, b)
        // return result;
    }
    else {
        // return "only 'add', 'subtract', 'multiply', 'divide' oparation is allowd"
    }
}
// const result = calculator(5, 7, 'add')
// const result = calculator(5, 7, 'subtract')
// const result = calculator(5, 7, 'multiply')
// const result = calculator(5, 7, 'divide')
// console.log(result)

let numm = [50, 50]
numm.unshift(20)
console.log(numm)