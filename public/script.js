// Get elements
const button = document.getElementById('clickBtn');
const message = document.getElementById('message');

// Counter variable
let clickCount = 0;

// Add event listener
button.addEventListener('click', () => {
    clickCount++;
    message.textContent = `Button clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}!`;
    
    // Add animation effect
    message.style.transform = 'scale(1.1)';
    setTimeout(() => {
        message.style.transform = 'scale(1)';
    }, 200);
});

// Add transition to message
message.style.transition = 'transform 0.2s ease';

// Console log to confirm script is loaded
console.log('Script loaded successfully!');
