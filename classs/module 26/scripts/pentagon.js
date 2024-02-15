// function calculatePentagonArea(){
//     const pen = document.getAreaById('pentagon-pen')
//     console.log('pen value', pen)
// }

// function getAreaById(textFieldId){
//     const textField = document.getElementById(textFieldId)
//     const textFieldText = textField.value;
//     const tinputValue = parseFloat(textFieldText)
//     return tinputValue;
// }

function calculatePentagonArea(){
    const perimeter = document.getInputValueById('pentagon-peri')
    console.log('peri value', perimeter)
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText)
    
    return value;
}

const nameOfOrganization = document.getElementById("name").value;

console.log(nameOfOrganization);