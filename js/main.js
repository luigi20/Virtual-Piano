//get all keys
const keys = document.querySelectorAll('.key');

//get all audios
const audios = document.querySelectorAll('.audios');
//console.log(audios[1].children[0].dataset.key);
//console.log(audios.children);
//const teste = document.getElementById('teste');
//
//teste.setAttribute('autoplay');
//console.log(audios);
//console.log(teste);
//playing notes
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


window.addEventListener("keydown", playNotes);


//click with notes

//keyboard type
