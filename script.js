// 1. Generate Link (Run on refer.html)
function generateReferral() {
    const phoneInput = document.getElementById('referrer-name');
    const resultBox = document.getElementById('referral-result');

    // Safety check: ensure we are on the page with the input
    if (!phoneInput) return;

    const phone = phoneInput.value.trim();

    // Validate Phone Number
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // --- CRITICAL FIX START ---
    // This forces the link to always go to 'index.html', not 'refer.html'
    const cleanOrigin = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
    const finalLink = `${cleanOrigin}/index.html?ref=${phone}`;
    // --- CRITICAL FIX END ---

    document.getElementById('referral-link').value = finalLink;
    resultBox.style.display = 'block';

    // WhatsApp Share Button
    const msg = `Get cheap data on PrimeData! Use my link: ${finalLink}`;
    document.getElementById('whatsapp-share').href = `https://wa.me/?text=${encodeURIComponent(msg)}`;
}

// 2. Handle Visits (Runs on index.html)
window.onload = function () {
    updateGreeting(); // Updates "Good Morning" text

    // Check URL for referral code (e.g., ?ref=0501234567)
    const urlParams = new URLSearchParams(window.location.search);
    const referrer = urlParams.get('ref');

    if (referrer) {
        // Find the Purchase Card (Orange)
        const purchaseBtn = document.querySelector('.card-orange');

        // Safety Check: Only run if the button exists on this page
        if (purchaseBtn) {
            // Logic: Hijack the link to send a pre-filled WhatsApp message
            const adminNumber = "233503747048"; // Your number
            const text = `Hi Admin, I want to buy data. I was referred by: ${referrer}`;

            purchaseBtn.href = `https://wa.me/${adminNumber}?text=${encodeURIComponent(text)}`;

            // Visual feedback (Optional)
            purchaseBtn.querySelector('p').innerText += " ✅";
        }
    }
};

// 3. Greeting Logic
function updateGreeting() {
    const textElement = document.getElementById('greeting-text');
    if (textElement) {
        const hour = new Date().getHours();
        if (hour < 12) textElement.innerText = "Good Morning! ☀️";
        else if (hour < 18) textElement.innerText = "Good Afternoon! 🌤️";
        else textElement.innerText = "Good Evening! 🌙";
    }
}

// 4. Copy Function
function copyLink() {
    const link = document.getElementById('referral-link');
    if (link) {
        link.select();
        document.execCommand("copy");
        alert("Referral link copied! Share it to start earning.");
    }
}
