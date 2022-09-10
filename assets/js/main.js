/* INÍCIO NAV BAR */

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".navMenu",
  ".navMenu li",
);
mobileNavbar.init();

/* FIM NAV BAR */

// Typescript JS
var typed = new Typed(".typing",{
  strings: ["Desenvolvedor front-end"],
  typeSpeed: 80,
  backSpeed: 80,
});

/* Filter Certificados */

$('.botao').on('click', function() {

  let type = $(this).attr('id');
  let boxes = $('.element-item');

  $('.botao').removeClass('active');
  $(this).addClass('active');

  if(type == 'logica-btn') {
    eachBoxes('logica', boxes);
  } else if(type == 'html-btn') {
    eachBoxes('html', boxes);
  } else if(type == 'css-btn') {
    eachBoxes('css', boxes);
  } else if(type == 'javascript-btn') {
    eachBoxes('javascript', boxes);
  }else if(type == 'bootstrap-btn') {
    eachBoxes('bootstrap', boxes);
  }else if(type == 'git-btn') {
    eachBoxes('git', boxes);
  }
    else {
    eachBoxes('all', boxes);
  }

});

function eachBoxes(type, boxes) {

  if(type == 'all') {
    $(boxes).fadeIn();
  } else {
    $(boxes).each(function() {
      if(!$(this).hasClass(type)) {
        $(this).fadeOut('slow');
      } else {
        $(this).fadeIn();
      }
    });
  }
}

/* // Filter Certificados */