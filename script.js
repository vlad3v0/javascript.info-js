// 00000000000000000000000000000000000000000000000000000000000000000000
// 00----------------------------------------------------------------00
// 00---------------- EX Javascripts.info ---------------------------00
// 00----------------------------------------------------------------00
// 00000000000000000000000000000000000000000000000000000000000000000000

// ---------------- EX Controllo ---------------------------


// let domanda = "Qual'è il nome ufficiale di javascript?";

// let risposta = prompt(domanda);

// console.log(risposta);
// risposta = risposta.toUpperCase();

// for (let i = 0; i < 1; i++) {
//     if (risposta == "") {
//         alert("inserisci qualcosa scemo!");
//         break;
//     }
//     if (risposta == "ECMASCRIPT") {
//         alert("Right!");
        
//     }  
//     else
//     {
//         alert("You don't Know?");
//     }
    
// }

// --------------------------------------------------------------

// let age = prompt('age?', 18);
// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );

// --------------------------------------------

// let number = prompt("inserisci un numero!");
// number = Number(number);

// console.log(number);
// if (!number) {
//     alert("Devi inserire un numero scemo!");
// }
// else if (number > 0) {
//     alert("1");
// }
// else if (number <= 0) {
//     alert("-1");
// }

// --------------------------------------------



// let result =  (a + b < 4) ? "Below" : "Over"; 

// // console.log(result);

// let message = (login == "Director") ? "Greetings" : (login == "") ? "no login" : (login == "") ?  : "" 

// --------------------------------------------

// let age = prompt("");

// age = Number();

// console.log(age);


// if ((age == 0) || (age < 0)) {
//     alert("devi inserire un numero");
//     age = prompt("");
// }
// if ((age >= 14) && (age <= 90)) { 
//     alert("Access Ok")
// }
// else {
//     alert("Stop")
// }

// console.log(age);

// ---------- EX CONTROLLO VERIFICA LOGIN ---------------

// let requireAccess = prompt("Ciao chi sei?");
// console.log(requireAccess);


// if ((requireAccess == "") || (requireAccess == null )) {
//     alert("Riprova");
// }
// else if (requireAccess == "Utente") {
//     let password = prompt("inserisci la password");
//     console.log(password);
//     if ((password == "") || (password == null )) {
//         alert("Devi inserire la password");
//     }
//     else if (password == "TheMaster") {
//         alert("Accesso Autorizzato! Benvenuto Utente =) !")
//     } 
//     else {
//         alert("Non ti Conosco!!!")
//     } 
// }  
// else {
//     alert("Inserisci un Utente Valido!!!")
// }



// let num;

// num = prompt("inserisci un numero maggiore di 100", 0);

// while (num <= 100 ) {
//    if (num > 100) {
//        alert("Corretto");
//        break;
//    } else 
//    {
//        alert("Ripeti")
//    }
//    num = prompt("numero maggiore di 100", 0);
// }

// let num;

// do {
//   num = prompt("Enter a num greater than 100?", 0);
// } while (num <= 100 && num);



// ---------- EX Cicli ---------------

// for (let i = 0; i < 3; i++) {
//     alert( 'Ciao' );
//   }
  
//   let i = 0;

//   while (i < 3) {
//       alert(i);
//       i++;
//   }

// ---------- EX Cicli ---------------

// let n = 10;

// nextprime:
// for (let i = 2; i <= n; i++) {
    
//     for (let j = 0; j < i; j++) {
//         if (i % 2 == 0) {
//             continue nextprime; // inserire etichetta per uscire dal ciclo
//         }
         
//     }
//     document.write(i + "<br>");   
// }

// -------------- Uscire da un ciclo con un etichetta: ---------------

// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Value at coords (${i},${j})`, '');
  
//       // if an empty string or canceled, then break out of both loops
//       if (!input) break outer; // (*)
  
//       // do something with the value...
//     }
//   }
//   alert('Done!');

// -------------- while function ---------------


// let i = 0;
// while (++i < 5) console.log(i);


// let i = 0;
// while (i++ < 5) console.log(i);

// for (let i = 0; i < 5; i++) console.log( i );
// console.log('-------/Spazio\\----------');

// for (let i = 0; i < 5; ++i) console.log( i );

// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
//   }

//   console.log('-------------.-.-.-.-.-.-------------');
  
//   let i = 0;
//   while (i < 3) {
    
//     i++;
//     console.log('number '+ i + '!')
      
//   }

  
// ---------------------- EX  Worm  SWITCH CASEk--------------

// let risposta = prompt("quanto è lungo?");
// let worm = risposta;

// switch (worm) {
//   case '3':
//     alert( 'Too small' );
//     break;
//   case '4':
//     alert( 'Exactly!' );
//     break;
//   case '5':
//     alert( 'Too large' );
//     break;
//   default:
//     alert( "mmm troppo lontano" );
// }


// ---

// let a = '1';
// let b = 0;

