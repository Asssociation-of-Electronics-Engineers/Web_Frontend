let lastScrollTop = 0;
const header = document.querySelector('.ep-header');
const scrollThreshold = 100; // minimum scroll before hiding header

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
        // Scrolling down & past threshold
        header.classList.add('hide');
    } else {
        // Scrolling up or at top
        header.classList.remove('hide');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, { passive: true });
