document.getElementById('item-2').addEventListener('click', function(event){
    console.log('item-2 clicked')
    event.stopPropagation();
})

document.getElementById('item-ul').addEventListener('click', function(){
    console.log('ul clikkkkh')
})

document.getElementById('section-container').addEventListener('click', function(){
    console.log('confjj clikkkkh')
})

document.getElementById('body').addEventListener('click', function(){
    console.log('body clikkkkh')
})