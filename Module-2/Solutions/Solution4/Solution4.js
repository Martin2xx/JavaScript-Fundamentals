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

let minValue = 1;
let maxValue = 100;

while (minValue < maxValue) {
    let midPoint = Math.floor((minValue + maxValue) / 2);
    let result = null;
    do {
       result = prompt (` Guess:${midPoint} Type H for Higher, L for lower, M for Match`);
    } while ( result !== 'H' && result!= 'L' && result != 'M');

    switch (result) {
        case 'H':
            minValue = midPoint + 1;
            console.log(`${midPoint} Higher (interval: ${minValue} to ${maxValue})`)
            break;
        case 'L':
            maxValue = midPoint - 1;
            console.log(`${midPoint} Lower (interval: ${minValue} to ${maxValue})`)
            break;
        case 'M':
            minValue = maxValue = midPoint;
            break;
    }
}
console.log(`${minValue} 'Found!'`); 