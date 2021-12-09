

/**
 * 
 * @param {UINT8 Array} frequencyArray 
 * @param {canvas context} ctx 
 * @param {number} width 
 * @param {number} height 
 */

 function render(frequencyArray, ctx, width, height) {
	// Clear the canvas
	ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'
	ctx.fillRect(0, 0, 1000, 500)
	ctx.fill()

	// calculate the number of lines and the step between each line
	const bars = frequencyArray.length 
	const step = height / bars
	const colorStep = 360 / bars

	ctx.lineWidth = 3

	frequencyArray.forEach((f, i) => {
    const barLength = f / 150 * width
    const x1 = width
    const y1 = step * i
    const x2 = width - barLength 
    const y2 = y1
		// begin a new path
		ctx.beginPath()
		// draw the path
		ctx.moveTo(x1, y1)
		ctx.lineTo(x2, y2)
		// set the stroke color
		ctx.strokeStyle = `hsla(${colorStep * i}, 100%, 50%, 1.0)`
		ctx.stroke()
	})
}

export default render