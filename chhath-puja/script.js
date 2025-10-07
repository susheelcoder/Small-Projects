const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


// /////////////////////

const aboutRows = document.querySelectorAll('.about-row');
window.addEventListener('scroll', () => {
    aboutRows.forEach(row => {
        const rect = row.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            row.classList.add('visible');
        }
    });
});




// Optional: gentle reveal on load for better UX
document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.about-row');
    rows.forEach((r, i) => {
        r.style.opacity = 0;
        r.style.transform = 'translateY(10px)';
        setTimeout(() => {
            r.style.transition = 'opacity 400ms ease, transform 400ms ease';
            r.style.opacity = 1;
            r.style.transform = 'translateY(0)';
        }, 120 * i);
    });
});

