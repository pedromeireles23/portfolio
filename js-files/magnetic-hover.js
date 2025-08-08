document.addEventListener('DOMContentLoaded', function() {
  const projectImages = document.querySelectorAll('.images-website-container');

  projectImages.forEach(container => {
    container.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.1s ease-out, box-shadow 0.4s ease';
    });

    container.addEventListener('mouseleave', function() {
      this.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      this.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
    });

    container.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * 0.15;
      const deltaY = (e.clientY - centerY) * 0.15;
      
      const rotateX = (e.clientY - centerY) * 0.02;
      const rotateY = (e.clientX - centerX) * 0.02;
      
      this.style.transform = `
        translateY(-12px) 
        translateX(${deltaX}px) 
        translateZ(${deltaY}px) 
        scale(1.03) 
        rotateX(${-rotateX}deg) 
        rotateY(${rotateY}deg)
      `;
    });
  });

  const certificationCards = document.querySelectorAll('.certifications-container-son');
  
  certificationCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.1s ease-out';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      this.style.transform = 'translateY(0) scale(1)';
    });

    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * 0.08;
      const deltaY = (e.clientY - centerY) * 0.08;
      
      this.style.transform = `
        translateX(${deltaX}px) 
        translateY(${deltaY - 5}px) 
        scale(1.02)
      `;
    });
  });

  const academicCards = document.querySelectorAll('.container-academic-training');
  
  academicCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.1s ease-out';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      this.style.transform = 'translateY(0) scale(1)';
    });

    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * 0.05;
      const deltaY = (e.clientY - centerY) * 0.05;
      
      this.style.transform = `
        translateX(${deltaX}px) 
        translateY(${deltaY - 8}px) 
        scale(1.02)
      `;
    });
  });
});