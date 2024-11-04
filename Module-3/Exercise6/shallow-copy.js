//Array of Objects
let dbTable = [
    {first : 'A', Last : 'B'},
    {first : 'C', Last : 'D'},

];

function logChangedRecords (records) {
    // let internalRecords = [...records]; Shallow Copy
    let internalRecords = structuredClone(records); // Deep Copy
    for (let record of internalRecords) {
        record.title = 'Ms.'
    } console.table (internalRecords);
} 
logChangedRecords(dbTable);

console.table(dbTable);