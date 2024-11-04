let secretIndex = Math.floor(Math.random() * 5);
// Solution 1: if else 
if (secretIndex === 0) {
    console.log('Zero');

} else if (secretIndex === 1) {
    console.log('One');
} else if (secretIndex === 2) {
    console.log('Two');
} else if (secretIndex === 3) {
    console.log('Three');
} else  {
    console.log('Four');
}
// Solution 2: Switch
switch (secretIndex) {
    case 0:
        console.log('Zero');
        break;
    case 1:
        console.log('One');
        break;
    case 2:
        console.log('Two');
        break;
    case 3:
        console.log('Three');
        break;
    default:
        console.log('Four');
   }

   // Solution 3: using a dictionary
   let dict = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',

   } 
   console.log(dict[secretIndex]);