$(function() {
  // Handler for .ready() called.

  $('a').click(function(){
      $('html, body').animate({
          scrollLeft: $( $(this).attr('href') ).offset().left
      }, 900);
      return false;
  });
  
});