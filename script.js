document.addEventListener('DOMContentLoaded', function () {
    const greetingElement = document.getElementById('greeting-text');
    const now = new Date();
    const hour = now.getHours();
    let greetingMessage = "Hello,";

    // Logic for time of day
    if (hour >= 5 && hour < 12) {
        greetingMessage = "Good Morning! ☀️";
    } else if (hour >= 12 && hour < 17) {
        greetingMessage = "Good Afternoon! 🌤️";
    } else if (hour >= 17 && hour < 22) {
        greetingMessage = "Good Evening! 🌙";
    } else {
        greetingMessage = "Hello, Night Owl! 🦉";
    }

    greetingElement.textContent = greetingMessage;
});