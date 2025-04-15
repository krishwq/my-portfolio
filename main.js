(function() {
    "use strict";
  
    /**
     * Header toggle
     */
    const headerToggleBtn = document.querySelector('.header-toggle');
  
    function headerToggle() {
      document.querySelector('#header').classList.toggle('header-show');
      headerToggleBtn.classList.toggle('bi-list');
      headerToggleBtn.classList.toggle('bi-x');
    }
    headerToggleBtn.addEventListener('click', headerToggle);
  
    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.header-show')) {
          headerToggle();
        }
      });
  
    });

    function calculateAge(birthDate) {
        // Get the current date
        const today = new Date();
        // Extract the year, month, and day from the birthDate
        const birthYear = birthDate.getFullYear();

        // Calculate age
        let age = today.getFullYear() - birthYear;
        return age;
    }

    function updateAge() {
        // Set your date of birth here (use YYYY, MM-1, DD)
        const birthDate = new Date(2005, 11, 20); // Example: April 15, 1999
        const age = calculateAge(birthDate);

        // Update the displayed age
        document.getElementById("ageDisplay").innerText = age;
    }
    window.addEventListener('load',()=>{
        updateAge();
    })
  
    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });
  
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  
    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');
  
    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    }
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  
    /**
     * Animation on scroll function and init
     */
    function aosInit() {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', aosInit);
  
    /**
     * Init typed.js
     */
    document.addEventListener('DOMContentLoaded', () => {
        const typedElement = document.querySelector('.typed');
        if (typedElement) {
          const typedItems = typedElement.getAttribute('data-typed-items').split(', ');
    
          new Typed('.typed', {
            strings: typedItems,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true
          });
        }
      });
  
    /**
     * Animate the skills items on reveal
     */
    document.addEventListener('DOMContentLoaded', () => {
        const skillSection = document.querySelector('.skills-animation');
        if (skillSection) {
          new Waypoint({
            element: skillSection,
            offset: '80%',
            handler: function() {
              const progressBars = skillSection.querySelectorAll('.progress-bar');
              progressBars.forEach(bar => {
                const value = bar.getAttribute('aria-valuenow');
                bar.style.width = value + '%';
              });
              this.destroy(); // Trigger only once
            }
          });
        }
      });
 
  
    /**
     * Correct scrolling position upon page load for URLs containing hash links.
     */
    window.addEventListener('load', function(e) {
      if (window.location.hash) {
        if (document.querySelector(window.location.hash)) {
          setTimeout(() => {
            let section = document.querySelector(window.location.hash);
            let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    });
  
    /**
     * Navmenu Scrollspy
     */
    let navmenulinks = document.querySelectorAll('.navmenu a');
  
    function navmenuScrollspy() {
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        let section = document.querySelector(navmenulink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      })
    }
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);

  
  })();