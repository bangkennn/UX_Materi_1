// Animasi fade-in futuristik untuk setiap section
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(section => {
  section.classList.add('pre-fade');
  observer.observe(section);
}); 