// --------------GETELEMENTSBYTAGNAME------------

//  console.log(document.body)
const liCollection = document.getElementsByTagName('li')
// console.log(liCollection)
for(li of liCollection){
    // console.log(li.innerText)
}


// ---------------GETELEMENTBYID---------------
// console.log(document.getElementById('fruits'))
// console.log(document.getElementById('dom').innerText = 'this is DOM')
const id = document.getElementById('dom').style.backgroundColor = 'red'


// -------------GETELEMENTBYCLASSNAME------------
const className = document.getElementsByClassName('dum')
for(const dum of className){
    // console.log(dum.innerText)
}

// const mil = document.getElementsByClassName('fru') [0]
// console.log(mil)

const mil = document.getElementsByClassName('fru') [0].innerHTML
// console.log(mil)


// -----------------QUERYSELECTORALL---------------
// const sumLi = document.querySelectorAll('.fru')
// for(const li of sumLi){
//     console.log(li.innerText)
// }
const sum = document.querySelectorAll('#dom')
// console.log(sum)
const sum1 = document.querySelectorAll('.fru li')
// console.log(sum1)


// ------------------QUERYSELECTOR---------------
const sum2 = document.querySelector('.fru li')
// console.log(sum2)



// ------------GETATTRIBUTE-------------
// const title = document.getElementById('dom')
// title.getAttribute('id')
// console.log(title)


// -----------------CLASSLIST------------
const title1 = document.getElementById('dom')
title1.classList
// console.log(title1)
const title2 = document.getElementById('dom')
title2.classList.add('lil')
title2.classList.remove('mim')
// console.log(title2)


// --------------SETATTRIBUTE------------
const lim = document.getElementById('mina')
lim.setAttribute('title', 'this is heading title')
// console.log(lim)

