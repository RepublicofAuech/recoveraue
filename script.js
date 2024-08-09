function executeGlitch() {
    const button = document.getElementById('glitchButton');
    
    // Add a class to trigger the extreme glitch effect
    button.classList.add('glitch-active');
    
    // After the glitch effect is executed, remove the button
    setTimeout(() => {
        button.style.opacity = '0';
        setTimeout(() => {
            button.style.display = 'none';
        }, 500); // Match this timeout with the CSS transition duration
    }, 1600); // Duration of the glitch animation (0.2s * 8)
}
