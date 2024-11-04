/*function plusOne (value) {
    value += 1;
    console.log(value);
}
let val = 1;
plusOne(val);
console.log(val); 
*/

function plusOne2 (value, num) {
    let internalValue = Object.assign({}, value);
    internalValue.x += 1;
    num += 1;
    console.log(internalValue, num);
}
let val2 = {x:1};
let num = 1;
plusOne2(val2, num);
console.log(val2, num);

//Array of Objects
let dbTable = [
    {first : 'A', Last : 'B'},
    {first : 'C', Last : 'D'},

];

//Shalllow Copying 
function logChangedRecords (records) {
    let internalRecords = [...records];
    for (let record of internalRecords) {
        record.title = 'Ms.'
    } console.table (internalRecords);
} 
logChangedRecords(dbTable);

console.table(dbTable);

//Deep Copying

function logChangedRecords (records) {
    let internalRecords = structuredClone(records);
    for (let record of internalRecords) {
        record.title = 'Ms.'
    } console.table (internalRecords);
} 
logChangedRecords(dbTable);

console.table(dbTable);