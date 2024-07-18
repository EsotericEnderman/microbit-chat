radio.setGroup(1);

function onButtonAPressed() {
    radio.sendString("Micro Chat!");
}

function onReceivedString(receivedString: string) {
    basic.showString(receivedString);
}

input.onButtonPressed(Button.A, onButtonAPressed);
radio.onReceivedString(onReceivedString);