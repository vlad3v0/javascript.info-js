

/**********************************************************************
******[ Object ] ******************************************************
***********************************************************************/

// let user = new Object(); // "object constructor" syntax
// let user = {     // an object
//     name: "John",  // by key "name" store value "John"
//     age: 30,
//     isAdmin: true       // by key "age" store value 30
//   };
// console.log(user);

// // get property values of the object:
// alert( user.name ); // John
// alert( user.age ); // 30

// // delete key
// delete user.age;

// console.log(user);

// // We can also use multiword property names, but then they must be quoted:
// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true  // multiword property name must be quoted
// };

// user['likes bird']= true;
// console.log(user);
// let user = {
//     name : 'Gio'
// };
// let key = "likes birds";

// // same as user["likes birds"] = true;
// user[key] = true;

// console.log(user);

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = prompt("What do you want to know about the user?", "name");
  
//   // access by variable
//   alert( user[key] ); // John (if enter "name")

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = "name";
//   alert( user.key ) // undefined

/***************************Computered Properties ****************/

// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag.apple ); // 5 if fruit="apple"

// // In sostanza, funziona allo stesso modo di:

// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {};

// // take property name from the fruit variable
// bag[fruit] = 5;
// console.log(bag[fruit]);

// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };

/************************* Property value shorthand ***********************/

// function makeUser(name, age) {
//     return {
//         name : name,
//         age : age,
//     };    
// }

// let user = makeUser("Vlad", 30)
// alert('Ciao ' + user.name + ' benentuo nella pagina');

// function makeUser(name, age) {
//     return {
//         name,
//         age,
//     };    
// }
// let user = makeUser("Vlad", 30)
// alert('Ciao ' + user.name + ' benentuo nella pagina');

/**************** Property existence test, “in” operator ***********************/

// // "key" in 

// let user = { name: "John", age: 30 };

// alert( "age" in user ); // true, user.age exists
// alert( "blabla" in user ); // false, user.blabla doesn't exist

/************************ cicle For......in ********************************/

// for ( key in object) {
//     // executes the body for each key among object properties  
// }

// let user = {
//     name : 'George',
//     age : 30,
//     isAdmin: true
// };

// for (let key in user) {
//     console.log( key);
//     console.log( user[key] );
// }

/************************** particular order obj ******** */

// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     // ..,
//     "1": "USA"
//   };

//   for (let code in codes) {
//       console.log(code);
//   }

// Math.trunc is a built-in function that removes the decimal part
// alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
// alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
// alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property

// let user = {
//     name: "John",
//     surname: "Smith"
//   };
//   user.age = 25; // add one more
  
//   // non-integer properties are listed in the creation order
//   for (let prop in user) {
//     alert( prop ); // name, surname, age
// }
//   solution is '+'
// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     // ..,
//     "+1": "USA"
// };
  
//   for (let code in codes) {
//     alert( +code ); // 49, 41, 44, 1

// }

// let user = { name: 'John' };

// let admin = user;

// admin.name = 'Pete'; // changed by the "admin" reference

// alert(user.name); // 'Pete', changes are seen from the "user" reference

/******* Object CONST ***********************/

// const user = {
//     name: 'George'
// }

// user.age = 25; /* not an error */

// alert(user.age)

// const user = {
//     name: "John"
//   };
  
//   // Error (can't reassign user)
//   user = {
//     name: "Pete"
//   };

/**************  Cloning obj  *************/

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let clone = {}; // the new empty object
  
//   // let's copy all user properties into it
//   for (let key in user) {
//     clone[key] = user[key];
//   }
  
//   // now clone is a fully independent clone
//   clone.name = "Pete"; // changed the data in it

//   Object.assign(user, { name : 'Pete'})

//   alert( user.name ); // still John in the original object


// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);

// // now user = { name: "John", canView: true, canEdit: true }

// console.log(user);
/********If the receiving object (user) already has the same named property, it will be overwritten:   */

// let user = { name: "John" };

// // overwrite name, add isAdmin
// Object.assign(user, { name: "Pete", isAdmin: true });

// // now user = { name: "Pete", isAdmin: true }

/****** cloning about Object.assign */
// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let clone = Object.assign({}, user);

// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
  
//   alert( user.sizes.height ); // 182

//   let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
  
//   let clone = Object.assign({}, user);
  
//   alert( user.sizes === clone.sizes ); // true, same object
  
//   // user and clone share sizes
//   user.sizes.width++;       // change a property from one place
//   alert(clone.sizes.width); // 51, see the result from the other one

/* --------------------- exercise ------------------- */
/* Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. */



/* ----------------- result -------------------------- */

// let user = {};

// user.name = 'Vlad';
// user.surname = 'Rossi';

// console.log(user);

// user.name = 'Pete';

// console.log(user);

// delete user.name;

// console.log(user);


/* --------------------- exercise ------------------- */
/* We have an object storing salaries of our team:  */

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };

// let sumSalaries = calcSalaries(salaries);

// function calcSalaries(salaries) {
//     let sum = 0;
//     for (const key in salaries) {
//        sum = sum + salaries[key];
//     }
//     return sum;
// };

