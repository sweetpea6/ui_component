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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWluZ19mdW5jdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidGltaW5nX2Z1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEVhc2Ug6rCSIOu5hOq1kFxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcblxyXG4gIGZ1bmN0aW9uIHJlcGVhdCgpe1xyXG4gICAgJCgnLmJveDEnKS5jc3Moe3RvcDowfSkuc3RvcCgpLmFuaW1hdGUoe3RvcDogNDUwfSwgMjAwMCwgJ2xpbmVhcicpO1xyXG4gICAgJCgnLmJveDInKS5jc3Moe3RvcDowfSkuc3RvcCgpLmFuaW1hdGUoe3RvcDogNDUwfSwgMjAwMCwgJ2Vhc2VJbkV4cG8nKTtcclxuICAgICQoJy5ib3gzJykuY3NzKHt0b3A6MH0pLnN0b3AoKS5hbmltYXRlKHt0b3A6IDQ1MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG4gICAgJCgnLmJveDQnKS5jc3Moe3RvcDowfSkuc3RvcCgpLmFuaW1hdGUoe3RvcDogNDUwfSwgMjAwMCwgJ2Vhc2VJbk91dEV4cG8nKTtcclxuICAgICQoJy5ib3g1JykuY3NzKHt0b3A6MH0pLnN0b3AoKS5hbmltYXRlKHt0b3A6NDUwfSwgMjAwMCwgJC5iZXooWy41OSwtMC43MywuNzIsLTAuMzFdKSk7XHJcbiAgfVxyXG5cclxuICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgcmVwZWF0KCk7XHJcbiAgfSwgMjUwMCk7XHJcbn0pOyJdfQ==
