const canvasEl = document.getElementById("drawingCanvas")
const ctx = canvasEl.getContext("2d")
const clearEl = document.getElementById("clearButton")

let isDrawing = false

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

function drawDot(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, 2, 0, 2 * Math.PI)
    ctx.fillStyle = "black"
    ctx.fill()
}

clearEl.addEventListener("click", function() {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
})