let enterInt = prompt('Enter a Integer');
let intValue = Number.parseInt(enterInt);

if (Number.isNaN(intValue)) {
    console.log('Not a number.')
} else if ( intValue % 2 === 1) {
    console.log('Odd number.')
} else if ( intValue % 2 === 0) {
    console.log('Even number.')
} else {
    console.log('Not a number.')
} 
if ( intValue >= 2) {
    console.log('Atleast 2.')
} 