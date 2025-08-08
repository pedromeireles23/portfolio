document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll(`
    .about-me h2,
    .about-me h3,
    .about-me p,
    .academic-training h2,
    .container-academic-training,
    .certifications h2,
    .certifications-container-son,
    .projects-section h2,
    .projects-section p,
    .websites-projects
  `);

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateElements.forEach(element => {
    observer.observe(element);
  });
});