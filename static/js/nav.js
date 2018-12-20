let $hamburger = $(".hamburger");
let $navItems = $('.nav-items');
$hamburger.on("click", function (e) {
  $hamburger.toggleClass("is-active");
  $navItems.toggleClass("nav-open");
});