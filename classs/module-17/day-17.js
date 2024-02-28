const salary = 25000;
const isBcs = true;
const height = 72;
const hasCar = true;


// if(salary > 20000){
//     console.log('su---patro')
// }
// else{
//     console.log('onno---patro')
// }

// if(salary > 22000 || height > 70 ){
//     console.log('eso baba bolo kobul ')
// }

// else{
//     console.log('vag tui mokbul')
// }

// if(salary > 22000 || height > 70 || isBcs == true ){
//     console.log('eso baba bolo kobul ')
// }

// else{
//     console.log('vag tui mokbul')
// }

// -----------more and more condition------------
// if(salary < 22000 && height > 70 && isBcs == true ){
//     console.log('eso baba bolo kobul ')
// }

// else{
//     console.log('vag tui mokbul')
// }


// -----------complex condition-------
// if ((salary > 25000 && hasCar == true) || isBcs == true){
//     console.log( 'raji sobai')
// }

// else{
//     console.log('reject')
// }
// if ((salary > 25000 || hasCar == true) && isBcs == true){
//     console.log( 'raji sobai')
// }

// else{
//     console.log('reject')
// }



// -----------MULTI_LAVEL CONDITION----------
// const price = 240;


// if(price >= 500){
//     // 10% discount
//     const discount = price * 10 / 100;
//     const payAmount = price - discount
//     console.log(payAmount)
// }

// else if(price > 250){
//     // 40%discount
//     const discount = price * 40 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount)
// }

// else if(price > 200){
//     // 5% discount
//     const discount = price * 5 / 100
//     const payAmount = price - discount
//     console.log(payAmount)
// }

// else{
//     console.log(price)
// }


// const age = 42;
// const price = 500;

// if(age <= 15){
//     console.log('you can eat free free')
// }

// else if(age >= 60){
//     const discount = price * 50 / 100;
//     const pay = price - discount;
//     console.log(pay)
// }

// else if(age >= 50){
//     const discount = price * 25 / 100;
//     const pay = price - discount;
//     console.log(pay)
// }

// else if(age >=40){
//     const discount = price * 10 / 100;
//     const pay = price -discount;
//     console.log(pay)
// }

// else{
//     console.log(price)
// }


// -------------NESTED--------------
// const money = 5;
// if(money > 300){
//     console.log('you are so rich')
// }

// else{
//     if(money > 200){
//         console.log('tui motamoti ar ki')
//     }
//     if(money > 10){
//         console.log("tui sei gorib")
//     }

//     else{
//         console.log("tui amar kicchu na")
//     }
// }


// ------------TERNARY-------------
const age = 14;
// ~~~~FULL MEANING~~~
// if(age > 15){
//     console.log('you can vote')
// }

// else{
//     console.log('not vote')
// }


// ~~~simple ternary~~
// age >= 15 ? console.log('yes vote') : console.log("na vote")

// var price = 500;
// const isLeader = false;


// // ~~~~full meaning
// if(isLeader === true){
//     price = 0;
// }

// else{
//     price = price + 100;
// }
// // console.log(price)

// price = isLeader === true ? 0 : price + 100;

// // ~~~semi advance~~
// if(isLeader === true){
//     if(taka < 1000){
//         taka = taka / 2;
//         console.log(price)
//     }
//     else{
//         taka = 0;
//     }
// }

// else{
//     taka = taka=100
// }

// console.log(taka)

//------------SHOTCUT------------
// const isHover = false;
// if(isHover){
//     console.log('kochu')
// }
// else{
//     console.log('huddai')
// }

// const isHover = false;
// if(!isHover){
//     console.log('toke talak')
// }

// else{
//     console.log('toke ador dimu')
// }



// ---------ARRAY-------------
// ~~~~~full meaning~~~~~
const num1 = 12;
const num2 = 18;
const num3 = 22;
const num4 = 25;

const numbers = [12, 18, 22, 25]
const friends = ['abul', 'babu', 'cabul', 'bulbul']
const passed = [true, false, true, false]
const mixedArray = [13, 'abul', true, 25.12]



// ------------.LENGTH-----------------
const num = [12, 18, 22, 25, 12, 18, 22, 25, 12, 18, 22, 25]
// console.log(num.length)




// ------------------INDEX-------------
const umn = [12, 18, 22, 25, 12, 18, 22, 25]

//~~~~~get aliment value by index~~~~~~

// console.log(umn)
// console.log(umn[5])

// const nmn = umn[4]
// console.log(nmn)

// ~~~set or apdate eliments by index~~~
let number = [25, 47, 18, 30]
let abc = 122;
abc = 150;

number[2] = 150;
// console.log(number)


// ----------PUSH--------
const ageg =[]
const nemar = [25, 85, 60, 87]

// console.log(nemar)
nemar.push(11)
nemar.push(66, 77, 93)
// console.log(nemar)

// -----------PUSH-------------
const fd = ['kochu', 'shak', 'alu', 'mach']
// console.log(fd)
fd.pop()
// console.log(fd)

const out = fd.pop()
// console.log(out)


//----------SHIFT_UNSHIFT--------
const fdf = ['kochu', 'shak', 'alu', 'mach']
// console.log(fdf)

fdf.shift()
// console.log(fdf)

fdf.unshift('jani na')
// console.log(fdf)


// ----------INCLUDES-----------
const fgp = ['kochu', 'shak', 'alu', 'mach']

// console.log(fgp.includes("kochu"))
// console.log(fgp.includes("pelam"))

// if(fgp.includes('huda')){
//     console.log('kha tui beshi kore')
// }
// else{
//     console.log('khaic na')
// }


// -----------INDEXOF----------
const alu = ['kochu', 'shak', 'alu', 'mach']

// console.log(alu.indexOf('alu'))
// console.log(alu.indexOf('lam'))


// ------------ARRAY CHECK---------
const kg = ['kochu', 'shak', 'alu', 'mach'];
const nums = [];
const food = 'gol a kochu khet';
const boyos = 20;

console.log(Array.isArray(kg))
console.log(Array.isArray(nums))
console.log(Array.isArray(food))
console.log(Array.isArray(boyos))