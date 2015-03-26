$(function() {

  $('.start').click(function(){
      animateshoe('.jordanI')
      $('html, body').animate({
          scrollLeft: $( '#jordanI' ).offset().left
      }, 900);
      return false;
  });

  $('.left').click(function(){
      var clas = $(this).attr('href').replace('#','.')
      animateshoe(clas)
      $('html, body').animate({
          scrollLeft: $( $(this).attr('href') ).offset().left
      }, 900);
      return false;
  });

  $('.right').click(function(){
      var clas = $(this).attr('href').replace('#','.')
      console.log(clas)
      animateshoe(clas)
      $('html, body').animate({
          scrollLeft: $( $(this).attr('href') ).offset().left
      }, 900);
      return false;
  });

  function animateshoe($class){
  
  $($class).each(function(i){
    time=200+(10*i)
    icon=Math.floor((Math.random()*16));
    $(this).css({
      'top':'-1000px',
    }).delay(time).animate({
      'opacity':'1',
      'top':'0',
      'left':'0'
    },700)
  })
  }


});