let toggle = 0
input.onGesture(Gesture.EightG, function () {
    if (toggle == 1) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(6)
    basic.pause(100)
    basic.showNumber(9)
    basic.pause(500)
    basic.showNumber(4)
    basic.pause(100)
    basic.showNumber(2)
    basic.pause(100)
    basic.showNumber(0)
    basic.pause(200)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . # .
        # # . . #
        . . . . #
        # # . . #
        . . . # .
        `)
    basic.pause(2000)
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.FreeFall, function () {
    if (toggle == 1) {
        basic.showLeds(`
            # # . # #
            # . . . #
            . # # # .
            . # . # .
            . # # # .
            `)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (toggle == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (toggle == 1) {
        basic.showLeds(`
            . # . . .
            # . . # #
            # . . . .
            # . . # #
            . # . . .
            `)
    }
})
input.onGesture(Gesture.SixG, function () {
    if (toggle == 1) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    if (toggle == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    if (toggle == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Scissors)
    if (toggle == 1) {
        toggle = 0
    } else {
        toggle = 1
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("uwu shake me")
})
input.onGesture(Gesture.TiltRight, function () {
    if (toggle == 1) {
        basic.showLeds(`
            . . . # .
            # # . . #
            . . . . #
            # # . . #
            . . . # .
            `)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (toggle == 1) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . . . .
            . # . # .
            . # . # .
            `)
        basic.showArrow(ArrowNames.North)
    }
})
input.onGesture(Gesture.ThreeG, function () {
    if (toggle == 1) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
