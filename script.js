// Simple working script
console.log("vSave.in Loaded!");

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    this.textContent = newTheme === 'light' ? '🌙' : '☀️';
});

// Download Button
const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', function() {
    const url = document.getElementById('video-url').value;
    if (!url) {
        alert('कृपया TikTok URL डालें');
        return;
    }
    alert('डाउनलोड शुरू होगा: ' + url);
});

// Option Buttons
document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const type = this.getAttribute('data-type');
        alert(type + ' सिलेक्ट किया गया');
    });
});
