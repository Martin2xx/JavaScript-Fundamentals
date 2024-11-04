let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

function toULMarkup (list) {
    let html = '<ul>';
    for (let item of list) {
        html += `<li>${item}</li>`;
    }
    html += '</ul>';
    return html;
}

console.log(toULMarkup(days));

let container = document.querySelector('.js-container');
container.innerHTML = toULMarkup(days);