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

//PC

var arrayPc = [];

while (arrayPc.length < 16) {
    var numR = arrayRandom(1, 100);
    if (arrayPc.includes(numR) == false) {
        arrayPc.push(numR);
    }
}

// console.log(arrayPc);

//UTENTE

var utente = [];
var massimo = 100;
var possibilità = massimo - arrayPc.length;
var inserito;
var trovato = false;

while (utente.length < possibilità && trovato == false) {
    inserito = parseInt(prompt('inserisci un numero da 1 e 100'));

    while (inserito <= 0 || inserito > massimo) {
        inserito = parseInt(prompt('attenzione numero fuori da range, inserisci un numero da 1 a 100'));
    }
    if (arrayPc.includes(inserito)) {
        alert ('hai perso con punti ' + utente.length);
        trovato = true;
    } else if (utente.includes(inserito) == false) {
        utente.push(inserito);
    } else {
        alert(inserito + 'numero già inserito, inserisci un altro numero');
    }
}

// console.log(utente);


// funzione per generare numeri random


function arrayRandom (min, max) {
    return Math.floor(Math.random () * (max - min +1) + min);
}
