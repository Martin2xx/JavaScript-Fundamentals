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
    if (intValue === midPoint) {
        minValue = maxValue = midPoint;
    } else if (intValue < midPoint) {
        maxValue = midPoint - 1;
        console.log(`${midPoint} Lower (interval: ${minValue} to ${maxValue})`);
    } else {
        minValue = midPoint + 1;
        console.log(`${midPoint} Higher (interval: ${minValue} to ${maxValue})`);
    }
}

console.log(`${minValue} 'Found!'`);