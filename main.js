// get all keys
const keys = document.querySelectorAll(".key")

// play notes
function playNote(event) {
    console.log(event.type)
    // keyCode
    // typed or pressed key
    // if key exist
    // play audio
}

// click with mouse
keys.forEach(function(key) {
    window.addEventListener("click", playNote)
})

// keyboard type
window.addEventListener("keydown", playNote)