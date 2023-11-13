$(function() {
  var menuButton = $(".c-button");
  var menuFlex = $(".c-menu--slide-left");
  $(window).scroll(function() {    
      var scroll = $(window).scrollLeft();
      if (scroll >= 100) {
          menuButton.removeClass('c-button').addClass("c-button2");
          menuFlex.removeClass('c-menu--slide-left').addClass("menuOUT");
      } else if ((scroll < 100) && ($('nav#c-menu--slide-left').hasClass('unclicked'))) {
          menuButton.removeClass("c-button2").addClass('c-button');
          menuFlex.removeClass("menuOUT").addClass('c-menu--slide-left');
      } 
  });
});

$('button#c-button--slide-left').on('click', function() {
  var scroll = $(window).scrollLeft();
  $(this).toggleClass('floatRight');
  if (scroll >= 100) {
  $('nav#c-menu--slide-left').toggleClass('menuRight').addClass('menuOUT').toggleClass('unclicked');
  $('a.main-nav-toggle').toggleClass('active-menu');
} else if (scroll < 100) {
  $('nav#c-menu--slide-left').toggleClass('menuRight').removeClass('menuOUT').toggleClass('unclicked');
  $('a.main-nav-toggle').toggleClass('active-menu');
  $('button#c-button--slide-left').addClass('c-button');
}
});

$(function() {
 $("body").mousewheel(function(event, delta) {
    this.scrollLeft -= (delta * 30);
    event.preventDefault();
 });
});
