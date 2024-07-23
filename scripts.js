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

    // Script copy functionality
    const scriptButton = document.getElementById('script-button');
    const notification = document.getElementById('notification');
    const progressBar = document.getElementById('progress-bar');

    scriptButton.addEventListener('click', function() {
        const scriptText = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/VapeVoidware/vapevoidware/main/NewMainScript.lua", true))()';
        copyToClipboard(scriptText);
    });

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        // Show notification when the script is copied
        showNotification();
    }

    function showNotification() {
        notification.classList.remove('hide');
        notification.classList.add('show');
        progressBar.style.width = '100%';

        setTimeout(() => {
            notification.classList.remove('show');
            notification.classList.add('hide');
        }, 3000);
    }
});
