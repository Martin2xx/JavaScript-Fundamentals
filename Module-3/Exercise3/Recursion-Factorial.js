 
 
 //Recursion Function Example:
 
 /* function countToTen (val) {
    if (val > 10) return;
    console.log(val);
    countToTen(val + 1);
}

countToTen(0); */

function factorial (n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

let factArrow = n => n === 0 ? 1 : n * factorial(n - 1);