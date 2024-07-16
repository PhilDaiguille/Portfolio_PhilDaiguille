export class carousel {
  constructor (selector) {
    this.carousel = document.querySelector(selector);
    this.carouselList = this.carousel.querySelector(".carrousel figure");
    this.dragThreshold = 5;
    this.scrollSpeed = 1.6;

    this.grabCursor = "grab";
    this.isGrabbing = false;
    this.isScrolling = false;
    this.startX = 0;
    this.scrollLeft = 0;

    this.carousel.addEventListener("mousedown", this.onMouseDown);
    this.carousel.addEventListener("mouseleave", this.onMouseLeave);
    this.carousel.addEventListener("mouseup", this.onMouseUp);
    this.carousel.addEventListener("mousemove", this.onMouseMove);
    this.carousel.addEventListener("click", this.onClick);
  }

  onMouseDown = (e) => {
    this.isGrabbing = true;
    this.startX = e.pageX - this.carouselList.offsetLeft;
    this.scrollLeft = this.carousel.scrollLeft;
    this.carousel.classList.add("grabbing");
    this.carousel.style.cursor = this.grabCursor;
  };

  onMouseLeave = () => {
    if (this.isGrabbing) {
      this.isGrabbing = false;
      this.carousel.classList.remove("grabbing");
    }
    this.carousel.style.cursor = "auto";
  };

  onMouseUp = (e) => {
    if (this.isGrabbing) {
      this.isGrabbing = false;
      this.carousel.classList.remove("grabbing");
      this.isScrolling =
        Math.abs(this.startX - (e.pageX - this.carouselList.offsetLeft)) >
        this.dragThreshold;
    }
    this.carousel.style.cursor = "auto";
  };

  onMouseMove = (e) => {
    if (!this.isGrabbing) return;
    e.preventDefault();
    const x = e.pageX - this.carouselList.offsetLeft;
    const walk = (x - this.startX) * this.scrollSpeed;
    this.carousel.scrollLeft = this.scrollLeft - walk;
    this.isScrolling = true;
    this.carousel.style.cursor = "grabbing";
  };

  onClick = (e) => {
    if (this.isScrolling) {
      e.preventDefault();
      this.isScrolling = false;
    }
  };
}
