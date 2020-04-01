//00000000000000000000000000000000000000000000000000000000000000000000
//00----------------------------------------------------------------00
//00---------------- EX Javascripts.info ---------------------------00
//00----------------------------------------------------------------00
//00000000000000000000000000000000000000000000000000000000000000000000

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

//--------------------------------------------

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

//--------------------------------------------



// let result =  (a + b < 4) ? "Below" : "Over"; 

// // console.log(result);

// let message = (login == "Director") ? "Greetings" : (login == "") ? "no login" : (login == "") ?  : "" 

//--------------------------------------------

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

// ---------- CONTROLLO VERIFICA LOGIN ---------------

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
  
  // let i = 0;
  // while (i < 3) {
    
  //   i++;
  //   console.log('number '+ i + '!')
      
  // }

  
// ---------------------- EX Js.info - Worm  SWITCH CASEk--------------

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