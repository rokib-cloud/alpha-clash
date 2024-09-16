function handleKeyboardKeyUpEvent(event){
    // console.log(event)
    const playerPressed = event.key;
    // console.log('player pressed', playerPressed)
    // get the expected keypress
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    
    // console.log('random alphabet', expectedAlphabet);

    //checked matched or not
    if(playerPressed === expectedAlphabet){
        // console.log('you got a point');
        removeBackgroundColorById(expectedAlphabet);
        const currentScore= getTextElementByValue('score');
        const newScore = currentScore +1;
        setTextElementById('score',newScore)
        continueGame();
    }
    else{
        console.log('missed point')
        const currentLife = getTextElementByValue('life');
        const newLife = currentLife -1;
        setTextElementById('life', newLife);
    }
}


// function handleKeyButtonPress() {
//     console.log('button pressed')
// }
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet',alphabet);
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet.toUpperCase();
    setBackgroundColor(alphabet);
}
function play() {
    hideElementById('home-section');
    showElementById('play-ground');
    continueGame();
    handleKeyboardKeyUpEvent();
}