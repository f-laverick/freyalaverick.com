(function () {
  'use strict';

  let scrollPosition = 0,
    windowBottom = 0,
    $animatedElements = null,
    nextElement = null;

  const animationInit = function () {
    $animatedElements = document.querySelectorAll('.box,.line span');

    // Check if there are any animated elements
    if ($animatedElements.length > 0) {
      Array.prototype.forEach.call($animatedElements, function ($el) {
        // Add an animationend event on each of them
        $el.addEventListener('animationend', function (e) {
          // If a next element is found, start the animation on that
          if (e.target.dataset.next) {
            // Look for the element that should be animated next
            const $nextElement = document.querySelector(
              '#' + e.target.dataset.next
            );
            $nextElement.classList.add('run');
          }
        });
      });
    }

    // Start the animation off on the start element
    document.querySelector('.start').classList.add('run');
  };

  const scrollInit = function () {
    let tick = false,
      $body = document.getElementsByTagName('body').item(0);
    window.addEventListener('scroll', function (e) {
      scrollPosition = window.scrollY;
      windowBottom = scrollPosition + window.outerHeight;
      if (!tick) {
        window.requestAnimationFrame(function () {
          if (scrollPosition > 0 && !$body.classList.contains('scrolling')) {
            $body.classList.add('scrolling');
          }
          if (scrollPosition == 0) {
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
    if (document.querySelector('.start')) {
      animationInit();
    }
    const $videoPlayer = document.querySelector('#videoPlayer');
    if ($videoPlayer) {
      $videoPlayer.addEventListener('ended', (e) => {
        document.querySelector('#videoText').classList.add('active');
      });
    }
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
