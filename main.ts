let X = 0
input.onButtonPressed(Button.A, function () {
    X = 0
    while (X <= 5) {
        led.plot(X, 0)
        basic.pause(200)
        basic.clearScreen()
        X += 1
    }
})
input.onButtonPressed(Button.B, function () {
    X = 0
    while (X <= 5) {
        led.plot(0, X)
        basic.pause(200)
        basic.clearScreen()
        X += 1
    }
})
