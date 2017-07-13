/**
 * Gnb Menu CSS
 */

$(function(){

  $('.css-menu-depth1-link').on('mouseenter', function(){

    // promise() : 앞선 동작이 모두 끝난 후 특정 기능을 실행 시킬 때 사용
    $(this).next().addClass('on').promise().done(function() {

      var $depth2Wrap = $(this).parent().siblings().children('.css-menu-depth2-wrap');

      // setTimeout() : ~초 이후에 한번만 실행
      setTimeout(function(){
       $depth2Wrap.removeClass('on');
      }, 300);

    });
  });

  $('.css-menu-depth1').on('mouseleave', function(){
    $('.css-menu-depth2-wrap').removeClass('on');
  });

});
/**
 * Gnb Menu jQuery
 */

$(function(){


  $('.menu-depth1-link').on('mouseenter', function(){
    // depth1 border 늘어나는 모션 효과
    $(this).children('.menu-depth1-border').stop().animate({
      width : 64
    }, 300);

    // depth2 메뉴 늘어나는 모션 효과
    var depth1Index = $(this).index('.menu-depth1-link');
    var motionHeight = 54;

    if( depth1Index == 1 ){
      motionHeight = 80;
    }



    $(this).next('.menu-depth2-wrap').css({'z-index' : 10}).stop().animate({
      height:motionHeight,
      opacity:1
    }, 300, function(){
      //$(this) => .menu-depth2-wrap
      $(this).parent().siblings().children('.menu-depth2-wrap').css({'z-index' : 0}).stop().animate({
        height : 0,
        opacity: 0
      }, 200);
    });

  });

  $('.menu-depth1-link').on('mouseleav', function(){
    // depth1 메뉴 줄어드는 모션 효과
    $(this).children('.menu-depth1-border').stop().animate({
      width : 0
    }, 300);

  });

  $('.menu-depth1').on('mouseleave', function(){

    // depth2 메뉴 줄어드는 모션 효과
    $('.menu-depth2-wrap').stop().animate({
      height: 0,
      opacity: 0
    }, 300);
  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmJfbWVudV9jc3MuanMiLCJfZ25iX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImduYl9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEduYiBNZW51IENTU1xyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLmNzcy1tZW51LWRlcHRoMS1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIHByb21pc2UoKSA6IOyVnuyEoCDrj5nsnpHsnbQg66qo65GQIOuBneuCnCDtm4Qg7Yq57KCVIOq4sOuKpeydhCDsi6Ttlokg7Iuc7YKsIOuVjCDsgqzsmqlcclxuICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdvbicpLnByb21pc2UoKS5kb25lKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgdmFyICRkZXB0aDJXcmFwID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuY3NzLW1lbnUtZGVwdGgyLXdyYXAnKTtcclxuXHJcbiAgICAgIC8vIHNldFRpbWVvdXQoKSA6IH7stIgg7J207ZuE7JeQIO2VnOuyiOunjCDsi6TtlolcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgJGRlcHRoMldyYXAucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgIH0sIDMwMCk7XHJcblxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5jc3MtbWVudS1kZXB0aDEnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuY3NzLW1lbnUtZGVwdGgyLXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBHbmIgTWVudSBqUXVlcnlcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAkKCcubWVudS1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIGRlcHRoMSBib3JkZXIg64qY7Ja064KY64qUIOuqqOyFmCDtmqjqs7xcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWRlcHRoMS1ib3JkZXInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIHdpZHRoIDogNjRcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgLy8gZGVwdGgyIOuplOuJtCDripjslrTrgpjripQg66qo7IWYIO2aqOqzvFxyXG4gICAgdmFyIGRlcHRoMUluZGV4ID0gJCh0aGlzKS5pbmRleCgnLm1lbnUtZGVwdGgxLWxpbmsnKTtcclxuICAgIHZhciBtb3Rpb25IZWlnaHQgPSA1NDtcclxuXHJcbiAgICBpZiggZGVwdGgxSW5kZXggPT0gMSApe1xyXG4gICAgICBtb3Rpb25IZWlnaHQgPSA4MDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgICQodGhpcykubmV4dCgnLm1lbnUtZGVwdGgyLXdyYXAnKS5jc3Moeyd6LWluZGV4JyA6IDEwfSkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQ6bW90aW9uSGVpZ2h0LFxyXG4gICAgICBvcGFjaXR5OjFcclxuICAgIH0sIDMwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgLy8kKHRoaXMpID0+IC5tZW51LWRlcHRoMi13cmFwXHJcbiAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLm1lbnUtZGVwdGgyLXdyYXAnKS5jc3Moeyd6LWluZGV4JyA6IDB9KS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgaGVpZ2h0IDogMCxcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5tZW51LWRlcHRoMS1saW5rJykub24oJ21vdXNlbGVhdicsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBkZXB0aDEg66mU64m0IOykhOyWtOuTnOuKlCDrqqjshZgg7Zqo6rO8XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubWVudS1kZXB0aDEtYm9yZGVyJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICB3aWR0aCA6IDBcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcubWVudS1kZXB0aDEnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy8gZGVwdGgyIOuplOuJtCDspITslrTrk5zripQg66qo7IWYIO2aqOqzvFxyXG4gICAgJCgnLm1lbnUtZGVwdGgyLXdyYXAnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodDogMCxcclxuICAgICAgb3BhY2l0eTogMFxyXG4gICAgfSwgMzAwKTtcclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
