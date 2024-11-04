// step 1: get a, b and c. (coeffecients)
// step 2: calculate b**2 - 4*a*c
// step 3: calculate how many solutions exist.

function getCoefficient(name) {
    let value = null;
    do {
        let str = prompt(`Enter co-efficient ${name}`);
        value = Number.parseFloat(str);

    } while (Number.isNaN(value) || typeof value !== 'number');
    return value;

}

function getCoefficients() {
    let a = getCoefficient ('a');
    let b = getCoefficient ('b');
    let c = getCoefficient ('c');
    return [a, b, c];
}

function getDiscriminant(a, b, c) {
return b**2 - 4*a*c;
}

function printQuadraticSolutions (a, b, c) {
    let discriminant = getDiscriminant(a, b, c);
    let discriminantSqrt = Math.sqrt(discriminant);
    let x1 = (-b + discriminantSqrt) / 2 / a;
    let x2 = (-b - discriminantSqrt) / 2 / a;
    console.log(`This equation has two solutions: ${x1} and ${x2}`);

}

function printSingleSolution(a, b) {
console.log(`This equation has one solution: ${-b / 2 / a}`);
}

function printComplexSolutions() {
console.log('This equation has complex solutions.')
}
function quadraticEquation() {
    let tolerance = 1e-9
let [a, b, c] = getCoefficients();
let discriminant = getDiscriminant(a, b, c);
if (discriminant > tolerance) {
    printQuadraticSolutions(a, b, c,);
}   else if (discriminant < -tolerance) {
    printComplexSolutions();
} else {
    printSingleSolution(a, b);
}
}