// switch (+a) {  
//   case b + 1: // the result is equal to a
//     alert('this run, because +a is 1, exactly equal b + 1')
//     break;

//   default:
//     alert('this doesn\'t  run')
//     break;
// }


// ------------------- raggruppamento/Grouping case------------------------------

// for (let index = 0; index < 5; index++) {

// let b = prompt('Inserisci un numero');
// let a = parseInt(b) ;

// console.log(a);
//   switch (a) {
//     case 2: // (*) grouped two cases
//     case 4:
//     case 8:
//     case 10:
//       alert('this number is equal!');
//       break;
//     case 3: // (*) grouped two cases
//     case 5:
//     case 7:
//     case 9:
//       alert("This number is odd");
//       break;
  
//     default:
//       alert('The result is strange. Really.');
//   }
  
// }
// -------Scrivi il codice usando if..elsequale corrisponderebbe a quanto segue switch:---
// // ---- 
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
// ----- else if traduction-------------

// let browserInput = prompt('Che browser utilizzi?');
// let browser = browserInput.toLowerCase();

// if (browser == 'chrome') {
//   alert('Okay we support these browsers too');
// } 
// else if (browser == 'edge') {
//   alert('You\'ve got the Edge!');
// } 
// else if (browser == 'firefox') {
//   alert('Okay we support these browsers too');
// }
// else if (browser == 'opera') {
//   alert('Okay we support these browsers too');
// }
// else if (browser == 'safari') {
//   alert('Okay we support these browsers too');
// } 
// else alert('We hope that this page looks ok!');

// ---------- alternative solction -------------

// if (browser == 'edge') {
//   alert( "You've got the Edge!" );
// }
// else if ( browser == 'chrome' || browser == 'opera' || browser == 'safari' || browser == 'firefox') {

//   alert('Okay we support these browsers too');
// }
// else {
//   alert( 'We hope that this page looks ok!' );
// }

// ex ----------- Riscrivi il codice seguente usando una singola switchistruzione: -----

// let a = +prompt('a è uguale ?');
// let a = parseInt(prompt('a è uguale ?'));

// // if (a == 0) {
// //   alert( 0 );
// // }
// // if (a == 1) {
// //   alert( 1 );
// // }

// // if (a == 2 || a == 3) {
// //   alert( '2,3' );
// // }

// // ----

// switch (a) {
//   case 0:
//     alert( 0 )
//     break;
//   case 1:
//     alert( 1 )
//     break;
//   case 2:
//   case 3:
//     alert( '2,3' )
//     break;
// }

// [ex Function] ------------------------------------------------------

// function showMessage() {
//   let message = "Hello, I'm JavaScript!"; // local variable

//   alert( message );
// }

// showMessage(); // Hello, I'm JavaScript!

// alert( message ); // <-- Error! The variable is local to the function



// let userName = 'John'; // external variable

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// showMessage(); // Hello, John

// ------------ function parametri ---------------

// function showMessage(from, text) { // arguments: from, text
  // alert(from + ': ' + text);
// }
// 
// showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
// showMessage('Ann', "What's up?"); // Ann: What's up? (**)

// ------------ function parametri value STANDARD-------------------

// function showMessage(from, text = "no text given") {
//   alert( from + ": " + text );
// }

// showMessage("Ann"); // Ann: no text given

// ------------ function parametri OLD value STANDARD-------------------

// function showMessage(from, text) {
//   if (text === undefined) {
//     text = 'no text given';
//   }

//   alert( from + ": " + text );
// }

// --- or --

// function showMessage(from, text) {
//   // if text is falsy then text gets the "default" value
//   text = text || 'no text given';
//   ...
// }
// ------------  Restituzione value function -------------------

// function controlloEtà(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('HAI IL PERMESSO DEI TUOI GENITORI?');
//   }
// }

// let age = prompt('Quanti anni hai?', 18);

// if ( controlloEtà(age) ) {
//   alert( 'Accesso approvato' );
// } else {
//   alert( 'Accesso negato' );
// }

// //  ------- return anche senza vaolre ------------------

// function mostraFilm(age) {
//   if (!controlloEtà(age)) {
//     return;
//   }

//   alert('Puoi vedere il film');
  
// }

// Una funzione con uno spazio vuoto o senza return  ritorna UNDEFINED
// Se una funzione non restituisce un valore, è uguale a se restituisce undefined:

// function nonFàNiente() { /* empty */ }

// alert( nonFàNiente() === undefined ); // true

// // Un vuoto returnè uguale a return undefined:

// function nonFàNiente() {
//   return;
// }

// alert( nonFàNiente() === undefined ); // true

// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {

//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }

//     console.log( i ); // a prime
//   }
// }

// let primi = showPrimes(20);
// console.log(primi);

//-------

// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     console.log(i); // a prime
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return false;
//   }
//   return true;
// }
// let primi = showPrimes(20);
// console.log(primi);