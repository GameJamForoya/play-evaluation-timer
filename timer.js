// Timer functionality for Play Evaluation Timer

// Target date: September 7, 2025 at 8pm
const targetDate = new Date('2025-09-07T20:00:00');

// Game timer variables
let gameTimeLeft = 10 * 60; // 10 minutes in seconds
let gameTimerInterval;

// DOM elements
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const gameMinutesElement = document.getElementById('game-minutes');
const gameSecondsElement = document.getElementById('game-seconds');

// Utility function to pad numbers with leading zeros
function padZero(num, length = 2) {
    return num.toString().padStart(length, '0');
}

// Update main countdown timer
function updateMainTimer() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
        const totalHours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        hoursElement.textContent = padZero(totalHours);
        minutesElement.textContent = padZero(minutes);
        secondsElement.textContent = padZero(seconds);
    } else {
        // Timer has reached zero
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
    }
}

// Update game timer (10-minute countdown)
function updateGameTimer() {
    const minutes = Math.floor(gameTimeLeft / 60);
    const seconds = gameTimeLeft % 60;

    gameMinutesElement.textContent = padZero(minutes);
    gameSecondsElement.textContent = padZero(seconds);

    if (gameTimeLeft > 0) {
        gameTimeLeft--;
    } else {
        // Reset timer back to 10 minutes
        gameTimeLeft = 10 * 60;
    }
}

// Initialize timers
function initializeTimers() {
    // Update main timer immediately and then every second
    updateMainTimer();
    setInterval(updateMainTimer, 1000);

    // Update game timer immediately and then every second
    updateGameTimer();
    gameTimerInterval = setInterval(updateGameTimer, 1000);
}

// Start timers when page loads
document.addEventListener('DOMContentLoaded', initializeTimers);
