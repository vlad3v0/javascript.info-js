/*0000000000000000000000000000000000000000000000000000000000000000000
 00----------------------------------------------------------------00
 00---------------- EX Javascripts.info ---------------------------00
 00----------------------------------------------------------------00
 00000000000000000000000000000000000000000000000000000000000000000000*/


/**********************************************************************
******[ IF else ] *****************************************************
***********************************************************************/

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


/**********************************************************************
******[ Loops , for - while ] *****************************************************
***********************************************************************/

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

/**************************************************************************/ 
/********[ Function] ******************************************************/
/**************************************************************************/ 

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
/* ------------  Restituzione value function ------------------- */

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

/* --------------------- exercise ------------------- */

/* La seguente funzione ritorna true se il parametro age è maggiore di 18.
Altrimenti chiede una conferma e restituisce il suo risultato. 
Riscriverlo, per eseguire lo stesso, ma senza if, in una sola riga.
Crea due varianti di checkAge:
Utilizzando un operatore punto interrogativo ?
Utilizzando OR || */

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }


/* ----------------- result -------------------------- */
// let age = '';

// function checkAge(age) { return (age >= 18) || 'Did youre parents allow you?' || 'Ritenta' };
// console.log(checkAge(age));

// function checkAge2(age) { return (age >= 18) ? 'true' : (age < 18) ? confirm('Did youre parents allow you?') : 'Riprova'; };
// console.log(checkAge(age));

/* --------------------- exercise ------------------- */

/*Scrivi una funzione min(a,b)che restituisce il minimo di due numeri ae b.

Per esempio:*/

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

/* ----------------- result -------------------------- */

// let firstNum = 112;
// let secondNum = 67;
// let a = firstNum;
// let b = secondNum;

// function calcNumberMin(a, b) {
//   if (a < b) {
//     return a;
//   } else if (a > b) {
//     return b;
//   }
// }

// console.log(calcNumberMin(a,b));


/* --------------------- exercise ------------------- */
/*Scrivi una funzione pow(x,n)che ritorna x al potere n. O, in altre parole, 
si moltiplica x da solo i n tempi e restituisce il risultato.*/

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

/* ----------------- result -------------------------- */

// let numero = 3;
// let elevatorePotenza = 4;
// let a = numero;
// let b = elevatorePotenza;

// function calPotenzaNumero(a,b) {

//   let risultato = a ; // simple solution
//   for (let index = 1; index < b; index++) {
//    risultato *= a ;
//   }
//   return risultato;
// }
// console.log(calPotenzaNumero(a,b) );


/**********************************************************************
******[ Function + EXPRESSIONS   ] ************************************
***********************************************************************/
// es ----

// let sayHi = function() {
//   alert( "Hello" );
// };
// // console.log(sayHi());

// function sayHi() {   // (1) create
//   alert( "Hello" );
// }

// let func = sayHi;    // (2) copy

// func(); // Hello     // (3) run the copy (it works)!
// sayHi(); // Hello    //     this still works too (why wouldn't it)
//  
/* The Function Declaration (1) creates the function and puts it into the variable named sayHi.
Line (2) copies it into the variable func. Please note again: there are no parentheses after sayHi. If there were, then func = sayHi() would write the result of the call sayHi() into func, not the function sayHi itself.
Now the function can be called as both sayHi() and func(). */

/* CAllBack Function --------------------------------------------*/

/* Let’s look at more examples of passing functions as values and using function expressions.
We’ll write a function ask(question, yes, no) with three parameters:
*question-Text of the question
*yes-Function to run if the answer is “Yes”
*no-Function to run if the answer is “No”
The function should ask the question and, depending on the user’s answer, call yes() or no(): */

// function askConfirm(question, blue, red) {
//   if (confirm(question)) blue()
//   else red();
// }

// function showBlue() {
//   console.log('Pillola Blu , ottima scelta bianconiglio ');
// }

// function showRed() {
//   console.log('Pillola Rossa , capisco la tua scelta , non ti giudicherò');  
// }

// askConfirm('Scegli una pillola, pillola Blu o Rossa?, Blu?', showBlue, showRed);

// ---------- Anonimous Function -----------------

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); }, // this is a anonymous function.
//   function() { alert("You canceled the execution."); }
// );
/* Here, functions are declared right inside the ask(...) call.
They have no name, and so are called anonymous. Such functions are not accessible 
outside of ask (because they are not assigned to variables),
but that’s just what we want here.
Such code appears in our scripts very naturally, it’s in the spirit of JavaScript */


// sayHi("John"); // Hello, John

// // function sayHi(name) {
// //   alert( `Hello, ${name}` );
// // }

// sayHi("John"); // error! è stata chiamat troppo presto in quanto la funzionea non è stata ancora letta

// let sayHi = function(name) {  // (*) no magic any more
//   alert( `Hello, ${name}` );
// };

// sayHi('George')

// let age = 16; // take 16 as an example

// if (age < 18) {
//   welcome();               // \   (runs)
//                            //  |
//   function welcome() {     //  |
//     alert("Hello!");       //  |  Function Declaration is available
//   }                        //  |  everywhere in the block where it's declared
//                            //  |
//   welcome();               // /   (runs)

// } else {

//   function welcome() {
//     alert("Greetings!");
//   }
// }

// // Here we're out of curly braces,
// // so we can not see Function Declarations made inside of them.

// welcome();// Error: welcome is not defined

//----------------------

// let age = prompt("What is your age?", 18);

// let welcome;

// if (age < 18) {

//   welcome = function() {
//     alert("Hello!");
//   };

// } else {

//   welcome = function() {
//     alert("Greetings!");
//   };

// }

// welcome(); // ok now

// // or
// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//   function() { alert("Hello!"); } :
//   function() { alert("Greetings!"); };

// welcome(); // ok now

/**********************************************************************
******[ Function ARROW => ] *******************************************
***********************************************************************/

// ex -----------------

// let func = (arg1, arg2, ...argN) => expression
// it's egual to 
// let func = function(arg1, arg2, ...argN) {
//   return expression;
// };
// --------------------------
// let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/
// alert( sum(1, 2) ); // 3
//-------------

// let double = n => n * 2;
// // roughly the same as: let double = function(n) { return n * 2 }

// alert( double(3) ); // 6
//-------------

// let sayHi = () => alert("Hello!");

// sayHi();
//-------------

// let age = prompt('What is your age?', 18);

// let welcome = (age < 18) ?
//  () => alert('Ciao') :
//  () => alert('Buongiorno!');

// welcome();
// ---------------

// let sum = (a,b) => {
//   let result = a + b;
//   return result;
// }

// console.log(sum(2,4));

/* Arrow functions are handy for one-liners. They come in two flavors:

Without curly braces: (...args) => expression – the right side is an expression:
the function evaluates it and returns the result.
With curly braces: (...args) => { body } – brackets allow us to write multiple statements
inside the function, but we need an explicit return to return something. */

/* --------------------- exercise ------------------- */
/* Sostituisci le espressioni di funzione con le funzioni freccia nel codice seguente: */

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

/* ----------------- result -------------------------- */

// let ask = (question, yes, no) => confirm(question) ? yes() : no();

// ask(
//   'Do you agree?',
//   () => alert('You Agree'),
//   () => alert('You calceled the execution ')
//   );

/**********************************************************************
******[ javascript tip special => ] ***********************************
***********************************************************************/

// alert('Hello'); alert('World');

//--------

// alert("There will be an error after this message");

// [1, 2].forEach(alert);