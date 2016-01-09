$(document).ready(function() {

  $('a').click(function(){
    event.preventDefault();
  })

//  $(p article).onLoad(function(){
  $('.hide').hide();

  $('.readmore').click(function(){
    $('.hide').slideDown(600);
    $('.readmore').hide();
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
    $('.hide').slideUp(600);
    $('.hide').promise().done(function(){
      $('.readmore').show();
    });
  });

  $('.learnmore').click(function(){
    $('.learnmore').hide();
    $('.learnmoretext').slideDown();
  });

  });
