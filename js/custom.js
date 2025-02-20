
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });

    // BACKSTRETCH SLIDESHOW
    $('.hero-section').backstretch([
      "images/1.png", 
      "images/2.png",
      "images/3.png"
    ],  {duration: 2000, fade: 750});
    
    // CUSTOM LINK
  })(window.jQuery);


