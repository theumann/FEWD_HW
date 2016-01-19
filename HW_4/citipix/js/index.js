/* pseudo code
- Form
  * city = form-input

- on Submit:
  * if city = "Austin" OR city = "ATX"
    -> background image = austin.jpg

  * else if city = "New York" OR city = "New York City" or city = "NYC"
    -> background image = nyc.jpg

  * else if city = LA OR city = LAX or city = Los Angeles
    -> background image = la.jpg

  * else if city = "San Francisco" OR city = "SF" or city = "Bay Area"
    -> background image = sf.jpg

  * else if city = "Sydney" OR city = "SYD"
    -> background image = sf.jpg
End Pseudo code */

$(document).ready(function() {

  $('form').submit (function(evt) {
    evt.preventDefault();
//Get input and log it to the console
    var city = $('.city-type').val();
    console.log('City: ' + city);

// Change background image based on Input. Case insensistive.
    if ((city.toUpperCase() === "AUSTIN") || (city.toUpperCase() === "ATX")) {
      $('body').removeClass().addClass('austin');
    }
    else if ((city.toUpperCase() === "NEW YORK") || (city.toUpperCase() === "NEW YORK CITY") || (city.toUpperCase() === "NYC")) {
      $('body').removeClass().addClass('nyc');
    }
    else if ((city.toUpperCase() === "LOS ANGELES") || (city.toUpperCase() === "LA") || (city.toUpperCase() === "LAX")) {
      $('body').removeClass().addClass('la');
    }
    else if ((city.toUpperCase() === "SAN FRANCISCO") || (city.toUpperCase() === "SF") || (city.toUpperCase() === "BAY AREA")) {
      $('body').removeClass().addClass('sf');
    }
    else if ((city.toUpperCase() === "SYDNEY") || (city.toUpperCase() === "SYD")) {
      $('body').removeClass().addClass('sydney');
    }
    else {
      $('body').removeClass();
    }
//Empty input field.
    $('.city-type').val('');
    });

  });
