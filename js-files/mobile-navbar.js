class MobileNavbar {
  constructor() {
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.navList = document.querySelector('.nav-list-mobile');
    this.navLinks = document.querySelectorAll('.nav-links');
    this.activeClass = 'active';

    this.handleClick = this.handleClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  closeMenu() {
    this.navList.classList.remove(this.activeClass);
    this.mobileMenu.classList.remove(this.activeClass);
    this.animateLinks();
  }

  handleOutsideClick(event) {
    if (
      this.navList.classList.contains(this.activeClass) &&
      !this.navList.contains(event.target) &&
      !this.mobileMenu.contains(event.target)
    ) {
      this.closeMenu();
    }
  }

  addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick);
  }

  addLinkClickEvent() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', this.closeMenu);
    });
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
      this.addLinkClickEvent();
      document.addEventListener('click', this.handleOutsideClick);
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar();
mobileNavbar.init();
