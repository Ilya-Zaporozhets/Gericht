// Get all pagination items
const paginationItems = document.querySelectorAll('.pagination__item');

// Initialize Swiper
let myImageSlider = new Swiper('.bar-hero__swiper', {
  simulateTouch: false,
  slideToClickedSlide: false,
  hashNavigation: {
    watchState: true,
  },
  keyboard: {
    enabled: false,
  },
  autoHeight: false,
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  centeredSlides: true,
  initialSlide: 1,
  slidesPerColumn: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  speed: 500,
  direction: 'vertical',
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  preloadImages: true,
  lazy: {
    loadOnTransitionStart: true,
    loadPrevNext: true,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Add this option to make pagination clickable
  },
  on: {
    slideChange: function () {
      // Get the index of the current slide
      const currentIndex = this.realIndex;

      // Update pagination
      updatePagination(currentIndex);
    },
  },
});

// Function to update pagination
function updatePagination(currentIndex) {
  // Remove the "active" class from all pagination items
  paginationItems.forEach((item) => {
    item.classList.remove('active');
  });

  // Calculate the index of the active item with cyclic switching
  const adjustedIndex = (currentIndex + paginationItems.length - 1) % paginationItems.length;

  // Add the "active" class only to the current pagination item
  paginationItems[adjustedIndex].classList.add('active');
}
