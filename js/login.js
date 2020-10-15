/**
 * 
 * Javascript code for login page 
 * 
 */


 var usernames = ['pippo@boolean.com', 'topolino@boolean.com', 'minnie@boolean.com', 'paperino@boolean.com', 'pluto@boolean.com'];
 var user = prompt('Inserire email utente!');

//  Mettere tutto minuscolo

user = user.toLowerCase();

// Setto le variabili utili al controllo
 var nutenti = usernames.length;
 var userFound = false;  




// Inizio ciclo FOR
 for (var i = 0; i < nutenti; i++) {
   var uatt = usernames[i];
   if (user == uatt) {
      userFound = true;
    } 

 }

 if (userFound == true) {
    document.getElementById('user').innerHTML = 'Utente Registrato!';
 } else {
    user = prompt('Utente non riconosciuto, inserire nuovamente Email di registrazione!');
}
