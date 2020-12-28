$("#reload").hide();

$("#print-button").click(function() {
  $("#print-button").hide();
  $("body").print();
  $("#reload").show();
});
