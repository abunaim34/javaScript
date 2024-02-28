//====================LOOP=======================

// ----------FOR_OF---------
const fruits = ['banana', 'mango', 'jackfruits', 'orange']

// console.log(fruits)

for(const fruit of fruits){
    // console.log(fruit)
    // console.log('mui sob khai halaichi')
}


// -----------WHITE---------
const number = 7;

// if(number < 10){
//     console.log('kichu paiti')
// }
// console.log('pabina')


// let num = 0;
  
// while(num < 5){
//     console.log('looooping', num)
//     // num = num + 1;
//     // num += 1;
//     num++;
// }


let num = 1; //loop variable

// while(num <= 10){    //focus on the condition
//     console.log(num) // loop statement
//     num += 1;        //loop vaiable change
// }

let emi = 1;

// while(emi <= 100){
//     console.log(emi)
//     emi += 1;
// }

// ------------SUM---------------
let tum = 1;
let sum = 0;

// while(tum <= 10){
//     console.log(tum)
//     sum = sum + tum
//     console.log('loot', sum)
//     tum ++;
// }


// -----------------EVEN---------------
let even = 1;
// while(even <= 10){
//     console.log(even)

//     if(even % 2 === 0){
//         console.log('even', even)
//     }

//     even++;
// }


// ----------------FOR LOOP------------
let cho = 0;

// while(cho <= 5){
//     console.log(cho)
//     cho++
// }

// for(let cho = 0; cho <= 5;cho++){
//     console.log(cho)
// }



// ---------------ODD_EVEN--------------
// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

// ----EVEN----
// for(let b = 0; b <= 20; b=b+2){
//     console.log(b)
// }

// ----ODD----
// for(let c = 1; c <= 20; c=c+2){
//     console.log(c)
// }


// ------------FOR_SUM-----------
let sam = 0;

// for(let k = 200; k <= 250; k++){
//     sam = sam+ k
//     console.log(k)
// }
// console.log('11 theke 20 porjonto',sam)



// --------INCREMENTAL & DECREMENTAL_FOR--------
// ~~~~INCREMENTAL~~~~~
// for(let ka = 0; ka <= 20; ka++){
//     console.log(ka)
// }

// ~~~~DERCREMENTAL~~~~~
// for(let cha = 10; cha >= 0; cha--){
//     console.log(cha)
// }



// --------------DECRIMENTAL_WHILE--------------
let n = 10;

// while(n >= 0){
//     console.log(n)
//     n--
// }


// -----------DEFFRENT_USE-----------
// ~~~~ODD~~~~
// for(let tu = 0; tu <= 20; tu++){
//     if(tu % 2 === 1){
//         console.log(tu)
//     }
// }

// for(let tu = 0; tu <= 20; tu++){
//     if(tu % 2 !== 0){
//         console.log(tu)
//     }
// }

// ~~~~EVEN~~~~~
// for(let ti = 0; ti <= 30; ti++){
//     if(ti % 5 === 0){
//         console.log(ti)
//     }
// }

// for(let ti = 1; ti <= 30; ti++){
//     if(ti % 3 === 0 || ti % 5 === 0 ){
//         console.log(ti)
//     }
// }

// for(let ti = 1; ti <= 30; ti++){
//     if(ti % 3 === 0 && ti % 5 === 0 ){
//         console.log(ti)
//     }
// }

// ~~~sum~~~~~
let total = 0;

// for(let ko = 1; ko <= 20; ko++){
//     if(ko % 3 === 0){
//         console.log(ko)
//     }
//     total = total + ko
//     console.log('total', total)
// }

// console.log('kochuta', total)



// -----------BREACK----------
// for(let im = 0; im <= 15; im++){
//     console.log(im)
//     if(im >= 10){
//         break
//     }
// }

let g = 50;

// while(g > 25){
    
//     if(g < 40){
//         break
//     }
//     console.log(g)
//     g--
// }


// CONTINUE --->skip rest of the code for iteration
// BREAK ---> i am done with this loop. loop end.

// for(let fi = 1; fi < 10; fi++){
//     console.log(fi)
// }

let na = 0;

// while(na < 50){
//     na++
//     if(na % 5 !== 0){
//         continue
//     }
//     console.log(na)
// }


// -----------DO_WHILE-------------
// let di = 10;

// while(di < 5){
//     console.log(di)
//     di++
// }

let di = 10;

do{
    console.log(di)
    di++
}

while(di < 5)