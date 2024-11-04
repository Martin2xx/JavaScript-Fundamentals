let enterName1 = prompt("Enter your name");

if (enterName1 === null || enterName1.length === 0) {
    console.log('Empty. Please enter your name.');
} else if (enterName1.length <= 8) {
    console.log('Short Name.');
} else {
    console.log('Long Name.');
} 