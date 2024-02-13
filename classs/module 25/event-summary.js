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
document.getElementById('event-listener').addEventListener('click', function(){
    const handlerStatus = document.getElementById('handler-status')
    handlerStatus.innerText = 'Text update by event listener button'
})

// option 2 recap
 document.getElementById('btn-update').addEventListener('click', function(){
        const inputField = document.getElementById('input-field');
        // console.log(inputFiled.value)
        const inputText = inputField.value;

        const p = document.getElementById('input-text-display')
        p.innerText = inputText;
        inputField.value = '';
 })