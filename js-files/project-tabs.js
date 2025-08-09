class ProjectTabs {
  constructor() {
    this.tabButtons = document.querySelectorAll('.tab-btn');
    this.projectCategories = document.querySelectorAll('.project-category');
    this.currentCategory = 'wordpress'; // Default active category
    this.animationDuration = 300; // ms
  }

  init() {
    this.bindEvents();
    this.setInitialState();
    return this;
  }

  bindEvents() {
    this.tabButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const category = e.target.dataset.category;
        if (category && category !== this.currentCategory) {
          this.switchCategory(category);
        }
      });
    });
  }

  setInitialState() {
    // Ensure the first tab is active
    const firstTab = document.querySelector('.tab-btn[data-category="wordpress"]');
    const firstCategory = document.querySelector('.project-category[data-category="wordpress"]');
    
    if (firstTab && firstCategory) {
      firstTab.classList.add('active');
      firstCategory.classList.add('active');
    }
  }

  switchCategory(newCategory) {
    const currentTab = document.querySelector(`.tab-btn[data-category="${this.currentCategory}"]`);
    const newTab = document.querySelector(`.tab-btn[data-category="${newCategory}"]`);
    const currentCategoryEl = document.querySelector(`.project-category[data-category="${this.currentCategory}"]`);
    const newCategoryEl = document.querySelector(`.project-category[data-category="${newCategory}"]`);

    if (!newTab || !newCategoryEl) return;

    // Update button states
    this.tabButtons.forEach(btn => btn.classList.remove('active'));
    newTab.classList.add('active');

    // Animate category transition
    this.animateCategorySwitch(currentCategoryEl, newCategoryEl);

    // Update current category
    this.currentCategory = newCategory;
  }

  animateCategorySwitch(currentEl, newEl) {
    // Phase 1: Fade out current category
    if (currentEl) {
      currentEl.classList.add('fade-out');
      
      setTimeout(() => {
        currentEl.classList.remove('active', 'fade-out');
      }, this.animationDuration / 2);
    }

    // Phase 2: Fade in new category
    setTimeout(() => {
      newEl.classList.add('active');
      
      // Trigger magnetic hover effects for new projects
      setTimeout(() => {
        this.triggerMagneticHover(newEl);
      }, 50);
      
    }, this.animationDuration / 2);
  }

  // Re-initialize magnetic hover effects for newly shown projects
  triggerMagneticHover(categoryEl) {
    const projectImages = categoryEl.querySelectorAll('.images-website-container');
    
    projectImages.forEach(container => {
      // Remove existing event listeners to avoid duplicates
      const newContainer = container.cloneNode(true);
      container.parentNode.replaceChild(newContainer, container);
      
      // Add magnetic hover effects
      this.addMagneticHover(newContainer);
    });
  }

  addMagneticHover(container) {
    container.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.1s ease-out, box-shadow 0.6s ease';
    });

    container.addEventListener('mouseleave', function() {
      this.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      this.style.transform = 'translateY(0) translateX(0) scale(1)';
    });

    container.addEventListener('mousemove', function(e) {
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
  }

  // Method to add new category programmatically
  addCategory(categoryName, displayName, projects = []) {
    // Create new tab button
    const tabContainer = document.querySelector('.project-tabs');
    const newTabBtn = document.createElement('button');
    newTabBtn.className = 'tab-btn';
    newTabBtn.dataset.category = categoryName;
    newTabBtn.textContent = displayName;
    tabContainer.appendChild(newTabBtn);

    // Create new category container
    const projectsSection = document.querySelector('.projects-section');
    const newCategory = document.createElement('div');
    newCategory.className = 'project-category';
    newCategory.dataset.category = categoryName;

    // Add projects to the category
    if (projects.length > 0) {
      const projectsGrid = document.createElement('div');
      projectsGrid.className = 'websites-projects';
      
      projects.forEach(project => {
        const projectContainer = document.createElement('div');
        projectContainer.className = 'images-website-container';
        projectContainer.dataset.project = categoryName;
        
        projectContainer.innerHTML = `
          <a href="${project.url}" target="_blank">
            <img src="${project.image}" alt="${project.title}" class="images-website" />
          </a>
        `;
        
        projectsGrid.appendChild(projectContainer);
      });
      
      newCategory.appendChild(projectsGrid);
    }

    // Insert before footer
    const footer = document.querySelector('footer');
    projectsSection.insertBefore(newCategory, footer.previousElementSibling);

    // Rebind events to include new button
    this.tabButtons = document.querySelectorAll('.tab-btn');
    this.projectCategories = document.querySelectorAll('.project-category');
    this.bindEvents();
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const projectTabs = new ProjectTabs();
  projectTabs.init();
  
  // Make it globally accessible for adding categories
  window.projectTabs = projectTabs;
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ProjectTabs;
} else {
  window.ProjectTabs = ProjectTabs;
}