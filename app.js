// VARIBLES DECLARATIONS AND DOM MANIPULATIONS

const canvasEl = document.getElementById("drawingCanvas")
const ctx = canvasEl.getContext("2d")
const clearEl = document.getElementById("clearButton")

let isDrawing = false

// MOUSE EVENTS

canvasEl.addEventListener("mousedown", function(event) {
    isDrawing = true
    drawDot(event.offsetX, event.offsetY)
})

canvasEl.addEventListener("mousemove", function(event) {
    if (isDrawing) {
        drawDot(event.offsetX, event.offsetY)
    }
})

canvasEl.addEventListener("mouseup", function() {
    isDrawing = false
})

canvasEl.addEventListener("mouseout", function() {
    isDrawing = false
})

// TOUCH EVENTS

canvasEl.addEventListener("touchstart", function(event) {
    isDrawing = true

    const touch = event.touches[0]
    drawDot(touch.clientX - canvasEl.offsetLeft, touch.clientY - canvasEl.offsetTop)

    event.preventDefault()
})

canvasEl.addEventListener("touchmove", function(event) {
    if (isDrawing) {
        const touch = event.touches[0]
        drawDot(touch.clientX - canvasEl.offsetLeft, touch.clientY - canvasEl.offsetTop)
    }

    event.preventDefault()
})

canvasEl.addEventListener("touchend", function() {
    isDrawing = false
})

canvasEl.addEventListener("touchcancel", function() {
    isDrawing = false
})



function drawDot(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, 2, 0, 2 * Math.PI)
    ctx.fillStyle = "black"
    ctx.fill()
}

clearEl.addEventListener("click", function() {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
})