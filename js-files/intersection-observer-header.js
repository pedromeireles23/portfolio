const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".nav-bar-effect");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
      
        menuLinks.forEach(link => link.classList.remove("active-nav-bar"));

        const id = entry.target.getAttribute("id");
        const activeLink = document.querySelector(`.nav-bar-effect[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active-nav-bar");
      }
    });
  },
  {
    threshold: 0.2, 
  }
);

sections.forEach(section => observer.observe(section));