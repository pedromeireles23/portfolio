class LightBulb {
  constructor() {
    this.bodyBulb = document.querySelector(".lightbulb");
    this.firstBulb = document.querySelector(".lightbulb-click");
    this.otherElements = document.querySelectorAll(".general-class");
    this.revealCircle = document.querySelector(".reveal-circle");
  }

  firstClick() {
    this.bodyBulb.style.display = "none";
    this.otherElements.forEach((element) => {
      element.classList.add("appear-elements");
    });
  }

  lightBulbClickEvent() {
    this.firstBulb.addEventListener("click", this.firstClick.bind(this));
  }

  init() {
    if (this.firstBulb) {
      this.lightBulbClickEvent();
    }
    return this;
  }
}

const lightBulb = new LightBulb();
lightBulb.init();
