$(document).ready(function() {
  $("#shout-form").submit(function(event) {
    var inputShout = $("input#shout").val();


    $(".shout").text(inputShout.toUpperCase());


    $("#msg").show();

    event.preventDefault();
  });
});
