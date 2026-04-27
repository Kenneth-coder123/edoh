// BUG CORRIGÉ : ce fichier contenait du HTML au lieu de JavaScript
// Il est maintenant un vrai fichier .js avec la logique du bouton animé

/**
 * Affiche/masque le message de confirmation
 * Utilisé dans index.html ou toute page avec un bouton animé
 */
function showMessage() {
    const msg = document.getElementById("msg");
    if (msg) {
        msg.classList.toggle("visible");
    }
}

/**
 * Animation d'entrée au scroll (optionnel)
 * Ajoute la classe "visible" aux éléments avec data-animate quand ils entrent dans la vue
 */
document.addEventListener("DOMContentLoaded", function () {
    const animElements = document.querySelectorAll("[data-animate]");

    if (animElements.length > 0) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.1 });

        animElements.forEach(function (el) {
            observer.observe(el);
        });
    }
});
