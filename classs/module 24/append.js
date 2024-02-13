// const mainContainer = document.getElementById('main-container')
// // console.log(mainContainer)
// const section = document.createElement('section')
// 

// const h1 = document.createElement('h1')
// h1.innerText = 'this is food bloger'
// section.appendChild(h1)

// const ul = document.createElement('ul')

// const li1 = document.createElement('li')
// li1.innerText = 'biriyani'
// ul.appendChild(li1)

// const li2 = document.createElement('li')
// li2.innerText = 'borhani'
// ul.appendChild(li2)

// const li4 =document.createElement('li')
// li4.innerText = 'borhani'
// ul.appendChild(li4)

// const li2 =document.createElement('li')
// li.innerText = 'khicuri'
// ul.appendChild(li2)

// section.appendChild(ul)
//mainContainer.appendChild(section)

const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');

const h1 = document.createElement('h1')
h1.innerText = 'food list'
section.appendChild(h1)

const ul = document.createElement('ul')
const li1 = document.createElement('li')
li1.innerText = 'biriyani'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'tehari'
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText = 'kichuri'
ul.appendChild(li3)

section.appendChild(ul)
mainContainer.appendChild(section)



// ----------------SET INNERHTML DIRECTLY---------
const sectionDress = document.createElement('section')
sectionDress.innerHTML = `
 <h1>this is be heading</h1>
 <ul>
    <li>tupi</li>
 </ul>
`
mainContainer.appendChild(sectionDress)