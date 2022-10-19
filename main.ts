let xvalue = 0
let yvalue = 0
input.onButtonPressed(Button.A, function () {
    xvalue = 0
    for (let index = 0; index < 5; index++) {
        led.plot(xvalue, 0)
        basic.pause(200)
        basic.clearScreen()
        xvalue += 1
    }
})
input.onButtonPressed(Button.B, function () {
    yvalue = 0
    for (let index = 0; index < 5; index++) {
        led.plot(0, yvalue)
        basic.pause(200)
        basic.clearScreen()
        yvalue += 1
    }
})
basic.forever(function () {
	
})
