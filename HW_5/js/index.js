/* pseudo code
cities =  "ATX", "LA", "NYC", "SF", "SYD"

each city -> append to select box

body ->  background: url(../images/citipix_skyline.jpg)
body class = 'austin' ->  background-image: url(../images/austin.jpg)
body class = 'la' ->      background-image: url(../images/la.jpg)
body class = 'nyc' ->     background-image: url(../images/nyc.jpg)
body class = 'sf' ->      background-image: url(../images/sf.jpg)
body class = 'sydney' ->  background-image: url(../images/sydney.jpg)

If city = ATX -> body class = 'austin'
elseIf city = LA -> body class = 'la'
elseIf city = NYC -> body class = 'nyc'
elseIf city = SF -> body class = 'sf'
elseIf city = SYD -> body class = 'sydney'
else -> remove body class
End Pseudo code */

$(document).ready(function() {

  var cities = ["ATX", "LA", "NYC", "SF", "SYD"];
  $.each(cities, function(index, value) {
    $('.city-type').append('<option>' + cities[index] + '</option>');
  });

  $('.city-type').change (function(evt) {
    evt.preventDefault();
//Get input and log it to the console
    var city = $('.city-type').val();
    console.log('City: ' + city);

// Change background image based on Input. Case insensistive.
    if (city === "ATX") {
      $('body').removeClass().addClass('austin');
    }
    else if (city === "LA") {
      $('body').removeClass().addClass('la');
    }
    else if (city === "NYC") {
      $('body').removeClass().addClass('nyc');
    }
    else if (city === "SF") {
      $('body').removeClass().addClass('sf');
    }
    else if (city === "SYD") {
      $('body').removeClass().addClass('sydney');
    }
    else {
      $('body').removeClass();
    }
    });
  });