// console.log(sumSalaries);

/* ----------------- result -------------------------- */


// let sumSalaries = calcSalaries(salaries);

// function calcSalaries(salaries) {
//     let sum = 0;
//     for (const key in salaries) {
//        sum = sum + salaries[key];
//     }
//     return sum;
// };

// console.log(sumSalaries);


/* --------------------- exercise ------------------- */
/* Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2. */

// before the call
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   multiplyNumeric(menu);
//   console.log(menu);

  
  
  // after the call
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };


/* ----------------- result -------------------------- */

// function multiplyNumeric(menu) {

//     for (let key in menu) {

//         if (typeof menu[key] == 'number') {

//             menu[key] = menu[key] * 2 ;

//         }

//     }
//     return;

// }

// alternative about obj[key] 

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }

// let user = {
//   name: "John",
//   surname: 'Coperfield',
//   age: 10
// };

// multiplyNumeric(user)
// console.log(user);


// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     } else {
//       obj[key];
//     }
//   }
// }


/**********************************************************************
******[ Garbage Collection ] ******************************************
**********************************************************************/

// user has a reference to the object
// let user = {
//     name: "John"
//  };

//  user = null;

//  console.log(user);


 //user has a reference to the object

//  let user = {
//     name: "John"
//  };

//  let admin = user;

//  user = null;

//  console.log(admin);


/***************** objects interlinked ************* */
// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman
//   }
  
// }

// let family = marry(
//    {name: 'Vlad'} ,
//    {name: 'Superposs'} 
//    );

// delete family.father;
// delete family.mother.husband;
//    console.log(family);

/********** unreachable island */
   
// unction marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman
//   }
  
// }

// let family = marry(
//    {name: 'Vlad'} ,
//    {name: 'Superposs'} 
// );

// family = null; 

// console.log(family);


  /**********************************************************************
******[ Metodi  Object , this ] *****************************************
**********************************************************************/

// let user = {
//   name: "John",
//   age: 30
// };

// user.sayHi = function() {
//   alert('Hello Friend !');
// };

// user.sayHi();
// console.log(user);

// let user = {
//   name: 'Vlad',
//   age: 30
// };

// function sayHi() {
//   alert('Ciao')
// };

// // add as a metod
// user.sayHi = sayHi;

// user.sayHi();

/* metod shorthand */
// theese object di the same

// user = {
//   sayHi: function() {
//     alert('Hello');
//   }
// };

// user.sayHi();

// // method shorthand looks better, right?
// user = {
//   sayHi() {
//     alert('Hello');
//   }
// }

// user.sayHi();

/* this in the metod */

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     // "this" is the "current object"
//     alert(this.name);
//   }

// };

// user.sayHi(); 

// attection 

// let user = {
//   name: 'jig',
//   age: 30,

//   sayHi() {
//     alert( user.name );
//   }
// };

// let admin = user;

// user = null;

// console.log(admin);

// admin.sayHi();

/* thi is not a bound */

// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   alert( this.name );
// }

// // use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

/* --------------------- exercise ------------------- */
/*Syntax check - What is the result of this code?*/

// let user = {
//   name: "John",
//   go: function() { alert(this.name) }
// }

// (user.go)();
/* ----------------- result -------------------------- */

// error

// the correct metod is

// user.go();


/* --------------------- exercise ------------------- */
/* Explain the value of "this" In the code below we intend to 
call obj.go() method 4 times in a row.
But calls (1) and (2) works differently from (3) and (4). Why? */

// let obj, method;

// obj = {
//   go: function() { alert(this); }
// };

// obj.go();               // (1) [object Object]

// (obj.go)();             // (2) [object Object]

// (method = obj.go)();    // (3) undefined

// (obj.go || obj.stop)(); // (4) undefined

/* ----------------- result -------------------------- */

// Here’s the explanations.

// 1 That’s a regular object method call.

// 2 The same, parentheses do not change the order of operations here, the
//  dot is first anyway.

// 3 Here we have a more complex call (expression).method(). The call works as
//  if it were split into two lines:

// f = obj.go; // calculate the expression
// f();        // call what we have
// Here f() is executed as a function, without this.

// 4 The similar thing as (3), to the left of the dot . we have an expression.

// To explain the behavior of (3) and (4) we need to recall that property accessors
//  (dot or square brackets) return a value of the Reference Type.

// Any operation on it except a method call (like assignment = or ||) turns it into 
// an ordinary value, which does not carry the information allowing to set this.

/* --------------------- exercise ------------------- */
/* Here the function makeUser returns an object.
What is the result of accessing its ref? Why? */


// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// };


// let user = makeUser();

// alert( user.ref.name ); // What's the result?


/* ----------------- result -------------------------- */
// Error becouse doesn't a method is a fucntion
// the correct is


// function makeUser() {
//   return {
//     name: "John",
//     ref: function() {
//       return this;
//     }
//   };
// };


// let user = makeUser();

// alert( user.ref().name ); 


/* --------------------- exercise ------------------- */
/* Create a calculator
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result. */

// let calculator = {
// //code
// }

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


/* ----------------- result -------------------------- */

