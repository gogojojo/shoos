$(function(){
  $('.exit').click(function(){
    var url = $('#video1').attr('src');
//Then assign the src to null, this then stops the video been playing
    $('#video1').attr('src', '');
// Finally you reasign the URL back to your iframe, so when you hide and load it again you still have the link
    $('#video1').attr('src', url);

    var url2 = $('#video2').attr('src');
    $('#video2').attr('src', '');
    $('#video2').attr('src', url2);

  });
})