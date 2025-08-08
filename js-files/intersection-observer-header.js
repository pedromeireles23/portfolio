const sections = document.querySelectorAll('section');
const menuLinks = document.querySelectorAll('header nav a');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        menuLinks.forEach(link => link.classList.remove('active'));

        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  },
  {
    threshold: 0.3,
    rootMargin: '-20% 0px -70% 0px'
  }
);

sections.forEach(section => observer.observe(section));