// let calculator = {
//   read() {
//       this.a = prompt('Inserisci un numeo');
//       this.b = prompt('Inserisci un numeo');    
//   },
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   }
// };

// calculator.read();
// console.log(calculator);

// alert( calculator.sum() );
// alert( calculator.mul() );

/* --------------------- exercise ------------------- */
/*There’s a ladder object that allows to go up and down: */

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//   }
// };

/* Now, if we need to make several calls in sequence, can do it like this: */

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
/* Modify the code of up, down and showStep to make the calls chainable, like this: */

// ladder.up().up().down().showStep(); // 1 

/* Such approach is widely used across JavaScript libraries. */


/* ----------------- result -------------------------- */

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert( this.step );
//     return this;
//   }
// }

// ladder.up().up().down().up().down().showStep(); // 1

 /**********************************************************************
******[ Object to primitive conversion ] *******************************
**********************************************************************/

// // output
// alert(obj);

// // using object as a property key
// anotherObj[obj] = 123

// // explicit conversion
// let num = number(obj);
// console.log(num);


// maths (except binary plus)
// let n = +obj; // unary plus
// console.log(n);

// let delta = date1 - date2;
// console.log(delta);


// less/greater comparison
// let greater = user1 > user2;

// obj[Symbol.toPrimitive] = function(hint) {
//   // must return a primitive value
//   // hint = one of "string", "number", "default"
// };

// let user = {
//   name: 'John',
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
//     alert( `hint: ${hint}` );
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   }
// };

// alert(user); // hint: string -> {name: "John"}
// alert(+user); // hint: number -> 1000
// alert(user + 500);  // hint: default -> 1500


// let user = {
//   name: "John",
//   money: 1000,

//   // for hint="string"
//   toString() {
//     return `{name: "${this.name}"}`;
//   },

//   // for hint="number" or "default"
//   valueOf() {
//     return this.money;
//   }

// };

// alert(user); // toString -> {name: "John"}
// alert(+user); // valueOf -> 1000
// alert(user + 500); // valueOf -> 1500


 /**********************************************************************
******[ constructor new ] **********************************************
**********************************************************************/

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");

// alert(user.name); // Jack
// alert(user.isAdmin); // false

/* function constructor */


// function User(name) {
//   // this = {};  (implicitly)

//   // add properties to this
//   this.name = name;
//   this.isAdmin = false;

//   // return this;  (implicitly)
// }


// let user = new function() {
//   this.name = "John";
//   this.isAdmin = false;

//   // ...other code for user creation
//   // maybe complex logic and statements
//   // local variables etc
// };

// console.log(user);

// function BigUser() {

//   this.name = "John";

//   return { name: "Godzilla" };  // <-- returns this object
// }

// alert( new BigUser().name );  // Godzilla, got that object


// function SmallUser() {

//   this.name = "John";

//   return; // <-- returns this
// }

// alert( new SmallUser().name );  // John



// function User(name) {
//   this.name = name;

//   this.sayHi = function() {
//     alert( "My name is: " + this.name );
//   };
// }

// let john = new User("John");
// let vlad = new User('Vlad');
// let albert = new User('Alberto');

// john.sayHi(); // My name is: John
// vlad.sayHi();
// albert.sayHi();

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/


/* --------------------- exercise ------------------- */
/* Is it possible to create functions A and B such as new A()==new B()? */

// function A() { ... }
// function B() { ... }

// let a = new A;
// let b = new B;

// alert( a == b ); // true


/* ----------------- result -------------------------- */


// let obj = {};

// function A() { alert('ciao'); return obj; }
// function B() {  alert('ciao'); return obj; }

// alert( new A() == new B() ); // true

/* --------------------- exercise ------------------- */
/* Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties. */

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


/* ----------------- result -------------------------- */

// function Calculator() {
//   this.read = function() {
//     this.a = +prompt('Inserisci un numero', 0);
//     this.b = +prompt('Inserisci un numero', 0);
//   };
//   this.sum =  function( a , b ) {
//     return this.a + this.b ;
    
//   };
  
//   this.mult =  function( a , b ) {
//     return this.a * this.b ;
//   };
// };


// let calculator = new Calculator();
// calculator.read();
// calculator.sum();
// calculator.mult();

// console.log(calculator.a);
// console.log(calculator.b);


// console.log(" Sum = " + calculator.sum());

// console.log(" Mul = " + calculator.mult());

// /* --------------------- exercise ------------------- */
// /* Create a constructor function Accumulator(startingValue).

/* Object that it creates should:

Store the “current value” in the property value. The starting value is set
 to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with 
the initial value startingValue.

Here’s the demo of the code: */

// let accumulator = new Accumulator(1); // initial value 1

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// alert(accumulator.value); // shows the sum of these values



/* ----------------- result -------------------------- */


function Accumulator(startingValue) {

  this.value = startingValue;

  this.read = function() {
    this.value = +prompt('Inserisci un numero da memorizzare') + this.value;
  return;
  } 
}


let accumulator = new Accumulator(1);

accumulator.read();
console.log(accumulator.value);

accumulator.read();
console.log(accumulator.value);


alert(accumulator.value);