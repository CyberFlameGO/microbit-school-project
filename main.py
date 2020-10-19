toggle = 0

def on_gesture_eight_g():
    if toggle == 1:
        basic.show_leds("""
            # . . . #
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            """)
input.on_gesture(Gesture.EIGHT_G, on_gesture_eight_g)

def on_button_pressed_a():
    basic.show_number(6)
    basic.pause(100)
    basic.show_number(9)
    basic.pause(500)
    basic.show_number(4)
    basic.pause(100)
    basic.show_number(2)
    basic.pause(100)
    basic.show_number(0)
    basic.pause(200)
    basic.show_leds("""
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # .
        """)
    basic.pause(200)
    basic.show_leds("""
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        """)
    basic.pause(200)
    basic.show_leds("""
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # .
        """)
    basic.pause(500)
    basic.show_leds("""
        . . . # .
        # # . . #
        . . . . #
        # # . . #
        . . . # .
        """)
    basic.pause(2000)
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_free_fall():
    if toggle == 1:
        basic.show_leds("""
            # # . # #
            # . . . #
            . # # # .
            . # . # .
            . # # # .
            """)
input.on_gesture(Gesture.FREE_FALL, on_gesture_free_fall)

def on_gesture_logo_up():
    if toggle == 1:
        basic.show_leds("""
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            """)
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_tilt_left():
    if toggle == 1:
        basic.show_leds("""
            . # . . .
            # . . # #
            # . . . .
            # . . # #
            . # . . .
            """)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_six_g():
    if toggle == 1:
        basic.show_leds("""
            # . . . #
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            """)
input.on_gesture(Gesture.SIX_G, on_gesture_six_g)

def on_gesture_screen_up():
    if toggle == 1:
        basic.show_leds("""
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
input.on_gesture(Gesture.SCREEN_UP, on_gesture_screen_up)

def on_gesture_screen_down():
    if toggle == 1:
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

def on_button_pressed_b():
    global toggle
    basic.show_icon(IconNames.SCISSORS)
    if toggle == 1:
        toggle = 0
    else:
        toggle = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    basic.show_string("uwu shake me")
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_gesture_tilt_right():
    if toggle == 1:
        basic.show_leds("""
            . . . # .
            # # . . #
            . . . . #
            # # . . #
            . . . # .
            """)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_gesture_logo_down():
    if toggle == 1:
        basic.show_leds("""
            . # # # .
            # . . . #
            . . . . .
            . # . # .
            . # . # .
            """)
        basic.show_arrow(ArrowNames.NORTH)
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

def on_gesture_three_g():
    if toggle == 1:
        basic.show_leds("""
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            """)
input.on_gesture(Gesture.THREE_G, on_gesture_three_g)
