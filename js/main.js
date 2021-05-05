//get all keys
const keys = document.querySelectorAll('.key');

//play notes
function playNotes(event) {
    let audioKeyCode = getKeyCode(event);
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"`);
    const cantFoundAnyKey = !key;
    if (cantFoundAnyKey) {
        return;
    }
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"`);
    audio.currenTime = 0;
    audio.play();
}

//return key
function getKeyCode(event) {
    //  console.log(event);
    let keyCode;
    const isKeyboard = event.type == "keydown";
    if (isKeyboard) {
        keyCode = event.keyCode;
    } else {
        keyCode = event.target.dataset.key;
    }
    return keyCode;
}

//click mouse
keys.forEach(function (key) {
    key.addEventListener("click", playNotes);
})

//keyboard type
window.addEventListener("keydown", playNotes);





