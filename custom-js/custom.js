$(function() {

  var link = $('.link');

  link.on('click touchstart', function( e ) {
    e.preventDefault();
    var that = $(this);
    window.location.href = that.attr('href');
    alert('clicked on ' + that.attr('name'));
  });

  var menuButton = $('#menu-button');
  var menu = $('#menu');
  var toogleSpeed = 500;

  menuButton.on('click touchstart', function( e ) {
    e.preventDefault();
    menu.slideToggle(toogleSpeed);
  });

  //http://twitter.com/share?text=text goes here&url=http://url goes here&hashtags=hashtag1,hashtag2,hashtag3
  //<a target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=#url">Share</a>


});
