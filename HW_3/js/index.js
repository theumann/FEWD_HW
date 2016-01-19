$(document).ready(function() {

  $('a').click(function(event){
    event.preventDefault();
  });

//  $(p article).onLoad(function(){
  $('.show-this-on-click').hide();

  $('.readmore').click(function(){
    $('.show-this-on-click').slideDown(600);
    $('.readmore').hide();
    $('.readless').show();
  });

/* I first tried this and I am not sure why .readmore shows
before slideUp is done. I found another way to get it to wait below.
  $('.readless').click(function(){
    $('.readless').hide();
    $('.hide').slideUp(600, function(){
      $('.readmore').show();
    });
  });
*/
  $('.readless').click(function(){
    $('.readless').hide();
    $('.show-this-on-click').slideUp(600);
    $('.show-this-on-click').promise().done(function(){
      $('.readmore').show();
    });
  });

  $('.learnmore').click(function(){
    $('.learnmore').hide();
    $('.learnmoretext').slideDown();
  });

  });
