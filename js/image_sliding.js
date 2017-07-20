/**
 * Image Sliding CSS
 */

$(function(){

  // 선언부
  function init(){
    $('.css-sliding-view-image').eq(0).addClass('center');
    $('.css-sliding-view-image').eq(1).addClass('right');
    $('.css-sliding-view-image').eq(2).addClass('left');

    marginCtrlWrap();
    paging();
  }

  var currentIndex = 0;
  var nextIndex = 0;
  var prevIndex = 0;
  var timeID;
  var checkID;

  function moveLeft(){
    if(nextIndex >= $('.css-sliding-view-image').length){
      nextIndex = 0;
    }

    // eq()에 음수 값을 넣어 주면 뒷 순서부터 차례대로 매칭시킴
    $('.css-sliding-view-image').eq(currentIndex-1).removeClass('left ani').addClass('right');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('center ani').addClass('left ani');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('right').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveRight(){
    if(nextIndex <= -1){
      nextIndex = $('.css-sliding-view-image').length-1;
    }

    if( prevIndex >= $('.css-sliding-view-image').length ){
      prevIndex = 0;
    }

    $('.css-sliding-view-image').eq(prevIndex).removeClass('right ani').addClass('left');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('center ani').addClass('right ani');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('left').addClass('center ani');

    currentIndex = nextIndex;
    prevIndex = currentIndex + 1;
    nextIndex--;
  }

  function autoRolling(){
    if( $('.css-sliding-btn-control').hasClass('play') ){
      $('.css-sliding-btn-control').removeClass('play').addClass('pause').text('pause');
    }
    timeID = setInterval(function(){
      nextIndex = currentIndex + 1;
      moveLeft();
    }, 3000);
  }

  function marginCtrlWrap(){

    var wrapWidth = $('.css-sliding-control-wrap').width();

    $('.css-sliding-control-wrap').css({
      'margin-left' : -( wrapWidth / 2 )
    });

  }

  function paging(){

    var imgNumber = $('.css-sliding-view-image').length; // size() 개수 구하는 함수

    for(var i=0; i<imgNumber; i++){

      $('.css-sliding-paging').append('<li class="css-sliding-paging-item"><a href="#" class="css-sliding-paging-link">' + (i+1) + '</a></li>');

    }

  }

  function pauseAndReAuto(){
    // autoRolling() 의 setInterval을 중지 => 자동롤링 일시정지
    clearInterval( timeID );
    if( $('.css-sliding-btn-control').hasClass('pause') ){
      $('.css-sliding-btn-control').removeClass('pause').addClass('play').text('play');
    }
    clearInterval( checkID );
    var count = 0;
    checkID = setInterval(function(){
      if(count == 5){

        autoRolling();
        clearInterval(checkID);
      }
      console.log(count);
      count++;
    }, 1000);
  }


  // 실행부
  init();
  autoRolling();
  var activeClick = function(direction){

    var dir = direction;
    if( dir == 'right' ){
      nextIndex = currentIndex + 1;
      moveLeft();
    } else {
      nextIndex = currentIndex - 1;
      prevIndex = currentIndex + 1;
      moveRight();
    }

    var $selector = $('.css-sliding-arrow.' + dir); // $('.css-sliding-arrow.right')

    setTimeout(function(){
      // 재귀함수
      $selector.one('click', function(){
        activeClick(dir);
      });

      /*
       if(dir == 'left'){
       $('.css-sliding-arrow.right').one('click', function(){
       activeClick(dir);
       });
       } else {
       $('.css-sliding-arrow.left').one('click', function(){
       activeClick(dir);
       });
       }
       */
    }, 1000);
  };

  $('.css-sliding-arrow.right').one('click', function(){
    pauseAndReAuto();
    activeClick('right');
  });

  $('.css-sliding-arrow.left').one('click', function(){
    pauseAndReAuto();
    activeClick('left');
  });

  $(document).on('click', '.css-sliding-btn-control.pause', function(e){
    clearInterval(timeID);
    $(e.target).removeClass('pause').addClass('play');
    $(e.target).text('Play');
  });

  $(document).on('click', '.css-sliding-btn-control.play', function(e){
    autoRolling();
    $(e.target).removeClass('play').addClass('pause');
    $(e.target).text('Pause');
  });

  $(document).on('click', '.css-sliding-paging-item', function(e){

    pauseAndReAuto();

    e.preventDefault();

    var indexNumber = $(this).index('.css-sliding-paging-item');

    if( currentIndex != indexNumber ){

      if( currentIndex == 0 ){

        if( indexNumber == $('.css-sliding-view-image').length-1 ){
          activeClick('left');
        } else {
          activeClick('right');
        }

      } else if( currentIndex == $('.css-sliding-view-image').length-1 ){

        if( indexNumber == 0 ){
          activeClick('right');
        } else {
          activeClick('left');
        }

      } else {

        if( currentIndex < indexNumber ){
          activeClick('right');
        } else {
          activeClick('left');
        }

      }

    }
  });
});
/**
 * Image Sliding Jquery
 */

$(function(){

  // 선언부
  function init(){
    $('.js-sliding .view-image').eq(0).css({left : 0});
    $('.js-sliding .view-image').eq(1).css({left : 400});
    $('.js-sliding .view-image').eq(2).css({left : -400});

    marginCtrlWrap();
    paging();
  }

  var currentIndex = 0;
  var nextIndex = 0;
  var timeID;
  var checkID;

  function moveLeft(){

    if(nextIndex >= $('.js-sliding .view-image').length){
      nextIndex = 0;
    }

    $('.js-sliding .view-image').eq(currentIndex).stop().animate({left:-400}, 2000, 'easeOutBounce');
    $('.js-sliding .view-image').eq(nextIndex).css({left:400}).stop().animate({left:0}, 2000, 'easeOutBounce');

    currentIndex = nextIndex;

    nextIndex++;
  }

  function moveRight(){

    if(nextIndex <= -1){
      nextIndex = $('.view-image').length-1;
    }

    $('.view-image').eq(currentIndex).stop().animate({left:400}, 2000, 'easeOutBounce');
    $('.view-image').eq(nextIndex).css({left:-400}).stop().animate({left:0}, 2000, 'easeOutBounce');

    currentIndex = nextIndex;

    nextIndex--;
  }

  function autoRolling(){

    timeID = setInterval(function(){
      nextIndex = currentIndex + 1;
      moveLeft();
    }, 3000);
  }

  function marginCtrlWrap(){
    var wrapWidth = $('.js-sliding .control-wrap').width();
    $('.js-sliding .control-wrap').css({
      'margin-left' : -( wrapWidth / 2 )
    });
  }

  function paging(){
    var imgNumber = $('.view-image').length;
    for(var i=0; i<imgNumber; i++){
      $('.paging').append('<li class=".js-sliding paging-item"><a href="#" class=".js-sliding paging-link">' + (i+1) + '</a></li>');
    }
  }
  function clickPaging(){
  }

  // 실행부
  init();

      autoRolling();

  $('.arrow.right').on('click', function(){

    clearInterval( timeID );
    clearInterval( checkID );

    var count = 0;
    checkID = setInterval(function(){
      if(count == 5){
        autoRolling();
        clearInterval(checkID);
      }
      console.log(count);
      count++;
    }, 1000);
    nextIndex = currentIndex + 1;

    if( !$('.view-image').is(':animated') ){
      moveLeft();
    }
  });

  $('.arrow.left').on('click', function(){

    clearInterval( timeID );
    clearInterval( checkID );

    var count = 0;
    checkID = setInterval(function(){
      if(count == 5){
        autoRolling();
        clearInterval(checkID);
      }
      console.log(count);
      count++;
    }, 1000);
    nextIndex = currentIndex - 1;

    if( !$('.view-image').is(':animated') ){
      moveRight();
    }
  });

  $(document).on('click', '.btn-control.pause', function(e){
    clearInterval(timeID);

    $(e.target).removeClass('pause').addClass('play');
    $(e.target).text('Play');
  });

  $(document).on('click', '.btn-control.play', function(e){
    autoRolling();

    $(e.target).removeClass('play').addClass('pause');
    $(e.target).text('Pause');
  });

  $(document).on('click', '.paging-item', function(e){

    e.preventDefault();

    var indexNumber = $(this).index('.paging-item');

    if(currentIndex != indexNumber) {

      if (currentIndex == 0) {
        if (indexNumber == $('.view-image').length - 1) {
          nextIndex = currentIndex - 1;
          if (!$('.view-image').is(':animated')) {
            moveRight();
          }
        } else {
          nextIndex = currentIndex + 1;
          if (!$('.view-image').is(':animated')) {
            moveLeft();
          }
        }

      } else if (currentIndex == $('.view-image').length - 1) {
        if (indexNumber == 0) {
          nextIndex = currentIndex + 1;
          if (!$('.view-image').is(':animated')) {
            moveLeft();
          }
        } else {
          nextIndex = currentIndex - 1;
          if (!$('.view-image').is(':animated')) {
            moveRight();
          }
        }
      } else {
        if (currentIndex < indexNumber) {
          nextIndex = currentIndex + 1;
          if (!$('.view-image').is(':animated')) {
            moveLeft();
          }
        } else {
          nextIndex = currentIndex - 1;
          if (!$('.view-image').is(':animated')) {
            moveRight();
          }
        }
      }
    }

  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9pbWFnZV9zbGlkaW5nX2Nzcy5qcyIsIl9pbWFnZV9zbGlkaW5nX2pxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW1hZ2Vfc2xpZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBJbWFnZSBTbGlkaW5nIENTU1xyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g7ISg7Ja467aAXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5lcSgwKS5hZGRDbGFzcygnY2VudGVyJyk7XHJcbiAgICAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmVxKDEpLmFkZENsYXNzKCdyaWdodCcpO1xyXG4gICAgJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5lcSgyKS5hZGRDbGFzcygnbGVmdCcpO1xyXG5cclxuICAgIG1hcmdpbkN0cmxXcmFwKCk7XHJcbiAgICBwYWdpbmcoKTtcclxuICB9XHJcblxyXG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xyXG4gIHZhciBuZXh0SW5kZXggPSAwO1xyXG4gIHZhciBwcmV2SW5kZXggPSAwO1xyXG4gIHZhciB0aW1lSUQ7XHJcbiAgdmFyIGNoZWNrSUQ7XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVMZWZ0KCl7XHJcbiAgICBpZihuZXh0SW5kZXggPj0gJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5sZW5ndGgpe1xyXG4gICAgICBuZXh0SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVxKCnsl5Ag7J2M7IiYIOqwkuydhCDrhKPslrQg7KO866m0IOuStyDsiJzshJzrtoDthLAg7LCo66GA64yA66GcIOunpOy5reyLnO2CtFxyXG4gICAgJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5lcShjdXJyZW50SW5kZXgtMSkucmVtb3ZlQ2xhc3MoJ2xlZnQgYW5pJykuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XHJcbiAgICAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygnbGVmdCBhbmknKTtcclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleCsrO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVJpZ2h0KCl7XHJcbiAgICBpZihuZXh0SW5kZXggPD0gLTEpe1xyXG4gICAgICBuZXh0SW5kZXggPSAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmxlbmd0aC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCBwcmV2SW5kZXggPj0gJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5sZW5ndGggKXtcclxuICAgICAgcHJldkluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmVxKHByZXZJbmRleCkucmVtb3ZlQ2xhc3MoJ3JpZ2h0IGFuaScpLmFkZENsYXNzKCdsZWZ0Jyk7XHJcbiAgICAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygncmlnaHQgYW5pJyk7XHJcbiAgICAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmVxKG5leHRJbmRleCkucmVtb3ZlQ2xhc3MoJ2xlZnQnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICBuZXh0SW5kZXgtLTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGF1dG9Sb2xsaW5nKCl7XHJcbiAgICBpZiggJCgnLmNzcy1zbGlkaW5nLWJ0bi1jb250cm9sJykuaGFzQ2xhc3MoJ3BsYXknKSApe1xyXG4gICAgICAkKCcuY3NzLXNsaWRpbmctYnRuLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygncGxheScpLmFkZENsYXNzKCdwYXVzZScpLnRleHQoJ3BhdXNlJyk7XHJcbiAgICB9XHJcbiAgICB0aW1lSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgfSwgMzAwMCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtYXJnaW5DdHJsV3JhcCgpe1xyXG5cclxuICAgIHZhciB3cmFwV2lkdGggPSAkKCcuY3NzLXNsaWRpbmctY29udHJvbC13cmFwJykud2lkdGgoKTtcclxuXHJcbiAgICAkKCcuY3NzLXNsaWRpbmctY29udHJvbC13cmFwJykuY3NzKHtcclxuICAgICAgJ21hcmdpbi1sZWZ0JyA6IC0oIHdyYXBXaWR0aCAvIDIgKVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGFnaW5nKCl7XHJcblxyXG4gICAgdmFyIGltZ051bWJlciA9ICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykubGVuZ3RoOyAvLyBzaXplKCkg6rCc7IiYIOq1rO2VmOuKlCDtlajsiJhcclxuXHJcbiAgICBmb3IodmFyIGk9MDsgaTxpbWdOdW1iZXI7IGkrKyl7XHJcblxyXG4gICAgICAkKCcuY3NzLXNsaWRpbmctcGFnaW5nJykuYXBwZW5kKCc8bGkgY2xhc3M9XCJjc3Mtc2xpZGluZy1wYWdpbmctaXRlbVwiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjc3Mtc2xpZGluZy1wYWdpbmctbGlua1wiPicgKyAoaSsxKSArICc8L2E+PC9saT4nKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGF1c2VBbmRSZUF1dG8oKXtcclxuICAgIC8vIGF1dG9Sb2xsaW5nKCkg7J2YIHNldEludGVydmFs7J2EIOykkeyngCA9PiDsnpDrj5nroaTrp4Eg7J287Iuc7KCV7KeAXHJcbiAgICBjbGVhckludGVydmFsKCB0aW1lSUQgKTtcclxuICAgIGlmKCAkKCcuY3NzLXNsaWRpbmctYnRuLWNvbnRyb2wnKS5oYXNDbGFzcygncGF1c2UnKSApe1xyXG4gICAgICAkKCcuY3NzLXNsaWRpbmctYnRuLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygncGF1c2UnKS5hZGRDbGFzcygncGxheScpLnRleHQoJ3BsYXknKTtcclxuICAgIH1cclxuICAgIGNsZWFySW50ZXJ2YWwoIGNoZWNrSUQgKTtcclxuICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICBjaGVja0lEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgaWYoY291bnQgPT0gNSl7XHJcblxyXG4gICAgICAgIGF1dG9Sb2xsaW5nKCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja0lEKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhjb3VudCk7XHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcblxyXG5cclxuICAvLyDsi6TtlonrtoBcclxuICBpbml0KCk7XHJcbiAgYXV0b1JvbGxpbmcoKTtcclxuICB2YXIgYWN0aXZlQ2xpY2sgPSBmdW5jdGlvbihkaXJlY3Rpb24pe1xyXG5cclxuICAgIHZhciBkaXIgPSBkaXJlY3Rpb247XHJcbiAgICBpZiggZGlyID09ICdyaWdodCcgKXtcclxuICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgbW92ZUxlZnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgIHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciAkc2VsZWN0b3IgPSAkKCcuY3NzLXNsaWRpbmctYXJyb3cuJyArIGRpcik7IC8vICQoJy5jc3Mtc2xpZGluZy1hcnJvdy5yaWdodCcpXHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAvLyDsnqzqt4DtlajsiJhcclxuICAgICAgJHNlbGVjdG9yLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGFjdGl2ZUNsaWNrKGRpcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLypcclxuICAgICAgIGlmKGRpciA9PSAnbGVmdCcpe1xyXG4gICAgICAgJCgnLmNzcy1zbGlkaW5nLWFycm93LnJpZ2h0Jykub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICBhY3RpdmVDbGljayhkaXIpO1xyXG4gICAgICAgfSk7XHJcbiAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgJCgnLmNzcy1zbGlkaW5nLWFycm93LmxlZnQnKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgIGFjdGl2ZUNsaWNrKGRpcik7XHJcbiAgICAgICB9KTtcclxuICAgICAgIH1cclxuICAgICAgICovXHJcbiAgICB9LCAxMDAwKTtcclxuICB9O1xyXG5cclxuICAkKCcuY3NzLXNsaWRpbmctYXJyb3cucmlnaHQnKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHBhdXNlQW5kUmVBdXRvKCk7XHJcbiAgICBhY3RpdmVDbGljaygncmlnaHQnKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmNzcy1zbGlkaW5nLWFycm93LmxlZnQnKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHBhdXNlQW5kUmVBdXRvKCk7XHJcbiAgICBhY3RpdmVDbGljaygnbGVmdCcpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNzcy1zbGlkaW5nLWJ0bi1jb250cm9sLnBhdXNlJywgZnVuY3Rpb24oZSl7XHJcbiAgICBjbGVhckludGVydmFsKHRpbWVJRCk7XHJcbiAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygncGF1c2UnKS5hZGRDbGFzcygncGxheScpO1xyXG4gICAgJChlLnRhcmdldCkudGV4dCgnUGxheScpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNzcy1zbGlkaW5nLWJ0bi1jb250cm9sLnBsYXknLCBmdW5jdGlvbihlKXtcclxuICAgIGF1dG9Sb2xsaW5nKCk7XHJcbiAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygncGxheScpLmFkZENsYXNzKCdwYXVzZScpO1xyXG4gICAgJChlLnRhcmdldCkudGV4dCgnUGF1c2UnKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jc3Mtc2xpZGluZy1wYWdpbmctaXRlbScsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIHBhdXNlQW5kUmVBdXRvKCk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykuaW5kZXgoJy5jc3Mtc2xpZGluZy1wYWdpbmctaXRlbScpO1xyXG5cclxuICAgIGlmKCBjdXJyZW50SW5kZXggIT0gaW5kZXhOdW1iZXIgKXtcclxuXHJcbiAgICAgIGlmKCBjdXJyZW50SW5kZXggPT0gMCApe1xyXG5cclxuICAgICAgICBpZiggaW5kZXhOdW1iZXIgPT0gJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5sZW5ndGgtMSApe1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soJ2xlZnQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIGlmKCBjdXJyZW50SW5kZXggPT0gJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5sZW5ndGgtMSApe1xyXG5cclxuICAgICAgICBpZiggaW5kZXhOdW1iZXIgPT0gMCApe1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFjdGl2ZUNsaWNrKCdsZWZ0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgaWYoIGN1cnJlbnRJbmRleCA8IGluZGV4TnVtYmVyICl7XHJcbiAgICAgICAgICBhY3RpdmVDbGljaygncmlnaHQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soJ2xlZnQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTsiLCIvKipcclxuICogSW1hZ2UgU2xpZGluZyBKcXVlcnlcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOyEoOyWuOu2gFxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykuZXEoMCkuY3NzKHtsZWZ0IDogMH0pO1xyXG4gICAgJCgnLmpzLXNsaWRpbmcgLnZpZXctaW1hZ2UnKS5lcSgxKS5jc3Moe2xlZnQgOiA0MDB9KTtcclxuICAgICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykuZXEoMikuY3NzKHtsZWZ0IDogLTQwMH0pO1xyXG5cclxuICAgIG1hcmdpbkN0cmxXcmFwKCk7XHJcbiAgICBwYWdpbmcoKTtcclxuICB9XHJcblxyXG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xyXG4gIHZhciBuZXh0SW5kZXggPSAwO1xyXG4gIHZhciB0aW1lSUQ7XHJcbiAgdmFyIGNoZWNrSUQ7XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVMZWZ0KCl7XHJcblxyXG4gICAgaWYobmV4dEluZGV4ID49ICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykubGVuZ3RoKXtcclxuICAgICAgbmV4dEluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6LTQwMH0sIDIwMDAsICdlYXNlT3V0Qm91bmNlJyk7XHJcbiAgICAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0OjQwMH0pLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjB9LCAyMDAwLCAnZWFzZU91dEJvdW5jZScpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuXHJcbiAgICBuZXh0SW5kZXgrKztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleCA8PSAtMSl7XHJcbiAgICAgIG5leHRJbmRleCA9ICQoJy52aWV3LWltYWdlJykubGVuZ3RoLTE7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLnZpZXctaW1hZ2UnKS5lcShjdXJyZW50SW5kZXgpLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjQwMH0sIDIwMDAsICdlYXNlT3V0Qm91bmNlJyk7XHJcbiAgICAkKCcudmlldy1pbWFnZScpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0Oi00MDB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDowfSwgMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcblxyXG4gICAgbmV4dEluZGV4LS07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhdXRvUm9sbGluZygpe1xyXG5cclxuICAgIHRpbWVJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9LCAzMDAwKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1hcmdpbkN0cmxXcmFwKCl7XHJcbiAgICB2YXIgd3JhcFdpZHRoID0gJCgnLmpzLXNsaWRpbmcgLmNvbnRyb2wtd3JhcCcpLndpZHRoKCk7XHJcbiAgICAkKCcuanMtc2xpZGluZyAuY29udHJvbC13cmFwJykuY3NzKHtcclxuICAgICAgJ21hcmdpbi1sZWZ0JyA6IC0oIHdyYXBXaWR0aCAvIDIgKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwYWdpbmcoKXtcclxuICAgIHZhciBpbWdOdW1iZXIgPSAkKCcudmlldy1pbWFnZScpLmxlbmd0aDtcclxuICAgIGZvcih2YXIgaT0wOyBpPGltZ051bWJlcjsgaSsrKXtcclxuICAgICAgJCgnLnBhZ2luZycpLmFwcGVuZCgnPGxpIGNsYXNzPVwiLmpzLXNsaWRpbmcgcGFnaW5nLWl0ZW1cIj48YSBocmVmPVwiI1wiIGNsYXNzPVwiLmpzLXNsaWRpbmcgcGFnaW5nLWxpbmtcIj4nICsgKGkrMSkgKyAnPC9hPjwvbGk+Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNsaWNrUGFnaW5nKCl7XHJcbiAgfVxyXG5cclxuICAvLyDsi6TtlonrtoBcclxuICBpbml0KCk7XHJcblxyXG4gICAgICBhdXRvUm9sbGluZygpO1xyXG5cclxuICAkKCcuYXJyb3cucmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoIHRpbWVJRCApO1xyXG4gICAgY2xlYXJJbnRlcnZhbCggY2hlY2tJRCApO1xyXG5cclxuICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICBjaGVja0lEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgaWYoY291bnQgPT0gNSl7XHJcbiAgICAgICAgYXV0b1JvbGxpbmcoKTtcclxuICAgICAgICBjbGVhckludGVydmFsKGNoZWNrSUQpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcclxuICAgICAgY291bnQrKztcclxuICAgIH0sIDEwMDApO1xyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuXHJcbiAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJy5hcnJvdy5sZWZ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBjbGVhckludGVydmFsKCB0aW1lSUQgKTtcclxuICAgIGNsZWFySW50ZXJ2YWwoIGNoZWNrSUQgKTtcclxuXHJcbiAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgY2hlY2tJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKGNvdW50ID09IDUpe1xyXG4gICAgICAgIGF1dG9Sb2xsaW5nKCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja0lEKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhjb3VudCk7XHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcblxyXG4gICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICBtb3ZlUmlnaHQoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG4tY29udHJvbC5wYXVzZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lSUQpO1xyXG5cclxuICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdwYXVzZScpLmFkZENsYXNzKCdwbGF5Jyk7XHJcbiAgICAkKGUudGFyZ2V0KS50ZXh0KCdQbGF5Jyk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuLWNvbnRyb2wucGxheScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgYXV0b1JvbGxpbmcoKTtcclxuXHJcbiAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygncGxheScpLmFkZENsYXNzKCdwYXVzZScpO1xyXG4gICAgJChlLnRhcmdldCkudGV4dCgnUGF1c2UnKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wYWdpbmctaXRlbScsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLmluZGV4KCcucGFnaW5nLWl0ZW0nKTtcclxuXHJcbiAgICBpZihjdXJyZW50SW5kZXggIT0gaW5kZXhOdW1iZXIpIHtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPT0gMCkge1xyXG4gICAgICAgIGlmIChpbmRleE51bWJlciA9PSAkKCcudmlldy1pbWFnZScpLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICBpZiAoISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpKSB7XHJcbiAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgaWYgKCEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSkge1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudEluZGV4ID09ICQoJy52aWV3LWltYWdlJykubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIGlmIChpbmRleE51bWJlciA9PSAwKSB7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgaWYgKCEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSkge1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgaWYgKCEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSkge1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IGluZGV4TnVtYmVyKSB7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgaWYgKCEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSkge1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgaWYgKCEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSkge1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcbn0pOyJdfQ==
