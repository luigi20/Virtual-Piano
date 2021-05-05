const keys = document.querySelectorAll('.key');

function getKeyCode(event) {
    const isKeyboard = event.type == 'keydown';
    let keyCode;
    if (isKeyboard) {
        keyCode = event.keyCode;
    } else {
        keyCode = event.target.dataset.key;
    }
    return keyCode;
}

function playNotes(event) {
    const keyCode = getKeyCode(event);
    const key = document.querySelector(`.key[data-key='${keyCode}']`);

    const cantFoundKey = !key;
    if (cantFoundKey) {
        return;
    }
    const audioPlayCode = document.querySelector(`audio[data-key='${keyCode}']`);
    audioPlayCode.currentTime = -1;
    addClassPlaying(key);
    audioPlayCode.play();
}

function addClassPlaying(key) {
    key.classList.add("playing");
}

function removePlayingClass(key) {
    key.target.classList.remove("playing");
}

function registerEvents() {
    keys.forEach(function (event) {
        event.addEventListener("click", playNotes);
        event.addEventListener("transitionend", removePlayingClass);
    })
    //keyboard type
    window.addEventListener('keydown', playNotes);
}

window.addEventListener('load', registerEvents());

