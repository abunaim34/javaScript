function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

// bistarito
// function getARandomAlphabet(){
//     const alphabetString = 'abcdefghijklmnopqrstubwxyz';
//     const alphabets = alphabetString.split('')
//     // console.log(alphabets)

//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber)
//     // console.log(index)

//     const alphabet = alphabets[index]
//     // console.log( index, alphabet)
//     return alphabet;
// }

// shongkhipto
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstubwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];

    return alphabet;
}

// background add
function setBackgrounColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')

}

// background remove
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId)
    const textElementvalue = element.innerText;
    const value = parseInt(textElementvalue);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId)
    element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}