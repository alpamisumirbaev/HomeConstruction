document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the saved theme on page load
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '&#9728;'; // Sun icon
        } else {
            body.classList.remove('dark-mode');
            themeToggle.innerHTML = '&#127769;'; // Moon icon
        }
    };

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '&#9728;'; // Sun icon
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '&#127769;'; // Moon icon
        }
    });

    // Apply theme when the page loads
    applyTheme();
});
