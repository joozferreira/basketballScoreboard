// Global variables
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let period = document.getElementById("period").lastElementChild;
// let timer = document.getElementById("timer").lastElementChild;
let homeFouls = Array.from(document.getElementById("home-fouls").children);
let guestFouls = Array.from(document.getElementById("guest-fouls").children);
let totalHomeFouls = 0;
let totalGuestFouls = 0;
let currentPeriod = 1;

// New game cleans data from previous match, restoring original values
function newGame() {
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    period.textContent = 1;
    currentPeriod = 1;
    // timer.textContent = "12:00";
    for (element of homeFouls) {
        element.style.backgroundColor = "#F94F6D";
    }
    for (element of guestFouls) {
        element.style.backgroundColor = "#F94F6D";
    }
    totalHomeFouls = 0;
    totalGuestFouls = 0;
}

// New period should keep the score but update the fouls, period number and the time.
// Periods will count to four and then should go to OT1, OT2, etc
// Overtime periods are only 5 minutes long
function newPeriod() {
    for (element of homeFouls) {
        element.style.backgroundColor = "#F94F6D";
    }
    for (element of guestFouls) {
        element.style.backgroundColor = "#F94F6D";
    }
    totalHomeFouls = 0;
    totalGuestFouls = 0;
    currentPeriod += 1;
    if (currentPeriod < 5) {
        period.textContent = currentPeriod;
        // timer.textContent = "12:00";
    } else {
        period.textContent = `OT${currentPeriod - 4}`;
        // timer.textContent = "05:00";
    }
}

// Functions to change the score
function homePlusOne() {
    homeScore.textContent = Number(homeScore.textContent) + 1;
}

function homePlusTwo() {
    homeScore.textContent = Number(homeScore.textContent) + 2;
}

function homePlusThree() {
    homeScore.textContent = Number(homeScore.textContent) + 3;
}

function guestPlusOne() {
    guestScore.textContent = Number(guestScore.textContent) + 1;
}

function guestPlusTwo() {
    guestScore.textContent = Number(guestScore.textContent) + 2;
}

function guestPlusThree() {
    guestScore.textContent = Number(guestScore.textContent) + 3;
}

// Managing home team fouls
function newHomeFoul() {
    totalHomeFouls += 1;
    if (totalHomeFouls < 5) {
        homeFouls.at(-totalHomeFouls).style.backgroundColor = "#1B244A";
    }
}

// Managing guest team fouls
function newGuestFoul() {
    totalGuestFouls += 1;
    if (totalGuestFouls < 5) {
        guestFouls.at(-totalGuestFouls).style.backgroundColor = "#1B244A";
    }
}