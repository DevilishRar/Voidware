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

    // Make stars move around the website
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.style.setProperty('--x', Math.random() * 100 + 'vw');
        star.style.setProperty('--y', Math.random() * 100 + 'vh');
        star.style.setProperty('transform', `translate(var(--x), var(--y))`);
    });

    // Script modal functionality
    const scriptButton = document.getElementById('script-button');
    const scriptModal = document.getElementById('script-modal');
    const closeModalButton = document.getElementById('close-modal');
    const copyScriptButton = document.getElementById('copy-script');
    const scriptContent = document.getElementById('script-content');
    const notification = document.getElementById('notification');

    scriptButton.addEventListener('click', function() {
        scriptModal.classList.remove('hidden');
        scriptContent.value = `loadstring(game:HttpGet("https://raw.githubusercontent.com/VapeVoidware/vapevoidware/main/NewMainScript.lua", true))()`;
        scriptContent.select();
        document.execCommand('copy');
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    });

    closeModalButton.addEventListener('click', function() {
        scriptModal.classList.add('hidden');
    });

    copyScriptButton.addEventListener('click', function() {
        scriptContent.select();
        document.execCommand('copy');
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    });
});
