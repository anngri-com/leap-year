$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});

var leapYear = function(argYear) {
  if ((argYear % 4 !== 0) || (argYear % 400 !== 0) && (argYear % 100 === 0)  ) {
    return false;
  } else {
    return true;
  }
} 