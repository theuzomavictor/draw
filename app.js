// VARIBLES DECLARATIONS AND DOM MANIPULATIONS

const canvasEl = document.getElementById("drawingCanvas")
const ctx = canvasEl.getContext("2d")
const clearEl = document.getElementById("clearButton")

let isDrawing = false
let lastX = 0
let lastY = 0


// MOUSE EVENTS

canvasEl.addEventListener("mousedown", function(event) {
    isDrawing = true
    lastX = event.offsetX
    lastY = event.offsetY
    drawPoint(lastX, lastY)
})

canvasEl.addEventListener("mousemove", function(event) {
    if (isDrawing) {
        drawLine(lastX, lastY, event.offsetX, event.offsetY)
        lastX = event.offsetX
        lastY = event.offsetY
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
    lastX = touch.clientX - canvasEl.offsetLeft
    lastY = touch.clientY - canvasEl.offsetTop
    drawPoint(lastX, lastY)

    event.preventDefault()
})

canvasEl.addEventListener("touchmove", function(event) {
    if (isDrawing) {
        const touch = event.touches[0]
        const currentX = touch.clientX - canvasEl.offsetLeft
        const currentY = touch.clientY - canvasEl.offsetTop
        drawLine(lastX, lastY, currentX, currentY)
        lastX = currentX
        lastY = currentY
    }

    event.preventDefault()
})

canvasEl.addEventListener("touchend", function() {
    isDrawing = false
})

canvasEl.addEventListener("touchcancel", function() {
    isDrawing = false
})



function drawPoint(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, 2, 0, 2 * Math.PI)
    ctx.fillStyle = "black"
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

clearEl.addEventListener("click", function() {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
})