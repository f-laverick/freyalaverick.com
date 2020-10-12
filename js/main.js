
  // var mySwiper = new Swiper('.swiper-container', {
  //   // Optional parameters
  //   pagination: {
  //         el: '.swiper-pagination',
  //         type: 'fraction',
  //       },
  //       navigation: {
  //         nextEl: '.swiper-button-next',
  //         prevEl: '.swiper-button-prev',
  //       },
  // });

(function() {

  function swiperFactory(elementId) {
    new Swiper(elementId, {
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
  function init() {
    const galleryButtons = document.getElementsByClassName('gallery-button');
    const galleryMask = document.getElementById('galleryMask');
    const closeButton = document.getElementById('closeGallery');
    let gallery = null;
    let swiper = null;
    for (var i = galleryButtons.length - 1; i >= 0; i--) {
      galleryButtons[i].addEventListener('click', function(e) {
        galleryMask.classList.add('visible');
        gallery = document.getElementById(e.target.dataset.gallery);
        gallery.classList.add('visible');

        swiper = swiperFactory(gallery);
      })
    }
    closeGallery.addEventListener('click', e => {
      gallery.classList.remove('visible');
      gallery = swiper = null;
      galleryMask.classList.remove('visible');
    });
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