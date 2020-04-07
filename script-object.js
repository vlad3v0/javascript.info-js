

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




/**********************************************************************
******[ Garbage Collection ] ******************************************
**********************************************************************/

// user has a reference to the object
let user = {
    name: "John"
  };
  