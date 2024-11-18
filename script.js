// Exemplo simples de animação de scroll suave para links de projeto
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // remove o "#"
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // 50px de margem
                behavior: 'smooth'
            });
        }
    });
});
