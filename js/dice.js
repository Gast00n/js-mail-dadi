/**
 * 
 * Javascript code for dice page 
 * 
 */

// Richiesta nome utente

var user = prompt('Ciao! Chi vuole giocare?');

console.log(user);
document.getElementById('user').innerHTML = user;
// Definizione variabili giocatore e COM

// 1. Giocatore
var risultatoP1 = Math.round( Math.random() * 6 );
document.getElementById('player-num').innerHTML = risultatoP1;

// 2. COM
var risultatoCOM = Math.round( Math.random() * 6 );
document.getElementById('com-num').innerHTML = risultatoCOM;


// 3. Comparazione risultati e vincitore di giornata

if (risultatoP1 > risultatoCOM) {
    document.getElementById('result').innerHTML = user;
    document.getElementById('message').innerHTML = 'Complimenti ' + user + ' hai vinto!';

} else if (risultatoP1 < risultatoCOM) {
    document.getElementById('result').innerHTML = 'Computer';
    document.getElementById('message').innerHTML = 'Maledizione ' + user + ', le macchine hanno vinto, per stavolta, tenta di nuovo la fortuna!';

} else {
    document.getElementById('result').innerHTML = 'E\' un pareggio!';
    document.getElementById('message').innerHTML = 'Per un pelo ' + user + ', prossima volta, andrà meglio di sicuro!';

}