function calculateRactangleArea(){
    const ractangleLengthInput = document.getElementById('ractangle-length');
    const ractangleLengthText = ractangleLengthInput.value;
    const length = parseFloat(ractangleLengthText);
    console.log( length)
    
    const ractanglewidthInput = document.getElementById('ractangle-width')
    const ractangleWidthText = ractanglewidthInput.value;
    const width = parseFloat(ractangleWidthText);
    console.log(width);
    
    const area = length * width
    console.log('area of this ractangle', area)
    

    const ractangleArea = document.getElementById('ractangle-area')
    ractangleArea.innerText = area;
}