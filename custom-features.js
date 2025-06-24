
// Custom features for WebGL build
console.log('🎮 Game-specific features loaded');

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // ESC key functionality (if needed)
    if (event.code === 'Escape') {
        console.log('ESC key pressed');
        // You can add custom behavior here
    }
    
    // F11 for fullscreen
    if (event.code === 'F11') {
        event.preventDefault();
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
});

// Mobile device detection
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    console.log('📱 Mobile device detected');
    // Add mobile-specific optimizations
    document.body.classList.add('mobile');
}

// Performance monitoring
let lastTime = performance.now();
function trackFPS() {
    const now = performance.now();
    const fps = 1000 / (now - lastTime);
    lastTime = now;
    
    // Log FPS every 5 seconds (optional)
    if (Math.floor(now / 5000) !== Math.floor((now - 16) / 5000)) {
        console.log(`FPS: ${Math.round(fps)}`);
    }
    
    requestAnimationFrame(trackFPS);
}
requestAnimationFrame(trackFPS);
