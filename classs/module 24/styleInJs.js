const colls = document.querySelectorAll('section')
// console.log(coll)
for(const coll of colls){
    coll.style.border = '2px solid red'
    coll.style.marginBottom = '5px'
    coll.style.borderRadius = '10px'
}

const get = document.getElementById('get')
get.style.backgroundColor = 'blue'
get.classList.add('bg')



// --------------CHILDNODE-----------------
// const child = document.childNodes[1]
// console.log(child)

get.childNodes[1]
get.childNodes[1].childNodes
get.childNodes[3].childNodes[1].nextSibling


// --------------CREATEELEMENT------------
// console.log(document.createElement('p'))

//-----------------APPENDCHILD----------------
// const get = document.appendChild('li')
// console.log(get.document.appendChild('li'))

// const li = document.createElement('li')
// li.innerText = 'this is be is'
// console.log(li)


// --------------li add kora----------------
const placeUL = document.querySelector('#get ul')
// const li = document.createElement('li')
// li.innerText = 'this is be is'
// const li2 = document.createElement('li')
// li2.innerText = 'she is'
// placeUL.appendChild(li)
// placeUL.appendChild(li2)
// console.log(placeUL)



// --------------PARENTNODE--------------
// console.log(placeUL.parentNode.parentNode.parentNode)