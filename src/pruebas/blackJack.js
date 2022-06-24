console.log("WELCOME TO BLACK JACK");

function getMessage(mano) {
    if(mano == 21) {
        return "BLACKJACK";
    } else {
        var message = mano > 21 ? "PERDISTE" : "Sigue Jugando";
        return message;
    }
}

function getRamdomCard() {
    return Math.floor(Math.random() *11) + 1;
}

let carta1 = getRamdomCard();
let carta2 = getRamdomCard();

console.log("Carta 1: " + carta1 + " Carta 2:" + carta2);

let mano = carta1 + carta2;
console.log("Mano: " + mano);

var message = getMessage(mano);
while(message === "Sigue Jugando") {
    mano += getRamdomCard();
    var message = getMessage(mano);
}

console.log(message);