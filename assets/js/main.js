/**
* Template Name: Techie - v4.7.0
* Template URL: https://bootstrapmade.com/techie-free-skin-bootstrap-3/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  
  "use strict";
//alert(" تم تحقق الشرط")




  /**
   
   * 
   
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 900,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
    });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
      this.classList.add('filter-active');



        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
    }
  });
  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });
  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 500,
    loop: true,
    autoplay: {
      delay:  3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration:  1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });
})()
/* 
Vanilla Template

https://templatemo.com/tm-526-vanilla

*/



document.addEventListener('DOMContentLoaded', function() {
  const itemsPerPage = 9; // عدد العناصر التي ستظهر في كل دفعة
  const portfolioItems = document.querySelectorAll('.portfolio-container .portfolio-item');
  const loadMoreBtn = document.getElementById('loadMore');
  const spinner = document.getElementById('spinner');
  let loadMoreCount = 1; // يبدأ من 1 ويتم زيادته مع كل ضغطة
  
  // إخفاء العناصر التي تتجاوز الدفعة الأولى
  portfolioItems.forEach((item, index) => {
    if (index >= itemsPerPage) {
      item.classList.add('hidden');
    }
  });
  
  // تهيئة مكتبة Isotope لتصفية وتنسيق العناصر
  const portfolioContainer = document.querySelector('.portfolio-container');
  const isotopeInstance = new Isotope(portfolioContainer, {
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });
 
 loadMoreBtn.addEventListener('click', function() {
  // إظهار مؤشر التحميل
  spinner.classList.remove('hidden');
  
  setTimeout(function() {
    const hiddenItems = document.querySelectorAll('.portfolio-container .portfolio-item.hidden');
    let itemsRevealed = [];
    // إزالة الكلاس "hidden" من دفعة من العناصر
    for (let i = 0; i < itemsPerPage && i < hiddenItems.length; i++) {
      hiddenItems[i].classList.remove('hidden');
      itemsRevealed.push(hiddenItems[i]);
    }
    
    // الانتظار حتى تُحمّل الصور الجديدة بالكامل باستخدام imagesLoaded
    imagesLoaded(itemsRevealed, function() {
      // إعادة تجميع العناصر الجديدة داخل Isotope
      isotopeInstance.reloadItems();
      // إعادة ترتيب العناصر بعد تحميل الصور
      isotopeInstance.arrange();
      // إخفاء مؤشر التحميل
      spinner.classList.add('hidden');
    });
    
    // زيادة عداد الضغط وتحديث نص الزر
    loadMoreCount++;
    loadMoreBtn.textContent = `Show More  (${loadMoreCount})`;
    
    // إخفاء الزر إذا لم يتبقَ عناصر مخفية
    if (document.querySelectorAll('.portfolio-container .portfolio-item.hidden').length === 0) {
      loadMoreBtn.style.display = 'none';
    }
    
  }, 500); // تأخير بسيط يمكن تعديله حسب الحاجة
});
});

// إعدادات اختيارية لمكتبة Lightbox2
// تخصيص خيارات مكتبة Lightbox2// تخصيص خيارات مكتبة Lightbox2
const galleryLightbox = GLightbox({

    selector: '.gallery-lightbox'

  });
  
  
  
  
  
  
  
  
  document.addEventListener("DOMContentLoaded", function() {
      // فحص ما إذا كان المستخدم يستخدم جهاز محمول
      var isMobile = window.innerWidth < 768;
      
      if(isMobile) {
        var modal = document.getElementById("desktopModal");
        modal.style.display = "block";
        
        // إغلاق المودال عند الضغط على زر الإغلاق
        var closeBtn = document.getElementsByClassName("close")[0];
        closeBtn.onclick = function() {
          modal.style.display = "none";
        }
        
        // إغلاق المودال عند الضغط خارج محتواه
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
      }
    });