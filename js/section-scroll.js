const pageSections = ['hero-section', 'services-section', 'why-choose-section', 'team-section', 'footer-section'];
pageSections.forEach(section => {
    const anchor = document.querySelector(`#${section}`);
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // or 'center', 'end'
        });
    });
})

