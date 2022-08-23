const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: false,
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