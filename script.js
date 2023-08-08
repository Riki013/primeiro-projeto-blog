document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(function(button) {
      button.addEventListener('click', function() {
          const targetSection = button.dataset.target;
          const section = document.querySelector('.' + targetSection);
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}