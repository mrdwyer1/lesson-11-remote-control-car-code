radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        cuteBot.turnleft()
    } else if (receivedNumber == 2) {
        cuteBot.turnright()
    } else if (receivedNumber == 3) {
        cuteBot.forward()
    }
})
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
