// 1. Dark Mode Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Check if user previously selected dark mode
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Light Mode';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
    
    // Save preference to local storage so it stays when navigating pages
    localStorage.setItem('theme', theme);
});

// 2. Dynamic Greeting (Only runs if on the Home page)
const greetingElement = document.getElementById('greeting');
if (greetingElement) {
    const hour = new Date().getHours();
    let greetingText = 'Welcome to my portfolio!';

    if (hour < 12) {
        greetingText = 'Good morning! Welcome to my portfolio.';
    } else if (hour < 18) {
        greetingText = 'Good afternoon! Welcome to my portfolio.';
    } else {
        greetingText = 'Good evening! Welcome to my portfolio.';
    }

    greetingElement.textContent = greetingText;
}