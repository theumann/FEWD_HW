$(document).ready(function () {

  $('form').submit(function(evt) {
    evt.preventDefault();
/*    var showAlert = true;
    $('form input').each(function(){
    if (!$(this).val()) {
      $(this).removeClass("valid").addClass("invalid");
      if (showAlert = true) {
        alert("Please fill all required fields.");
        showAlert = false;
      }
    }
    else {
      !$(this).removeClass("invalid").addClass("valid");
    }
  });*/
    $('form input').each (function(){
      var flag = true;
      if ($(this).val() === '') {
        $(this).removeClass("valid").addClass("invalid");
        flag = false;
      }
      else {
        $(this).removeClass("invalid").addClass("valid");
      }
      if (flag = true) {
        window.location.href=('registration_complete.html');
      }
      else {
        alert("Please fill all required fields.");
      }
    });
  });
});
