document.addEventListener("DOMContentLoaded", function () {
  const projectImages = document.querySelectorAll(".images-website-container");

  projectImages.forEach((container) => {
    container.addEventListener("mouseenter", function () {
      this.style.transition = "transform 0.1s ease-out, box-shadow 0.6s ease";
    });

    container.addEventListener("mouseleave", function () {
      this.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
      this.style.transform = "translateY(0) translateX(0) scale(1)";
    });

    container.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * 0.08;
      const deltaY = (e.clientY - centerY) * 0.08;

      this.style.transform = `
        translateY(-8px) 
        translateX(${deltaX}px) 
        translateY(${deltaY - 8}px) 
        scale(1.03)
      `;
    });
  });

  const certificationCards = document.querySelectorAll(
    ".certifications-container-son"
  );

  certificationCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transition = "transform 0.1s ease-out, box-shadow 0.6s ease";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
      this.style.transform = "translateY(0) translateX(0) scale(1)";
    });

    card.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * 0.06;
      const deltaY = (e.clientY - centerY) * 0.06;

      this.style.transform = `
        translateY(-8px) 
        translateX(${deltaX}px) 
        translateY(${deltaY - 8}px) 
        scale(1.02)
      `;
    });
  });
});
