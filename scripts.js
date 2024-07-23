document.addEventListener('DOMContentLoaded', function() {
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            const offset = (window.innerHeight - targetElement.offsetHeight) / 2;
            window.scrollTo({
                top: targetElement.getBoundingClientRect().top + window.scrollY - offset,
                behavior: 'smooth'
            });
        });
    });

    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.style.setProperty('--x', Math.random() * 100 + 'vw');
        star.style.setProperty('--y', Math.random() * 100 + 'vh');
        star.style.setProperty('transform', `translate(var(--x), var(--y))`);
    });

    const contentElements = document.querySelectorAll('.content');
    contentElements.forEach(element => {
        element.classList.add('scroll-animation');
    });
});
