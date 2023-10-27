/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/

// variables
let distanceToTarget: number = 0
let neoPixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
  distanceToTarget = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters)
  basic.showNumber(distanceToTarget)
  basic.clearScreen()
    if ((distanceToTarget) < 10) {
      neoPixelStrip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    else {
        basic.clearScreen()
        neoPixelStrip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    basic.showIcon(IconNames.Happy)
})