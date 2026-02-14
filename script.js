// 1. Generate the Link using Phone Number
function generateReferral() {
    const phone = document.getElementById('referrer-name').value.trim();

    // Basic validation for a 10-digit Ghana number
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number (e.g., 0503747048)");
        return;
    }

    const baseUrl = window.location.href.split('?')[0];
    const finalLink = `${baseUrl}?ref=${phone}`;

    document.getElementById('referral-link').value = finalLink;
    document.getElementById('referral-result').style.display = 'block';

    // Set WhatsApp share message
    const waMessage = `Hi! Use PrimeData Hub for the cheapest data bundles in Ghana. Use my link to get a bonus: ${finalLink}`;
    document.getElementById('whatsapp-share').href = `https://wa.me/?text=${encodeURIComponent(waMessage)}`;
}

// 2. Copy Link to Clipboard
function copyLink() {
    const copyText = document.getElementById('referral-link');
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Referral link copied! Share it to start earning.");
}

// 3. Handle the Referral when a customer visits
window.onload = function () {
    // Greeting logic (Keep your existing time-based greeting here)
    updateGreeting();

    const urlParams = new URLSearchParams(window.location.search);
    const referrerPhone = urlParams.get('ref');

    if (referrerPhone) {
        // Find the "Purchase Data" card
        const purchaseBtn = document.querySelector('.card-orange');

        // This pre-fills your WhatsApp message so you know exactly who to reward
        // Example: "Hi PrimeData, I want to buy data. My referral code is 0503747048"
        const customMsg = `Hi PrimeData Hub, I want to buy data. My referral code is ${referrerPhone}`;

        // Update the link to your WhatsApp number
        purchaseBtn.href = `https://wa.me/233503747048?text=${encodeURIComponent(customMsg)}`;

        // Optional: Show a small welcome message to the new customer
        console.log("Customer referred by: " + referrerPhone);
    }
};

function updateGreeting() {
    const greetingElement = document.getElementById('greeting-text');
    if (!greetingElement) return;
    const hour = new Date().getHours();
    let msg = "Hello,";
    if (hour < 12) msg = "Good Morning! ☀️";
    else if (hour < 17) msg = "Good Afternoon! 🌤️";
    else msg = "Good Evening! 🌙";
    greetingElement.textContent = msg;
}
