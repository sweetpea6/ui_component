/**
 * Ease 값 비교
 */

$(function() {

  function repeat(){
    $('.box1').css({top:0}).stop().animate({top: 450}, 2000, 'linear');
    $('.box2').css({top:0}).stop().animate({top: 450}, 2000, 'easeInExpo');
    $('.box3').css({top:0}).stop().animate({top: 450}, 2000, 'easeOutExpo');
    $('.box4').css({top:0}).stop().animate({top: 450}, 2000, 'easeInOutExpo');
    $('.box5').css({top:0}).stop().animate({top:450}, 2000, $.bez([.59,-0.73,.72,-0.31]));
  }

  setInterval(function(){
    repeat();
  }, 2500);
});