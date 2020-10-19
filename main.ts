let toggle = 0
input.onGesture(Gesture.EightG, function on_gesture_eight_g() {
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
input.onButtonPressed(Button.A, function on_button_pressed_a() {
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
input.onGesture(Gesture.FreeFall, function on_gesture_free_fall() {
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
input.onGesture(Gesture.LogoUp, function on_gesture_logo_up() {
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
input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
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
input.onGesture(Gesture.SixG, function on_gesture_six_g() {
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
input.onGesture(Gesture.ScreenUp, function on_gesture_screen_up() {
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
input.onGesture(Gesture.ScreenDown, function on_gesture_screen_down() {
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
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    basic.showIcon(IconNames.Scissors)
    if (toggle == 1) {
        toggle = 0
    } else {
        toggle = 1
    }
    
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    basic.showString("uwu shake me")
})
input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
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
input.onGesture(Gesture.LogoDown, function on_gesture_logo_down() {
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
input.onGesture(Gesture.ThreeG, function on_gesture_three_g() {
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
