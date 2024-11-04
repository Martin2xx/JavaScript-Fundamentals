let prod1 = (a, b) => a * b;
let myDict = {
    'Apple' : 'Manzana',
    'Banana' : 'Plátano',
    'Cherry' : 'Cereza'
}

let daysList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let mySet = new Set ('list');
let myMap = new Map ([['Apple', 'Manzana', 'Plátano', 'Cherry']]);






let num = 7;
let text = 'Soon!';
let bool = true;
let nullValue = null;
let undefinedValue = myDict['Non-Existent'];
let bigN = 6n;
let mySymbol = Symbol();

console.log (`
    Reference DataTypes:
    ${prod1} ${typeof prod1}
    ${myDict} ${typeof myDict} (is Array? ${Array.isArray(myDict)})
    ${daysList} ${typeof daysList} (is Array? ${Array.isArray(daysList)})
    ${mySet} ${typeof mySet}
    ${myMap} ${typeof myMap}

    Value DataTypes:
    ${num} ${typeof num} 
    ${text} ${typeof text} 
    ${bool} ${typeof bool}
    ${nullValue} ${typeof nullValue}
    ${undefinedValue} ${typeof undefinedValue}
    ${bigN} ${typeof bigN}
    ${String (mySymbol)} ${typeof mySymbol}


`)