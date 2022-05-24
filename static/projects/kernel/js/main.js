/**
 * Main.js
 */

(function() {

  /**
   * Creates an instance of the Swiper Slider
   * @param {DomElement} element
   */
  function swiperFactory(element) {
    new Swiper(element, {
      // Optional parameters
      pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });
  }

  /**
   * Initialise the Gallery
   */
  function galleryInit() {
    const galleryMask = document.getElementById('galleryMask');
    document.getElementById('closeGallery').addEventListener('click', closeGallery);
    /**
     * Get all the elements with a class of 'gallery'
     */
    const galleries = document.getElementsByClassName('gallery');
    for (let i = 0; i < galleries.length; i++) {
      const gallery = galleries[i];
      // Get the <a> tags in the gallery
      const imageLinks = gallery.getElementsByTagName('a') ;
      // Add the event listener to all the links
      for (let imageLink of imageLinks) {
        imageLink.addEventListener('click', (e) => {
          e.preventDefault();
          const link = e.target.nodeName.toLowerCase() === 'img'? e.target.parentNode : e.target;
          const links = getSiblings(link, (el) => {
            return el.nodeName.toLowerCase() === 'a';
          })
          // Create the Swiper HTML and append it to the Gallery mask
          const swiperGallery = createSwiperGallery(links);
          galleryMask.appendChild(swiperGallery);
          galleryMask.classList.add('visible');
          swiperFactory(swiperGallery);
        })
      }

    }
  }

  function closeGallery() {
    document.getElementById('galleryMask').classList.remove('visible');
    const slideGallery = document.getElementById('slideGallery');
    slideGallery.parentNode.removeChild(slideGallery);
  }

  /**
   * Create the HTML required for Swiper
   * @param {Array} links
   */
  function createSwiperGallery(links) {
    // Create the wrapper to hold the slides
    const swiperWrapper = document.createElement('div');
    swiperWrapper.classList.add('swiper-wrapper');
    //Create the slides
    links.forEach(link => {
      const swiperSlide = document.createElement('div');
      swiperSlide.classList.add('swiper-slide');
      // Create an image for each slide
      const swiperImage = document.createElement('img');
      swiperImage.setAttribute('src', link.href);
      // Add the image to the slide
      swiperSlide.appendChild(swiperImage);
      // Add the slide to the wrapper
      swiperWrapper.appendChild(swiperSlide);
    });
    // Create the slider navigation buttons
    const swiperPrevButton = document.createElement('div');
    swiperPrevButton.classList.add('swiper-button-prev');
    const swiperNextButton = document.createElement('div');
    swiperNextButton.classList.add('swiper-button-next');
    // Create the swiper container
    const swiperContainer = document.createElement('div');
    swiperContainer.classList.add('swiper-container');
    swiperContainer.id = 'slideGallery';
    // Add the wrapper to the container
    swiperContainer.appendChild(swiperWrapper);
    // Add the navigation buttons to the container
    swiperContainer.appendChild(swiperPrevButton);
    swiperContainer.appendChild(swiperNextButton);

    return swiperContainer;
  }

  /**
   * Get the Siblings of an Element
   * @param {DomElement} el
   * @param {Function} filter
   */
  function getSiblings(el, filter) {
    var siblings = [];
    el = el.parentNode.firstChild;
    do { if (!filter || filter(el)) siblings.push(el); } while (el = el.nextSibling);
    return siblings;
}


  function init() {
    galleryInit();
  }

  if (
      document.readyState === "complete" ||
      (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();