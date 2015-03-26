$(function () {
  $('.info').click(function(){
    console.log('hi')
    $('.more-info').removeClass('hidden');
    $('a').addClass('hidden');
  })
  $('.exit').click(function(){
    console.log('hi')
    $('.more-info').addClass('hidden');
    $('a').removeClass('hidden');
  })
});
