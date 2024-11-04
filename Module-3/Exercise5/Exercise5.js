let val = 1;
let o = {val : 1};

function plusOne(val, o) {
    let internalO = {...o}
    val += 1;
    internalO.val += 1;
    console.log(val, internalO);
}

plusOne(val, o);
console.log(val, o);