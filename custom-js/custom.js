$(function() {

  var link = $('.link');

  link.on('click touchstart', function( e ) {
    e.preventDefault();
    var that = $(this);
    window.open(that.attr('href'), '_blank');
    alert('clicked on ' + that.attr('name'));
  });

  var menuButton = $('#menu-button');
  var menu = $('#menu');
  var toogleSpeed = 500;

  menuButton.on('click touchstart', function( e ) {
    e.preventDefault();
    menu.slideToggle(toogleSpeed);
  });

  var stars = $('#stars');

  stars.on('rated', function( e, value ) {
    alert('You\'ve rated it: ' + value);
  });

  //http://twitter.com/share?text=text goes here&url=http://url goes here&hashtags=hashtag1,hashtag2,hashtag3
  //<a target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=#url">Share</a>


});
