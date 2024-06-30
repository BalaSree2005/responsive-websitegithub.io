const productsPromo = document.querySelector('.products-promo');
const promoContent = document.querySelector('.promo-content');

// Add the 'animate' class on mouseover
promoContent.addEventListener('mouseover', () => {
    productsPromo.classList.add('animate');
});

// Remove the 'animate' class on mouseout
promoContent.addEventListener('mouseout', () => {
    productsPromo.classList.remove('animate');
});
