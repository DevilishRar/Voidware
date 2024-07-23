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
        scriptModal.classList.remove('hide');
        scriptModal.classList.add('show');
        scriptModal.style.display = 'flex';
        const scriptText = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/VapeVoidware/vapevoidware/main/NewMainScript.lua", true))()';
        scriptContent.innerText = scriptText;
        copyToClipboard(scriptText);
        showNotification();
    });

    closeModalButton.addEventListener('click', function() {
        scriptModal.classList.remove('show');
        scriptModal.classList.add('hide');
        setTimeout(() => {
            scriptModal.style.display = 'none';
        }, 500);
    });

    copyScriptButton.addEventListener('click', function() {
        const scriptText = scriptContent.innerText;
        copyToClipboard(scriptText);
        showNotification();
    });

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    function showNotification() {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
});
