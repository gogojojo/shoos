$(function() {

  $('.left').click(function(){
      $('html, body').animate({
          scrollLeft: $( $(this).attr('href') ).offset().left
      }, 900);
      return false;
  });

  $('.right').click(function(){
      $('html, body').animate({
          scrollLeft: $( $(this).attr('href') ).offset().left
      }, 900);
      return false;
  });


});