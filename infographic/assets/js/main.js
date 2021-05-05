(function () {
  'use strict';

  const animationInit = function () {
    const $animatedElements = document.querySelectorAll('.box,.line span');

    // Check if there are any animated elements
    if ($animatedElements.length > 0) {
      Array.prototype.forEach.call($animatedElements, function ($el) {
        // Add an animationend event on each of them
        $el.addEventListener('animationend', function (e) {
          // Look for the element that should be animated next
          const $nextElement = document.querySelector(
            '#' + e.target.dataset.next
          );
          // If a next element is found, start the animation on that
          if ($nextElement) {
            $nextElement.classList.add('run');
          }
        });
      });
    }

    // Start the animation off on the start element
    document.querySelector('.start').classList.add('run');
  };

  const scrollInit = function () {
    var scroll_position = 0,
      tick = false,
      $body = document.getElementsByTagName('body').item(0);
    window.addEventListener('scroll', function (e) {
      scroll_position = window.scrollY;
      if (!tick) {
        window.requestAnimationFrame(function () {
          if (scroll_position > 0 && !$body.classList.contains('scrolling')) {
            $body.classList.add('scrolling');
          }
          if (scroll_position == 0) {
            $body.classList.remove('scrolling');
          }
          tick = false;
        });
        tick = true;
      }
    });
  };

  const init = function () {
    scrollInit();
    animationInit();
  };

  if (
    document.readyState === 'complete' ||
    (document.readyState !== 'loading' && !document.documentElement.doScroll)
  ) {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
