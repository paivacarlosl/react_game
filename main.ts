input.onPinPressed(TouchPin.P0, function () {
    if (tocar == false) {
        tocar = true
        cont += 1
        basic.showLeds(`
            # # # . .
            # # # . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (tocar == false) {
        tocar = true
        cont2 += 1
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    tocar = false
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(randint(2000, 7000))
    basic.showIcon(IconNames.Heart)
})
let tocar = false
let cont = 0
let cont2 = 0
basic.forever(function () {
    if (cont == 3) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(500)
        }
        basic.showString("Player 1 - Win")
        cont2 = 0
        cont = 0
    } else if (cont2 == 3) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(500)
        }
        basic.showString("Player 2- Win")
        cont2 = 0
        cont = 0
    }
})
