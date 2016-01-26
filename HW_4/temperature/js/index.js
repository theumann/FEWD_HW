$(document).ready(function() {

  $('#temp').on("change", function() {
    var c = $('#temp').val();
    var f = (c * 1.8 + 32).toFixed(1);
    $('body').removeClass();
    $('.result').removeClass();
    $('h1').remove();
    $('#temp-display').append("<h1>The temperature is <span class='result'>" + f + "</span> °F.</h1>");
    console.log ('c:'+ c + 'f:' + f);

    if (f <= 32) {
      $('body').addClass('freezing');
      $('.result').addClass('temp-freezing');
    }
    else if (f <= 55) {
      $('body').addClass('cold');
      $('.result').addClass('temp-cold');
    }
    else if (f <= 90) {
      $('body').addClass('warm');
      $('.result').addClass('temp-warm');
    }
    else if (f > 90) {
      $('body').addClass('hot');
      $('.result').addClass('temp-hot');
    }
    else {
      $('body').addClass('none');
      $('h1').remove();
      $('#temp-display').append("<h1>Please enter a valid temperature!</h1>");
      $('h1').addClass('temp-none');
    }
    $('#temp').val('');
    });

});
