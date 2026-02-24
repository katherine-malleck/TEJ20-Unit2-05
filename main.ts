/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: Sep 2020
 * This program ...
*/

let temperatureInKelvin: number
let temperatureInCelcius: number


basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    temperatureInCelcius = input.temperature()
    temperatureInKelvin = temperatureInCelcius+273.15

    basic.clearScreen()
    basic.showString('The temperature is:' + temperatureInKelvin + " K.")

})
