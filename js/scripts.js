var leapYear = function(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
};

$ (document).ready(function(){
  $ ("form#leap-year").submit(function(event){
    var year = parseInt($("input#year").val());
    var results = leapYear(year);

    if (results) {
      $("#result").show();
      $(".year").text(year);
    } else if (isNaN(year)) {
      $("#error").show();
      $("#error").prepend("<p>You didn't enter in a number, try again.</p>");
    } else {
      $("#result").show();
      $(".not").text("not");
      $(".year").text(year);
    }
    event.preventDefault();
  });

});
