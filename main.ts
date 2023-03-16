input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 10; index++) {
        music.playMelody("F G A G F E D E ", 120)
    }
})
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(500)
basic.clearScreen()
