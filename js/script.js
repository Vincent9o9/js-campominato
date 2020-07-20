// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta,
// sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo
// possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.
var arrayPc = [];
var utente = [];


while (arrayPc.length < 16) {
    var numR = arrayRandom(1, 100);
    if (arrayPc.includes(numR) == false) {
        arrayPc.push(numR);
    }
}

console.log(arrayPc);

while (utente.length < 5) {
    var numU = parseInt(prompt('inserisci un numero da 1 e 100'))
    if (utente.includes(numU) == false) {
        utente.push(numU);
    } else {
        alert('non valido inserisci un altro numero')
    }
}

console.log(utente);


// funzione per generare numeri random


function arrayRandom (min, max) {
    return Math.floor(Math.random () * (max - min +1) + min);
}
