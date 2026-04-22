/**
 * Govinda Brigante Homepage - JavaScript
 * Gestisce l'animazione Face ID splash screen e interazioni con le card
 */

// ============================================
// FACE ID SPLASH SCREEN LOGIC
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Auto-hide splash after 2 seconds with fade-out effect
    setTimeout(function() {
        const splashElement = document.getElementById('splash');
        if (splashElement) {
            splashElement.classList.add('fade-out');
            // Remove splash from DOM after fade-out completes
            setTimeout(function() {
                splashElement.style.display = 'none';
            }, 400); // Match the CSS transition duration (0.4s)
        }
    }, 2000); // 2 second duration as specified

    // ============================================
    // WAVING HAND EMOJI ANIMATION
    // ============================================

    const wavingHand = document.getElementById('waving-hand');
    if (wavingHand) {
        wavingHand.addEventListener('click', function() {
            // Remove the wave class if it exists
            wavingHand.classList.remove('wave');
            // Trigger reflow to restart animation
            void wavingHand.offsetWidth;
            // Add the wave class to start animation
            wavingHand.classList.add('wave');
        });
    }
});