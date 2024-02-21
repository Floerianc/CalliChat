enum RadioMessage {
    message1 = 49434
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (CUR_B == 1) {
        Nummer += 1
    }
    if (CUR_B == 2) {
        Nummer2 += 1
    }
    if (CUR_B == 3) {
        Nummer3 += 1
    }
    if (CUR_B == 4) {
        Nummer4 += 1
    }
    if (CUR_B == 5) {
        Nummer5 += 1
    }
    if (CUR_B == 6) {
        Nummer6 += 1
    }
    if (CUR_B == 7) {
        Nummer7 += 1
    }
    if (CUR_B == 8) {
        Nummer8 += 1
    }
    if (CUR_B == 9) {
        Nummer9 += 1
    }
    if (CUR_B == 10) {
        Nummer10 += 1
    }
    if (CUR_B == 11) {
        Nummer11 += 1
    }
    if (CUR_B == 12) {
        Nummer12 += 1
    }
    if (CUR_B == 13) {
        Nummer13 += 1
    }
    if (CUR_B == 14) {
        Nummer14 += 1
    }
    if (CUR_B == 15) {
        Nummer15 += 1
    }
    if (CUR_B == 16) {
        Nummer16 += 1
    }
    if (CUR_B == 17) {
        Nummer17 += 1
    }
    if (CUR_B == 18) {
        Nummer18 += 1
    }
    if (CUR_B == 19) {
        Nummer19 += 1
    }
    if (CUR_B == 20) {
        Nummer20 += 1
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    MSG = "" + B1 + B2 + B3 + B4 + B5 + B6 + B7 + B8 + B9 + B10 + B11 + B12 + B13 + B14 + B15 + B16 + B17 + B18 + B19 + B20
    radio.sendString(MSG)
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Click), function () {
    if (CUR_B == 1) {
        B1 = Letterking[Nummer]
    }
    if (CUR_B == 2) {
        B2 = Letterking[Nummer2]
    }
    if (CUR_B == 3) {
        B3 = Letterking[Nummer3]
    }
    if (CUR_B == 4) {
        B4 = Letterking[Nummer4]
    }
    if (CUR_B == 5) {
        B5 = Letterking[Nummer5]
    }
    if (CUR_B == 6) {
        B6 = Letterking[Nummer6]
    }
    if (CUR_B == 7) {
        B7 = Letterking[Nummer7]
    }
    if (CUR_B == 8) {
        B8 = Letterking[Nummer8]
    }
    if (CUR_B == 9) {
        B9 = Letterking[Nummer9]
    }
    if (CUR_B == 10) {
        B10 = Letterking[Nummer10]
    }
    if (CUR_B == 11) {
        B11 = Letterking[Nummer11]
    }
    if (CUR_B == 12) {
        B12 = Letterking[Nummer12]
    }
    if (CUR_B == 13) {
        B13 = Letterking[Nummer13]
    }
    if (CUR_B == 14) {
        B14 = Letterking[Nummer14]
    }
    if (CUR_B == 15) {
        B15 = Letterking[Nummer15]
    }
    if (CUR_B == 16) {
        B16 = Letterking[Nummer16]
    }
    if (CUR_B == 17) {
        B17 = Letterking[Nummer17]
    }
    if (CUR_B == 18) {
        B18 = Letterking[Nummer18]
    }
    if (CUR_B == 19) {
        B19 = Letterking[Nummer19]
    }
    if (CUR_B == 20) {
        B20 = Letterking[Nummer20]
    }
    CUR_B += 1
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
let B20 = ""
let B19 = ""
let B18 = ""
let B17 = ""
let B16 = ""
let B15 = ""
let B14 = ""
let B13 = ""
let B12 = ""
let B11 = ""
let B10 = ""
let B9 = ""
let B8 = ""
let B7 = ""
let B6 = ""
let B5 = ""
let B4 = ""
let B3 = ""
let B2 = ""
let B1 = ""
let MSG = ""
let Nummer20 = 0
let Nummer19 = 0
let Nummer18 = 0
let Nummer17 = 0
let Nummer16 = 0
let Nummer15 = 0
let Nummer14 = 0
let Nummer13 = 0
let Nummer12 = 0
let Nummer11 = 0
let Nummer10 = 0
let Nummer9 = 0
let Nummer8 = 0
let Nummer7 = 0
let Nummer6 = 0
let Nummer5 = 0
let Nummer4 = 0
let Nummer3 = 0
let Nummer2 = 0
let Letterking: string[] = []
let Nummer = 0
let CUR_B = 0
let recieving = false
CUR_B = 1
Nummer = 1
radio.setGroup(1)
Letterking = [
".",
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]
basic.forever(function () {
    if (CUR_B == 1) {
        basic.showString("" + (Letterking[Nummer]))
    }
    if (CUR_B == 2) {
        basic.showString("" + (Letterking[Nummer2]))
    }
    if (CUR_B == 3) {
        basic.showString("" + (Letterking[Nummer3]))
    }
    if (CUR_B == 4) {
        basic.showString("" + (Letterking[Nummer4]))
    }
    if (CUR_B == 5) {
        basic.showString("" + (Letterking[Nummer5]))
    }
    if (CUR_B == 6) {
        basic.showString("" + (Letterking[Nummer6]))
    }
    if (CUR_B == 7) {
        basic.showString("" + (Letterking[Nummer7]))
    }
    if (CUR_B == 8) {
        basic.showString("" + (Letterking[Nummer8]))
    }
    if (CUR_B == 9) {
        basic.showString("" + (Letterking[Nummer9]))
    }
    if (CUR_B == 10) {
        basic.showString("" + (Letterking[Nummer10]))
    }
    if (CUR_B == 11) {
        basic.showString("" + (Letterking[Nummer11]))
    }
    if (CUR_B == 12) {
        basic.showString("" + (Letterking[Nummer12]))
    }
    if (CUR_B == 13) {
        basic.showString("" + (Letterking[Nummer13]))
    }
    if (CUR_B == 14) {
        basic.showString("" + (Letterking[Nummer14]))
    }
    if (CUR_B == 15) {
        basic.showString("" + (Letterking[Nummer15]))
    }
    if (CUR_B == 16) {
        basic.showString("" + (Letterking[Nummer16]))
    }
    if (CUR_B == 17) {
        basic.showString("" + (Letterking[Nummer17]))
    }
    if (CUR_B == 18) {
        basic.showString("" + (Letterking[Nummer18]))
    }
    if (CUR_B == 19) {
        basic.showString("" + (Letterking[Nummer19]))
    }
    if (CUR_B == 20) {
        basic.showString("" + (Letterking[Nummer20]))
    }
})
