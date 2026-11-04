// Rolagem suave com verificação segura de âncoras na mesma página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (!href || href === "#") return;
        const destino = document.querySelector(href);
        if (destino) {
            e.preventDefault();
            destino.scrollIntoView({ behavior: "smooth" });
            history.pushState(null, "", href);
        }
    });
});
