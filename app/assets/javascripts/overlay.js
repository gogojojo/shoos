$(function () {
  $('.info').click(function(){
    $('.more-info').removeClass('hidden');
    $( ".more-info" ).fadeTo( 900, 0.95 );
    $('.info-container').css({"z-index":"99"})
    $('a').addClass('hidden');
  })
  $('.exit').click(function(){
    $( '.more-info' ).fadeTo( 900, 0 );
    $('.info-container').css({"z-index":"9999999"})
    $('a').removeClass('hidden');
    $('a').css({"z-index":"9999999"})
  })
});
