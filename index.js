function addCount() {
    console.log("add count")
    const button = document.getElementById("hit-button")
    button.innerText = Number(button.innerText) + 1
}

function reset() {
    const button = document.getElementById("hit-button")
    button.innerText = 0
}