$(function() {
  animateshoe('.jordanI')

  $('.left').click(function(){
      var clas = $(this).attr('href').replace('#','.')
      console.log(clas)
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
    time=200+(20*i)
    icon=Math.floor((Math.random()*16));
    $(this).css({
      'top':'-500px',
    }).delay(time).animate({
      'opacity':'1',
      'top':'0',
      'left':'0'
    },700)
  })
  }


});