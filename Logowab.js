const audio = document.getElementById("audio");
const audioIcon = document.getElementById("audioIcon");
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
})

document.addEventListener("touchmove", e => {
    cursor.style.left = e.touches[0].clientX + "px"
    cursor.style.top = e.touches[0].clientY + "px"
})

const playAudio = () => {
    audioIcon.classList.toggle("bx-pause")
    audioIcon.classList.toggle("bx-play")
    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }
}