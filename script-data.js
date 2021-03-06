
/**********************************************************************
******[ Date Type ] ******************************************************
***********************************************************************/

// let str = "Hello";

// alert( str.toUpperCase() ); // HELLO


// let n = 1.23456;

// alert( n.toFixed(2) ); // 1.23

// alert( typeof 0 ); // "number"

// alert( typeof new Number(0) ); // "object"! // unreccommended

// let zero = new Number(0);

// if (zero) { // zero is true, because it's an object
//   alert( "zero is truthy!?!" );
// }

// let num = Number("123"); // convert a string to number

// console.log(num);

// alert(null.test); // error

// let str = "Hello";

// str.test = 5; // (*)

// alert(str.test); 

// string primitive are not object
// They can’t store additional data.


/* ******More ways to write a number******* */


// let billion = 1000000000;

// let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

// alert( 7.3e9 );  // 7.3 billions (7,300,000,000)

// 1e3 = 1 * 1000
// 1.23e6 = 1.23 * 1000000

// let ms = 0.000001;

// let ms = 1e-6; // six zeroes to the left from 1

// // -3 divides by 1 with 3 zeroes
// 1e-3 = 1 / 1000 (=0.001)

// // -6 divides by 1 with 6 zeroes
// 1.23e-6 = 1.23 / 1000000 (=0.00000123)


/* ************Hex, binary and octal numbers************* */


// alert( 0xff ); // 255
// alert( 0xFF ); // 255 (the same, case doesn't matter)

// let a = 0b11111111; // binary form of 255
// let b = 0o377; // octal form of 255

// alert( a == b ); // true, the same number 255 at both sides

/* **********toString(base)*****************

The method num.toString(base) returns a string representation of num in the numeral system with the given base.

For example: */

// let num = 255;

// alert( num.toString(16) );  // ff
// alert( num.toString(2) );   // 11111111


/* **********Rounding************ */

/* One of the most used operations when working with numbers is rounding.

There are several built-in functions for rounding:

Math.floor
Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
Math.ceil
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
Math.round
Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4 and -1.1 becomes -1.
Math.trunc (not supported by Internet Explorer)
Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1. */

// let num = 1.23456;

// alert( Math.floor(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

// let num = 12.34;
// alert( num.toFixed(1) ); // "12.3"
// alert( num.toFixed(2)); // "12.34"
// alert( num.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits


/********* Imprecise calculations ***********/


// alert( 1e500 ); // Infinity

// alert( 0.1 + 0.2 == 0.3 ); // false

// alert( 0.1 + 0.2 ); // 0.30000000000000004


// alert( 0.1.toFixed(20) ); // 0.10000000000000000555

// let sum = 0.1 + 0.2;
// console.log( sum.toFixed(2)); // 0.30 // is a string
// console.log( +sum.toFixed(2) ); // 0.3 is a number

/****** parseInt e parseFloat  **********/

// alert( +"100px" ); // NaN

// alert( parseInt('100px') ); // 100
// alert( parseFloat('12.5em') ); // 12.5

// alert( parseInt('12.3') ); // 12, only the integer part is returned
// alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

// alert( parseInt('a123') ); // NaN, the first symbol stops the process

/* parseInt(str, radix) */

// alert( parseInt('0xff', 16) ); // 255
// alert( parseInt('ff', 16) ); // 255, without 0x also works

// alert( parseInt('2n9c', 36) ); // 123456


/******** Other math functions *******/

/* Math.random() */
// alert( Math.random() ); // 0.1234567894322
// alert( Math.random() ); // 0.5435252343232
// alert( Math.random() ); // ... (any random numbers)

/* Math.max(a, b, c...) / Math.min(a, b, c...) */
// alert( Math.max(3, 5, -10, 0, 1) ); // 5
// alert( Math.min(1, 2) ); // 1

/* Math.pow(n, power) */
// alert( Math.pow(2, 10) ); // 2 in power 10 = 1024







/* --------------------- exercise ------------------- */
/* Create a script that prompts the visitor to enter two numbers and then shows their sum. */

/* ----------------- result -------------------------- */

// sumNumber = () => {
//    let a = +prompt('Inserisci un numero!');
//    let b = +prompt('Inserisci un numero!');
//    return a + b;
// }

// console.log(sumNumber());

// let a = +prompt("The first number?", "");
// let b = +prompt("The second number?", "");

// alert( a + b );

/* --------------------- exercise ------------------- */
/* According to the documentation Math.round and toFixed both round to the nearest number:
 0..4 lead down while 5..9 lead up. */

/* ----------------- result -------------------------- */

// alert( 6.35.toFixed(20) ); // // 6.34999999999999964473
// alert( 1.35.toFixed(20) ); // 1.35000000000000008882

// alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000

// alert( Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

/* --------------------- exercise ------------------- */
/* For instance:

alert( 1.35.toFixed(1) ); // 1.4
In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

alert( 6.35.toFixed(1) ); // 6.3
How to round 6.35 the right way? */

/* ----------------- result -------------------------- */


/* --------------------- exercise ------------------- */
/* Create a function readNumber which prompts for a number until the visitor enters a valid 
numeric value.
The resulting value must be returned as a number.
The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In 
that case, the function should return null. */

