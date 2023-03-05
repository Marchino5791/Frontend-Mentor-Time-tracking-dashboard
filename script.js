// button variables
const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');

// period
const periodElm = document.querySelectorAll(".period");

// hours variables
const hoursElm = document.querySelectorAll(".hours");

// last hours variables
const lastHoursElm = document.querySelectorAll(".last-hours");

function daily(data) {
    fetch(data)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < periodElm.length; i++) {
                periodElm[i].textContent = 'Day';
                hoursElm[i].textContent = data[i]['timeframes']['daily']['current'];
                lastHoursElm[i].textContent = data[i]['timeframes']['daily']['previous'];
            }   
        })
        .catch(err => console.log('Request Failed', err));
}

function weekly(data) {
    fetch(data)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < periodElm.length; i++) {
                periodElm[i].textContent = 'Week';
                hoursElm[i].textContent = data[i]['timeframes']['weekly']['current'];
                lastHoursElm[i].textContent = data[i]['timeframes']['weekly']['previous'];
            }
        })
}

function monthly(data) {
    fetch(data)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < periodElm.length; i++) {
                periodElm[i].textContent = 'Month';
                hoursElm[i].textContent = data[i]['timeframes']['monthly']['current'];
                lastHoursElm[i].textContent = data[i]['timeframes']['monthly']['previous'];
            }
        })
        .catch(err => console.log('Request Failed', err));
}

dailyBtn.onclick(daily('data.json'));
monthlyBtn.onclick(monthly('data.json'));
weeklyBtn.onclick(weekly('data.json'));
