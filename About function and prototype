# About-Js
  About function and prototype and __prto__


In JS, there are no classes, just objects. The inheritance is prototype-based.

__proto__ is what we call prototype.
The __proto__ is a non-standard property, provided by Firefox/Chrome. 
In other browsers the property still exists internally, but it is hidden.
we can use Object.getPrototypeOf(obj) get obj.__proto__

There is a good and crossbrowser way of setting __proto__. It requires the use of constructor functions.
A new function call sets the __proto__ of the object to the value of its prototype property.

function  has a property named prototype which is autocreated when the function declares. 
function's prototype has a property named constructor and its value is the function itself.

http://www.crockford.com/javascript/private.html : private members in Js

JavaScript is fundamentally about objects. Arrays are objects. Functions are objects. Objects are objects. So what are objects?
Objects are collections of name-value pairs. The names are strings, and the values are strings, numbers, booleans, 
and objects (including arrays and functions). Objects are usually implemented as hashtables so values can be retrieved quickly.

If a value is a function, we can consider it a method. When a method of an object is invoked, the this variable is set to the object. 
The method can then access the instance variables through the this variable.
