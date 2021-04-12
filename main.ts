input.onGesture(Gesture.Shake, function () {
    basic.showString("" + hour + ":" + minute + ":" + second)
})
let second = 0
let minute = 0
let hour = 0
basic.showString("A GClock")
basic.forever(function () {
    second += 1
    if (second >= 60) {
        second = 0
        minute += 1
    }
    if (minute >= 60) {
        minute = 0
        hour += 1
    }
    if (hour >= 24) {
        hour = 0
    }
    basic.pause(1000)
})
