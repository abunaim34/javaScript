// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
// }

function handleKeybordKeyupEvent(event){
    const playerPressed = event.key;
    console.log('player passed', playerPressed)

    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase()
    // console.log(playerPressed, expectedAlphabet)

    if(playerPressed === expectedAlphabet){
        console.log('you got a point')
        // console.log('you have preesed correctly', expectedAlphabet)


        // songkhipto
        const currentScore = getTextElementValueById('current-score')
        // console.log(currentScore)

        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore)



        // ------------bistarito--------------
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)
        // console.log(currentScore)

                
        // const newScore = currentScore + 1;

        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }
    else{
        console.log('you are lost. play the again game')


        // songkhipto
        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;

        setTextElementValueById('current-life', updateLife)


        // bistarito
        // const currentLIfeElement = document.getElementById('current-life')
        // const currentLifeText = currentLIfeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLIfe = currentLife - 1;

        // currentLIfeElement.innerText = newLIfe
        if(updateLife === 0){
            gameOver()
        }
    }
}

document.addEventListener('keyup', handleKeybordKeyupEvent)

function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgrounColorById(alphabet);
}

function play(){
    // hide Everything only show the playgroun
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // rest score and life
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)

    continueGame();
}

function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')

    // update final score
    const lastScore = getTextElementValueById('current-score')
    console.log(lastScore)

    setTextElementValueById('last-score', lastScore)


    const currentAlphabet = getElementTextById('current-alphabet')
    // console.log(currentAlphabet)

    removeBackgroundColorById(currentAlphabet)
}

<div id="container">
<p>1</p>
<p>2</p>
<p>3</p>
</div>

const container= document.getElementById('container')
console.log(container.children.length)