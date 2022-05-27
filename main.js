const checkbox = document.querySelector(".checkbox");
//Dark Theme Switch

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  darkModeToggle();
  checkbox.classList.toggle("on");
  checkbox.setAttribute("aria-checked", !checkbox.getAttribute("aria-checked"));
}

// $("#test").click(function() {
//   checkboxJQ.prop("aria-checked", !checkboxJQ.prop("aria-checked"));
//   checkboxJQ.toggleClass("on");
//   console.log(checkboxJQ[0]["aria-checked"]);
// });

function darkModeToggle() {
  const themeColor = document.getElementsByName("theme-color")[0];
  $("nav").toggleClass("bg-dark navbar-light navbar-dark")
  $("body").toggleClass("dark-background");
  $(".white-section").toggleClass("bg-light bg-dark");
  $(".border").toggleClass("border");
  $(".btn-outline-dark").toggleClass("btn-outline-dark btn-outline-light");
  
  if (themeColor.content == "#f0f0f0") {
    themeColor.setAttribute("content", "#212529");
  } else {
    themeColor.setAttribute("content", "#f0f0f0");
  }
}

//DarkTheme Switch 2.0

checkbox.addEventListener("click", function(event) {
  if (checkbox.classList.contains("on")) {
    checkbox.setAttribute("aria-checked", "false");
  } else {
    checkbox.setAttribute("aria-checked", "true");
  }
  checkbox.classList.toggle("on");
  darkModeToggle();
});