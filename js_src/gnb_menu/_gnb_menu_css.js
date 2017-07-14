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