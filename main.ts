let currentDirection = 0
let currentTemperature = 0
let currentSpeed = 0
let shakeNum = 0
let flashLight: Image = null
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (currentDirection))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (Math.round(currentTemperature * 1.8 + 32)))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (currentSpeed))
})
input.onGesture(Gesture.Shake, function () {
    if (shakeNum == 0) {
        flashLight = images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        flashLight.showImage(0)
        shakeNum = 1
    } else if (shakeNum == 1) {
        basic.clearScreen()
        shakeNum = 0
    }
})
basic.forever(function () {
    currentDirection = input.compassHeading()
    currentSpeed = input.acceleration(Dimension.X)
    currentTemperature = input.temperature()
})
