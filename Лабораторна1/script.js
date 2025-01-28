// Легкий JavaScript для форми
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Запобігає перезавантаженню сторінки
  alert('Дякуємо за ваше повідомлення! Ми зв’яжемося з вами найближчим часом.');
  contactForm.reset(); // Очищує поля форми
});