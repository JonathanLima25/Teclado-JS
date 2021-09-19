// get all keys
const keys = document.querySelectorAll(".key")

// play notes
function playNote(event) {
    
    // keyCode
    let audioKeyCode = getKeyCode(event);

    // typed or pressed key
    const key = document.querySelector(`[data-key="${audioKeyCode}"]`)
    console.log(key)

    // if key exist
    const isKeyExists = key;

    if(!isKeyExists) {
        return;
    }

    // play audio
}

function getKeyCode(event) {
    let keyCode;

    const isKeyBoard = event.type === "keydown"
    if(isKeyBoard){
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }
    return keyCode;
}

// click with mouse
keys.forEach(function(key) {
    window.addEventListener("click", playNote)
})

// keyboard type
window.addEventListener("keydown", playNote)