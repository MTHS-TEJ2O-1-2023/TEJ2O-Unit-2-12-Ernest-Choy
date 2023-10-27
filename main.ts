/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ernest
 * Created on: Oct 2023
 * This program changes color depending on distance
*/

// variables
let distanceToTarget: number = 0
const neoPixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// on button press
input.onButtonPressed(Button.A, function () {
  distanceToTarget = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters)
  basic.showNumber(distanceToTarget)
  basic.clearScreen()

  // if distance is less than 10 cm change led to Red
  if ((distanceToTarget) < 10) {
    neoPixelStrip.showColor(neopixel.colors(NeoPixelColors.Red))
  }

  // else change color to green
  else {
    neoPixelStrip.showColor(neopixel.colors(NeoPixelColors.Green))
  }
  basic.showIcon(IconNames.Happy)
})
