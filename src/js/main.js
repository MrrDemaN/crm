$(document).on("click", ".burger", function () {
  var aside = $(".dashboard__aside");
  if (!aside.hasClass("show")) {
    aside.addClass("show");
  } 
});
$(document).on("click", ".close-burger", function () {
  var aside = $(".dashboard__aside");
  if (aside.hasClass("show")) {
    aside.removeClass("show");
  } 
});