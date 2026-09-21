const techCards = document.querySelectorAll('.tech-card');

techCards.forEach(card => {
    card.addEventListener('click', () => {
        techCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        const techName = card.dataset.tech;
        console.log(`Выбрано: ${techName}`);
    });
});

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(el => revealObserver.observe(el));

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }
});