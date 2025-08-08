const header = document.getElementById('main-header');

if (header) {
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > 50) {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
    } else {
      header.style.backgroundColor = 'black';
      header.style.backdropFilter = 'none';
    }
  });
}
