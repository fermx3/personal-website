//Dark Theme Switch

$("#dark-mode").click(function() {
  $("#button").toggleClass("fa-toggle-on fa-toggle-off")
  $("nav").toggleClass("bg-dark")
  $("nav").toggleClass("navbar-light navbar-dark");
  $("body").toggleClass("dark-background");
  $(".white-section").toggleClass("bg-light bg-dark");
  $(".border").toggleClass("border");
  $(".btn-outline-dark").toggleClass("btn-outline-dark btn-outline-light");
});
