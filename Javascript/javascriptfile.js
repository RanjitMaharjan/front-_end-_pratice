// navbar scroll js starts

const navEL = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 56) {
    navEL.classList.add('navbar-scrolled');
  } else if (window.scrollY < 56) {
    navEL.classList.remove('navbar-scrolled');
  }
});

// navbar scroll js ends


// js for read more start

function myFunction(btn) {
  var dots = btn.previousElementSibling.querySelector(".dots");
  var moreText = btn.previousElementSibling.querySelector(".more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// js for read more ends


//carousel js starts

// $(document).ready(function(){   ****---->>>this line of code is most required in order to use js externally

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  });
});
// carousel js ends