/* ----------------- result -------------------------- */

// function readNumber() {
//   let num;

//   do {
//     num = prompt("Enter a number please?", 0);
//   } while ( !isFinite(num) );

//   if (num === null || num === '') return null;

//   return +num;
// }

// console.log(readNumber());

/* --------------------- exercise ------------------- */
/* This loop is infinite. It never ends. Why?

let i = 0;
while (i != 10) {
  i += 0.2;
} */

/* ----------------- result -------------------------- */


/* --------------------- exercise ------------------- */
/* The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

Examples of its work:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525 */

/* ----------------- result -------------------------- */

// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// console.log(random(1, 7));
// console.log(random(1, 7));
// console.log(random(1, 7));


/*********************************** 
 ******************** String *******
 ***********************************/


// let single = 'single-quoted';
// let double = "double-quoted";

// let backticks = `backticks`;

// function sum(a, b) {
//   return a + b;
// }

// alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.


// let guestList = `Guests:
//  * John
//  * Pete
//  * Mary
// `;

// alert(guestList); // a list of guests, multiple lines

// let guestList = "Guests:\n * John\n * Pete\n * Mary";

// alert(guestList); // a multiline list of guests


/* ************ special characters **********************/



// let guestList = "Guests:\n * John\n * Pete\n * Mary";

// alert(guestList); // a multiline list of guests

// let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// // two lines using a normal newline and backticks
// let str2 = `Hello
// World`;

// alert(str1 == str2); // true


/* ************ string lenght **********************/


// alert( `My\n`.length ); // 3

// let str = `Hello`;

// // the first character
// alert( str[0] ); // H
// alert( str.charAt(0) ); // H

// // the last character
// alert( str[str.length - 1] ); // o



// let str = `Hello`;

// alert( str[1000] ); // undefined
// alert( str.charAt(1000) ); // '' (an empty string)

// for (let char of "Hello") {
//   alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
// }


// let str = 'Hi';

// str[0] = 'h'; // error
// alert( str[0] ); // doesn't work


// let str = 'Hi';

// str = 'h' + str[1]; // replace the string

// alert( str ); // hi

/* *************** Changing the case ************* */

// alert( 'Interface'.toUpperCase() ); // INTERFACE
// alert( 'Interface'.toLowerCase() ); // interface

// alert( 'Interface'[0].toLowerCase() ); // 'i'


/****************** Searching for a substring ***** */



// let str = 'Widget with id';

// alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
// alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

// alert( str.indexOf("id") ); // 1,




// let str = 'Widget with id';

// alert( str.indexOf('id', 2) ) // 12




// let str = 'As sly as a fox, as strong as an ox';

// let target = 'as'; // let's look for it

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( `Found at ${foundPos}` );
//   pos = foundPos + 1; // continue the search from the next position

// }



// let str = "As sly as a fox, as strong as an ox";
// let target = "as";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   alert( pos );
// }


// let str = "Widget with id";

// if (str.indexOf("Widget")) {
//     alert("We found it"); // doesn't work!



//     let str = "Widget with id";

// if (str.indexOf("Widget") != -1) {
//     alert("We found it"); // works now!
// }


/******************** Getting a substring ***********/

// let str = "stringify";
// alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
// alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

// let str = "stringify";

// alert( str.slice(2) ); // 'ringify', from the 2nd position till the end

// let str = "stringify";

// // start at the 4th position from the right, end at the 1st from the right
// alert( str.slice(-4, -1) ); // 'gif'

// let str = "stringify";
// alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters

// let str = "stringify";
// alert( str.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters



/* --------------------- exercise ------------------- */
/*  Uppercase the first character 
Write a function ucFirst(str) that returns the string str with the 
uppercased first character, for instance:
ucFirst("john") == "John";*/


/* ----------------- result -------------------------- */

// function ucFirst(str) {
//   if (!str) return str;

//   return str[0].toUpperCase() + str.slice(1);
// }

// alert( ucFirst("john") ); // John


/* --------------------- exercise ------------------- */
/* Write a function checkSpam(str) that returns true if str contains ‘viagra’
 or ‘XXX’, otherwise false. 
 The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false     */


/* ----------------- result -------------------------- */

// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

// alert( checkSpam('buy ViAgRA now') );

// alert( checkSpam('free xxxxx') );

// alert( checkSpam("innocent rabbit") );

/* --------------------- exercise ------------------- */
/*  Create a function truncate(str, maxlength) that checks the length of the 
str and, if it exceeds maxlength – replaces the end of str with the ellipsis
 character "…", to make its length equal to maxlength.
The result of the function should be the truncated (if needed) string.
For instance:

truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
truncate("Hi everyone!", 20) = "Hi everyone!"*/


/* ----------------- result -------------------------- */

// function truncate(str, maxlength) {

//   return (str.length > maxlength) ?

//     str.slice(0, maxlength - 1) + '…' : str;
// }

// console.log(truncate("Hi evereyone! ", 10));


/* --------------------- exercise ------------------- */
/* We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
Create a function extractCurrencyValue(str) that would extract the numeric value from such 
string and return it.
The example:

alert( extractCurrencyValue('$120') === 120 ); // true */


/* ----------------- result -------------------------- */

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }