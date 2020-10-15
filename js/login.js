/**
 * 
 * Javascript code for login page 
 * 
 */


 var usernames = ['pippo@boolean.com' , 'topolino@boolean.com' , 'minnie@boolean.com' , 'paperino@boolean.com' , 'pluto@boolean.com' , ];
 var user = prompt('Inserire email utente!').toLowerCase();

 var nutenti = usernames.lenght;   

 for (var i = 0; i < nutenti ; i++) {

    console.log(i);
    console.log(usernames);
    console.log(user);
    console.log(nutenti);
    

    // if (user === usernames[i]) {
    //     console.log(i);
        
    //     var risultato = 1;
    // } else {
    //     var risultato = 0;
    // }

 }
 

//  if (risultato == 1) {
//     document.getElementById('user').innerHTML = 'Utente Registrato!';
//  } else {
//     var user = prompt('Utente non riconosciuto, nuovamente Email di registrazione!').toLowerCase;
//  }
 