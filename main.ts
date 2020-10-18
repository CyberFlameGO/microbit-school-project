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
input.onButtonPressed(Button.B, function () {
	
})
