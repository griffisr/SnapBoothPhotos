$(document).ready(function() {
    "use strict";
  
    /* Swiper
      -------------------------------------------------------*/
    //initialize swiper when document ready
    var mySwiper = new Swiper(".swiper-container", {
      // Navigation arrows
      autoplay: {
        delay: 1,
        disableOnInteraction: false
      },
      speed: 8000,
      loop: true,
      loopAdditionalSlides: 5,
      initialSlide: 4,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      slidesPerView: 2.7,
      centeredSlides: true,
      breakpoints: {
        1440: {
          slidesPerView: 2.6
        },
        1439: {
          slidesPerView: 1.45
        },
        1024: {
          slidesPerView: 1.45
        },
        1023: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 2
        },
        568: {
          slidesPerView: 1.5,
          spaceBetween: 10
        },
        414: {
          slidesPerView: 1.09,
          spaceBetween: 3
        },
        320: {
          slidesPerView: 1.09,
          spaceBetween: 3
        }
      }
    });
  
    /* Info Card
      -------------------------------------------------------*/
    var $revealCardContentBtn = $(".sl--card-nav-container"),
      $contentContainer = $(
        ".sl-card-wrapper .sl--content-wrapper .sl--content-container"
      ),
      $navGFX = $(
        ".sl-card-wrapper .sl--content-wrapper .sl--card-nav-container .sl--content-btn .card-nav-gfx"
      );
  
    $revealCardContentBtn.on("click", function() {
      var parent = $(this).closest(".swiper-slide");
  
      // IC Container
      parent
        .siblings()
        .find($contentContainer)
        .removeClass("sl--card-reveal");
      parent
        .siblings()
        .find($contentContainer)
        .addClass("sl--card-hide");
      parent.find($contentContainer).toggleClass("sl--card-hide sl--card-reveal");
  
      // IC Nav wrapper
      parent
        .siblings()
        .find(".sl--content-wrapper")
        .removeClass("sl--content-wrapper-active");
      parent
        .siblings()
        .find(".sl--content-wrapper")
        .addClass("sl--content-wrapper-inactive");
      parent
        .find(".sl--content-wrapper")
        .toggleClass("sl--content-wrapper-inactive sl--content-wrapper-active");
  
      // IC Nav GFX
      parent
        .siblings()
        .find($navGFX)
        .removeClass("sl--close-card-info");
      parent
        .siblings()
        .find($navGFX)
        .addClass("sl--show-card-info");
      parent.find($navGFX).toggleClass("sl--show-card-info sl--close-card-info");
    });
  
    /* Hide content on slide change 
      -------------------------------------------------------*/
    mySwiper.on("onSlideChangeStart", function() {
      if ($contentContainer.hasClass("sl--card-reveal")) {
        var $CI_ContentWrapper = $(".sl--content-wrapper");
  
        $contentContainer.removeClass("sl--card-reveal");
        $contentContainer.addClass("sl--card-hide");
        $navGFX.removeClass("sl--close-card-info");
        $navGFX.addClass("sl--show-card-info");
        $CI_ContentWrapper.removeClass("sl--content-wrapper-active");
        $CI_ContentWrapper.addClass("sl--content-wrapper-inactive");
      }
    });
  
    // Media Query
    var windowWidth = $(window).width();
    if (windowWidth === 320) {
    }
    if (windowWidth === 375) {
    }
    if (windowWidth === 414) {
    }
    if (windowWidth === 768) {
    }
    if (windowWidth === 1024) {
    }
  }); //END: $(document)
  



















































  const landscapeswiper = new Swiper(".newSwiper", {
    loop: true,
    autoplay: {
      delay: 4000,
    } ,
    navigation: {
        nextEl: '.swiper-button-next-46',
        prevEl: '.swiper-button-prev-46',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });



  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


  // Add the following script before the closing body tag
    // After loading the DOM tree (page)
    $(function clickedStrip() {
        //when clicking on a link containing a Thumbnail
        $('a.thumbnail').click(function (e) {
          console.log($(this).find('img').attr('src'))
          //cancel the default browser action
          e.preventDefault();
          //set the scr attribute of the modal's img element
          //the value of the scr attribute of the image that is wrapped around the a element clicked by the user
         // $('#image-modal .modal-body img').attr('src', $(this).find('img').attr('src'));
         // $('#myModal .modal-body img').attr('id', $(this).find('img').attr('id'));
         document.getElementById("modal-image").src = ($(this).find('img').attr('src'));
         if($(this).find('img').attr('src') == "Images/SmithPhotoStrip.png")
         {
          document.getElementById("modal-image").src = ($(this).find('img').attr('src'));
          document.getElementById("modalBodyTitle").innerHTML = "Hourly Rental Package Includes:";
          document.getElementById("modalBodyText").innerHTML = "Hourly photo booth rentals are perfect for shorter events with a clear start and end time. <em>(i.e.: Birthdays, Graduation Open House, Corporate Parties, etc...)</em> Hourly rates vary depending on the size of your event so reach out today for your free quote!";
          document.getElementById("modal-title").innerHTML = "Photo Booth Rental by the hour";
  
         }
         else if($(this).find('img').attr('src') == "Images/Promo/Setup.jpg")
         {
          document.getElementById("modal-image").src = ($(this).find('img').attr('src'));
          document.getElementById("modalBodyTitle").innerHTML = "All Inclusive Rental includes:"
          document.getElementById("includedPackage").innerHTML = "&#9900;•Photo Booth rental included for your entire event with unlimted prints for your guests";
          document.getElementById("modalBodyText").innerHTML = "Our all inclusive package is ideal for longer events <em>(4+ hours)</em> where you don't want to worry about running out of time with your booth! This package is also perfect for longer events that may have down time where your guests aren't necessarily taking photos the entire time.<br><em>(i.e.: During your Wedding ceremeony, during dinner, etc...)</em>";
          document.getElementById("modal-title").innerHTML = "All Inclusive Photo Booth Rental";
          
         }
      
  
        });
      })