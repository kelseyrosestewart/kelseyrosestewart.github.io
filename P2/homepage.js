
'use strict'


function toggleIcon() {
    $('.icon').on('click', function(){
        $('.icon').toggleClass('active');
        $('.menu-mobile').slideToggle(300);
    })
}

function closeMobileMenu(){
    $('.menu-mobile').on('click', 'a', function(){
        $('.icon').trigger('click');
    })
}



function desktopMenu() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50 && $(window).width() > 768) {
            $('header.desktop').fadeIn(500);
        } else {
            $('header.desktop').fadeIn(500);
        }
    })
}

//when the page loads call toggleIcon;
$(toggleIcon);
$(closeMobileMenu);
$(desktopMenu);

/* Modal JS */

(function(){
    var $content = $('.modal_info').detach();
  
    $('.open_button').on('click', function(e){
      modal.open({
        content: $content,
        width: 540,
        height: 270,
      });
      $content.addClass('modal_content');
      $('.modal, .modal_overlay').addClass('display');
      $('.open_button').addClass('load');
    });
  }());
  
  var modal = (function(){
  
    var $close = $('<button role="button" class="modal_close" title="Close"><span></span></button>');
    var $content = $('<div class="modal_content"/>');
    var $modal = $('<div class="modal"/>');
    var $window = $(window);
  
    $modal.append($content, $close);
  
    $close.on('click', function(e){
      $('.modal, .modal_overlay').addClass('conceal');
      $('.modal, .modal_overlay').removeClass('display');
      $('.open_button').removeClass('load');
      e.preventDefault();
      modal.close();
    });
  
    return {
      center: function(){
        var top = 0;
        var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
        $modal.css({
          top: top,
          left: left + $window.scrollLeft(),
        });
      },
      open: function(settings){
        $content.empty().append(settings.content);
  
        $modal.css({
          width: settings.width || 'auto',
          height: settings.height || 'auto'
        }).appendTo('body');
  
        modal.center();
        $(window).on('resize', modal.center);
      },
      close: function(){
        $content.empty();
        $modal.detach();
        $(window).off('resize', modal.center);
      }
    };
  }());

  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

