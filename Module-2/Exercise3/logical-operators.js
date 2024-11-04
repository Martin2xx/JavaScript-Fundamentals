console.log("Logical AND Operator");
console.log('False && False -->', False && False);
consolelog(' False && True -->', False && True);
console.log('True && False -->', True && False);
console.log('True && True -->', True && True);

console.log("Logical OR  Operator");
console.log('False || False -->', False || False);
consolelog(' False || True -->', False  || True);
console.log('True  || False -->', True  || False);
console.log('True  || True -->', True   || True);

console.log('Negation');
console.log('!False -->', !False);
console.log('!True  -->', !True);
console.log('!!True -->', !!True);

console.log ('Exclusive OR operation');
let a = true;
let b = false;
let xor = (a, b) => (!a && b) || (a && !b);
let axorb = xor(a, b);
console.log('a XOR b', axorb);
