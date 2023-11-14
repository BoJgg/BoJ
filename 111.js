document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('mouseenter', function () {
            const underline = document.querySelector('.underline');
            underline.style.width = `${this.offsetWidth}px`;
            underline.style.left = `${this.offsetLeft}px`;
        });

        anchor.addEventListener('mouseleave', function () {
            const underline = document.querySelector('.underline');
            underline.style.width = '0';
        });
    });
});

let currentIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item');

function showSlide(index) {