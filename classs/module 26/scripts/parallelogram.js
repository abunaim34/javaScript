// function calculateParallelogramArea(){
//     const base = getParallelogramArea()
//     console.log(base)
// }

// function getParallelogramArea(){
//     const parallelogramInput = document.getElementById('parallelogram-base');
//     const parallelogramText = parallelogramInput.value;
//     const base = parseFloat(parallelogramText)
//     return base;
// }


function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base')
    console.log('base value', base)

    const height = getInputValueById('Parallelogram-height')
    console.log('height value', height)

    const area = base * height
    console.log('area of parallelogram', area)

    setInnerTextById('parallelogram-area', area)
}

function getInputValueById(inputFieldId){
    const inputFiel = document.getElementById(inputFieldId)
    const inputValueText = inputFiel.value;
    const inputValue = parseFloat(inputValueText)
    
    return inputValue;
}


function setInnerTextById(elementId, value){
    const element = document.getElementById(elementId)
    element.innerText = value;
}