/**
 * Gnb Menu CSS
 */

$(function(){

  var timeID; //setInterval, clearInterval에서 사용 할 변수

  $('.css-menu-depth1-link').on('mouseenter', function(){
    // removeClass 하기위해 실행되고 있는 setInterval 취소
    clearInterval(timeID);


    // promise() : 앞선 동작이 모두 끝난 후 특정 기능을 실행 시킬 때 사용
    $(this).next().addClass('on').promise().done(function() {

      var $depth2Wrap = $(this).parent().siblings().children('.css-menu-depth2-wrap');

      // setTimeout() : ~초 이후에 한번만 실행

      /*

      1. 타이머 함수 실행 횟수 / 취소
      2. 실행문의 횟수 / 시간을 실행 / 취소
      를 고려하여 알고리즘 만들기

      1. 일반 코딩 : setInterval(함수, 단위시간);

      setInterval(function(){
      실행문
      }, 단위시간);

        - 단위시간마다 setInterval과 실행문이 매번 실행
        ex) 단위시간 1000(1초), 횟수 10 => 10초동안 setInterval 10번 실행, 실행문 10번 실행
            3.5초 clearInter 실행 => setInterval 3번, 실행문 3번 실행

      ---------------------------------------------------------------------

      2. 시간이 취소되는 기능 구현 코딩

      var i = 0;
      setInterval(function(){
        if(i ==10 ){
        실행문
        }
        i++
      }, 단위시간);

      -단위시간마다 setIntarval은 매번 실행, 실행문은 i가 10일때 한번 실행
      ex) 3.5초 시점에서 clearInterval 3번 실행, 실행문 0번(실행 취소)

      */

      var count = 0;

      timeID = setInterval(function(){
        if(count == 300){
          $depth2Wrap.removeClass('on');
        }
        count++;
      }, 1);

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmJfbWVudV9jc3MuanMiLCJfZ25iX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnbmJfbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBHbmIgTWVudSBDU1NcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciB0aW1lSUQ7IC8vc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWzsl5DshJwg7IKs7JqpIO2VoCDrs4DsiJhcclxuXHJcbiAgJCgnLmNzcy1tZW51LWRlcHRoMS1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gcmVtb3ZlQ2xhc3Mg7ZWY6riw7JyE7ZW0IOyLpO2WieuQmOqzoCDsnojripQgc2V0SW50ZXJ2YWwg7Leo7IaMXHJcbiAgICBjbGVhckludGVydmFsKHRpbWVJRCk7XHJcblxyXG5cclxuICAgIC8vIHByb21pc2UoKSA6IOyVnuyEoCDrj5nsnpHsnbQg66qo65GQIOuBneuCnCDtm4Qg7Yq57KCVIOq4sOuKpeydhCDsi6Ttlokg7Iuc7YKsIOuVjCDsgqzsmqlcclxuICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdvbicpLnByb21pc2UoKS5kb25lKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgdmFyICRkZXB0aDJXcmFwID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuY3NzLW1lbnUtZGVwdGgyLXdyYXAnKTtcclxuXHJcbiAgICAgIC8vIHNldFRpbWVvdXQoKSA6IH7stIgg7J207ZuE7JeQIO2VnOuyiOunjCDsi6TtlolcclxuXHJcbiAgICAgIC8qXHJcblxyXG4gICAgICAxLiDtg4DsnbTrqLgg7ZWo7IiYIOyLpO2WiSDtmp/siJggLyDst6jshoxcclxuICAgICAgMi4g7Iuk7ZaJ66y47J2YIO2an+yImCAvIOyLnOqwhOydhCDsi6TtlokgLyDst6jshoxcclxuICAgICAg66W8IOqzoOugpO2VmOyXrCDslYzqs6Drpqzsppgg66eM65Ok6riwXHJcblxyXG4gICAgICAxLiDsnbzrsJgg7L2U65SpIDogc2V0SW50ZXJ2YWwo7ZWo7IiYLCDri6jsnITsi5zqsIQpO1xyXG5cclxuICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAg7Iuk7ZaJ66y4XHJcbiAgICAgIH0sIOuLqOychOyLnOqwhCk7XHJcblxyXG4gICAgICAgIC0g64uo7JyE7Iuc6rCE66eI64ukIHNldEludGVydmFs6rO8IOyLpO2WieusuOydtCDrp6Trsogg7Iuk7ZaJXHJcbiAgICAgICAgZXgpIOuLqOychOyLnOqwhCAxMDAwKDHstIgpLCDtmp/siJggMTAgPT4gMTDstIjrj5nslYggc2V0SW50ZXJ2YWwgMTDrsogg7Iuk7ZaJLCDsi6TtlonrrLggMTDrsogg7Iuk7ZaJXHJcbiAgICAgICAgICAgIDMuNey0iCBjbGVhckludGVyIOyLpO2WiSA9PiBzZXRJbnRlcnZhbCAz67KILCDsi6TtlonrrLggM+uyiCDsi6TtlolcclxuXHJcbiAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgMi4g7Iuc6rCE7J20IOy3qOyGjOuQmOuKlCDquLDriqUg6rWs7ZiEIOy9lOuUqVxyXG5cclxuICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKGkgPT0xMCApe1xyXG4gICAgICAgIOyLpO2WieusuFxyXG4gICAgICAgIH1cclxuICAgICAgICBpKytcclxuICAgICAgfSwg64uo7JyE7Iuc6rCEKTtcclxuXHJcbiAgICAgIC3ri6jsnITsi5zqsITrp4jri6Qgc2V0SW50YXJ2YWzsnYAg66ek67KIIOyLpO2WiSwg7Iuk7ZaJ66y47J2AIGnqsIAgMTDsnbzrlYwg7ZWc67KIIOyLpO2WiVxyXG4gICAgICBleCkgMy417LSIIOyLnOygkOyXkOyEnCBjbGVhckludGVydmFsIDPrsogg7Iuk7ZaJLCDsi6TtlonrrLggMOuyiCjsi6Ttlokg7Leo7IaMKVxyXG5cclxuICAgICAgKi9cclxuXHJcbiAgICAgIHZhciBjb3VudCA9IDA7XHJcblxyXG4gICAgICB0aW1lSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKGNvdW50ID09IDMwMCl7XHJcbiAgICAgICAgICAkZGVwdGgyV3JhcC5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY291bnQrKztcclxuICAgICAgfSwgMSk7XHJcblxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5jc3MtbWVudS1kZXB0aDEnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuY3NzLW1lbnUtZGVwdGgyLXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBHbmIgTWVudSBqUXVlcnlcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAkKCcubWVudS1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIGRlcHRoMSBib3JkZXIg64qY7Ja064KY64qUIOuqqOyFmCDtmqjqs7xcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWRlcHRoMS1ib3JkZXInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIHdpZHRoIDogNjRcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgLy8gZGVwdGgyIOuplOuJtCDripjslrTrgpjripQg66qo7IWYIO2aqOqzvFxyXG4gICAgdmFyIGRlcHRoMUluZGV4ID0gJCh0aGlzKS5pbmRleCgnLm1lbnUtZGVwdGgxLWxpbmsnKTtcclxuICAgIHZhciBtb3Rpb25IZWlnaHQgPSA1NDtcclxuXHJcbiAgICBpZiggZGVwdGgxSW5kZXggPT0gMSApe1xyXG4gICAgICBtb3Rpb25IZWlnaHQgPSA4MDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgICQodGhpcykubmV4dCgnLm1lbnUtZGVwdGgyLXdyYXAnKS5jc3Moeyd6LWluZGV4JyA6IDEwfSkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQ6bW90aW9uSGVpZ2h0LFxyXG4gICAgICBvcGFjaXR5OjFcclxuICAgIH0sIDMwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgLy8kKHRoaXMpID0+IC5tZW51LWRlcHRoMi13cmFwXHJcbiAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLm1lbnUtZGVwdGgyLXdyYXAnKS5jc3Moeyd6LWluZGV4JyA6IDB9KS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgaGVpZ2h0IDogMCxcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5tZW51LWRlcHRoMS1saW5rJykub24oJ21vdXNlbGVhdicsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBkZXB0aDEg66mU64m0IOykhOyWtOuTnOuKlCDrqqjshZgg7Zqo6rO8XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubWVudS1kZXB0aDEtYm9yZGVyJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICB3aWR0aCA6IDBcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcubWVudS1kZXB0aDEnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy8gZGVwdGgyIOuplOuJtCDspITslrTrk5zripQg66qo7IWYIO2aqOqzvFxyXG4gICAgJCgnLm1lbnUtZGVwdGgyLXdyYXAnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodDogMCxcclxuICAgICAgb3BhY2l0eTogMFxyXG4gICAgfSwgMzAwKTtcclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
