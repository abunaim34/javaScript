// ---------------ONCLICK FUNCTION-------------

// option 1 >directly set on the html,
// <button onclick="document.body.style.backgroundColor='yellow' ">make yellow</button>

// option 2 (important it's usable)
function makeRed(){
    document.body.style.backgroundColor='red'
}

// option 3
const makeBlueButto = document.getElementById('make-blue')
makeBlueButto.onclick = makeBLue

function makeBLue(){
    document.body.style.backgroundColor = 'blue'
}

// option 4 (some time usable)
const makePinkButto = document.getElementById('make-pink')
makePinkButto.onclick = function makePink(){
    document.body.style.backgroundColor = 'pink'
}

// option 5>part 1
const makeGreenButton = document.getElementById('make-green')
makeGreenButton.addEventListener('click', makeGreen)

function makeGreen(){
    document.body.style.backgroundColor = 'green'
}

// Option 5>part 2
const makeSkyblueButton = document.getElementById('make-skyblue')
makeSkyblueButton.addEventListener('click',
 function makeSkyblue(){
    document.body.style.backgroundColor = 'skyblue'
})

// option 6 (it's final usable)
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})


//---------------handleOnCLick---------------
// function handleOnCLick(){
//     console.log('button clicked')
// }

// option 1
function handleOnCLick(){
    const handlerStatus = document.getElementById('handler-status')
    handlerStatus.innerText = 'handle by function attached on click'
}

// option 2 > event-summary.html er moddhe ache
// document.getElementById('event-listener').addEventListener('click', function(){
//     const handlerStatus = document.getElementById('handler-status')
//     handlerStatus.innerText = 'Text update by event listener button'
// })

// option 2 recap
document.getElementById('btn-update').addEventListener('click', function(){
//    const inputField = document.getElementById('input-field');
//    // console.log(inputFiled.value)
//    const inputText = inputField.value;

//    const p = document.getElementById('input-text-display')
//    p.innerText = inputText;
//    inputField.value = '';
console.log('its be again')
})