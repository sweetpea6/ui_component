/**
 * Image Sliding CSS
 */

$(function(){

  // 선언부
  function init(){
    $('.css-sliding-view-image').eq(0).addClass('center');
    $('.css-sliding-view-image').eq(1).addClass('right');
    $('.css-sliding-view-image').eq(2).addClass('left');

    //marginCtrlWrap();
    //paging();
  }

  var currentIndex = 0;
  var nextIndex = 0;

  function moveLeft(){
    if(nextIndex >= $('.css-sliding-view-image').length){
      nextIndex = 0;
    }

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

    $('.css-sliding-view-image').eq(currentIndex+1).removeClass('right ani').addClass('left');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('current ani').addClass('right ani');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('left').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex--;
  }

  // 실행부
  init();

  var activeClick = function(direction){

    var dir = direction;

    if(dir == 'left'){
    nextIndex = currentIndex + 1;
    moveLeft();
    } else {
      nextIndex = currentIndex - 1;
      moveRight();
    }


    setTimeout(function(){
      // 재귀함수

      if( dir == 'left' ){
        $('.css-sliding-arrow.right').one('click', function() {
          activeClick(dir);
        });
      } else {
        $('.css-sliding-arrow.left').one('click', function () {
          activeClick(dir);
        });
      }

    }, 1000);
  };

  $('.css-sliding-arrow.right').one('click', function(){
    activeClick('left');
  });

  $('.css-sliding-arrow.left').one('click', function(){
    activeClick('right');
  });

});