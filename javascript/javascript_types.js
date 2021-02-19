var a;
typeof a; //undefined

a = "hello world";
typeof a; //string

a = 42;
typeof a; //number

a = true;
typeof a; //boolean

a = null;
typeof a; //nill

a = {b: "c"};
typeof a;

typeof Symbol();

typeof function a () {} === "function";

function a (b,c) {}

a.length;

console.log(a.length);
console.log(typeof a);

////// truthy values 2
var a = "true";
var b = "0";
var c = "''";

var d = Boolean (a && b && c);
console.log(typeof a);
console.log(d);

////// truthy values 2
var a = [];
var b = {};
var c = function(){};

var d = Boolean (a && b && c);
console.log(d);