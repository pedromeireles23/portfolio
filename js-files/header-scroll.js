let lastScrollTop = 0;
const header = document.getElementById('main-header');

if (header) {
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > 60) {
      if (currentScroll > lastScrollTop) {
        header.style.top = '-100px';
        header.style.opacity = '0';
      } else {
        header.style.top = '0';
        header.style.opacity = '1';
      }
    } else {
      header.style.top = '0';
      header.style.opacity = '1';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
}
