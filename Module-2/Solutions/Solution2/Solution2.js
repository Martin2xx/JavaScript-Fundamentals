let intValue = null;

do { 
    let numInput = prompt ('Enter a number between 1 and 100');
    intValue = Number.parseInt(numInput);
} 
while (
    Number.isNaN(intValue) ||
    typeof intValue !== 'number' ||
    intValue < 1 ||
    intValue > 100
);

console.log ('This is Valid', intValue);