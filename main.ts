let 蚊香 = 0
function 無黑線 () {
    蚊香 = -90
    while (mooncar.UltrasonicSensor() != 5) {
        mooncar.MoonCarLR(90, 蚊香)
        basic.pause(100)
        if (蚊香 == -89.95) {
            蚊香 = 0
        } else {
            蚊香 += 0.05
        }
    }
}
basic.forever(function () {
    while (mooncar.UltrasonicSensor() < 5) {
        無黑線()
    }
})
