(function () {
  'use strict';

  const navbarInit = function () {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      Array.prototype.forEach.call($navbarBurgers, function ($el) {
        // Get the target from the "data-target" attribute
        const target = $el.dataset.target,
          $target = document.getElementById(target);

        // Add a click event on each of them
        $el.addEventListener('click', function (e) {
          // Toggle the 'is-active' class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  };

  const resetDropdownToggles = function ($toggles, $clicked) {
    // Collapse all other dropdowns
    Array.prototype.forEach.call($toggles, function ($toggle) {
      if (
        !$clicked.isSameNode($toggle) &&
        $toggle.classList.contains('is-active')
      ) {
        // Remove the class on both the dropdown toggle and the dropdown target
        $toggle.classList.remove('is-active');
        $toggle.querySelector('.navbar-dropdown').classList.remove('is-active');
      }
    });
  };

  const animationInit = function () {
    const $animatedElements = document.querySelectorAll('.box,.line');

    // Check if there are any animated elements
    if ($animatedElements.length > 0) {
      Array.prototype.forEach.call($animatedElements, function ($el) {
        // Add an animationend event on each of them
        $el.addEventListener('animationend', function (e) {
          const nextElement = e.target.dataset.next;
          this.querySelector(nextElement).classList.add('run');
        });
      });
    }
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
