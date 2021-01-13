const textDl = document.getElementById('text')
const speedDl = document.getElementById('speed')
const text = 'Welcome ! We Love Programming!'

let ids = 1
let speed = 300 / speedDl.value

writeText()

function writeText() {
    textDl.innerText = text.slice(0, ids)

    ids++

    if(ids > text.length) {
        ids = 1
    }

    setTimeout(writeText, speed)
}


speedDl.addEventListener('input', (e) => speed = 300 / e.target.value)