// get all keys
const keys = document.querySelectorAll(".key")

// play notes
function playNote(event) {
    
    // keyCode
    let audioKeyCode = getKeyCode()
    // typed or pressed key
    // if key exist
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
}

// click with mouse
keys.forEach(function(key) {
    window.addEventListener("click", playNote)
})

// keyboard type
window.addEventListener("keydown", playNote)