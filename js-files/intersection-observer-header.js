document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('#home, #about-me, #projects, #contact');
  const menuLinks = document.querySelectorAll('header nav a');
  const header = document.querySelector('header');

  if (sections.length === 0 || menuLinks.length === 0) {
    return;
  }

  function setActiveLink(activeId) {
    menuLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === '#' + activeId) {
        link.classList.add('active');
      }
    });
  }

  function getCurrentSection() {
    const headerHeight = header ? header.offsetHeight : 80;
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollTop + windowHeight >= documentHeight - 50) {
      return 'contact';
    }
    
    const sectionsArray = Array.from(sections).sort((a, b) => a.offsetTop - b.offsetTop);
    
    for (let i = sectionsArray.length - 1; i >= 0; i--) {
      const section = sectionsArray[i];
      const sectionTop = section.offsetTop - headerHeight - 100;
      
      if (scrollTop >= sectionTop) {
        return section.id;
      }
    }
    
    return 'home';
  }

  function updateActiveLink() {
    const currentSection = getCurrentSection();
    setActiveLink(currentSection);
  }

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll);

  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');

      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          const headerHeight = header ? header.offsetHeight : 80;
          const targetPosition = targetSection.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  setTimeout(() => {
    if (window.pageYOffset === 0) {
      setActiveLink('home');
    } else {
      updateActiveLink();
    }
  }, 100);
});