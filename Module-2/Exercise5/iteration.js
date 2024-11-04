let days = ['Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
];

let i = 0;
// While Loop
while (i < days.length) {
    console.log(days[i]);
    i++;
}

// initialization; condition; increment; {body-statements} = for loop 
for (let i = 0; i < days.length; i++) {
    console.log(days[i]);

}

// for in loop
for (let i in days) {
    console.log(days[i]);
} 

// for of loop 2015+
for (let day of days) {
    console.log(day);
}
