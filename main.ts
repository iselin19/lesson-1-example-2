let light2 = 0
basic.forever(function () {
    light2 = pins.analogReadPin(AnalogPin.P0)
    if (light2 > 400) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.showLeds(`
            # # # . .
            . # # # .
            . . # # .
            . # # # .
            # # # . .
            `)
    }
})
