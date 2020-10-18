input.onGesture(Gesture.EightG, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . # # # .
        # . . . #
        # . . . #
        `)
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
    basic.showLeds(`
        # # . # #
        # . . . #
        . # # # .
        . # . # .
        . # # # .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . # . . .
        # . . # #
        # . . . .
        # . . # #
        . # . . .
        `)
})
input.onGesture(Gesture.SixG, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Scissors)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . # .
        # # . . #
        . . . . #
        # # . . #
        . . . # .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . . .
        . # . # .
        . # . # .
        `)
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
})
