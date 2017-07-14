/**
 * Image Sliding CSS
 */
/**
 * Image Sliding Jquery
 */

$(function(){

  // 선언부
  function init(){
    $('.view-image').eq(0).css({left : 0});
    $('.view-image').eq(1).css({left : 400});
    $('.view-image').eq(2).css({left : -400});
    marginCtrlWrap();
    paging();
  }

  var currentIndex = 0;
  var nextIndex = 0;
  var timeID;
  var checkID;
  function moveLeft(){

    if(nextIndex >= $('.view-image').length){
      nextIndex = 0;
    }


    $('.view-image').eq(currentIndex).stop().animate({left:-400}, 2000, 'easeOutBounce');
    $('.view-image').eq(nextIndex).css({left:400}).stop().animate({left:0}, 2000, 'easeOutBounce');

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
    var wrapWidth = $('.control-wrap').width();
    $('.control-wrap').css({
      'margin-left' : -( wrapWidth / 2 )
    });
  }

  function paging(){
    var imgNumber = $('.view-image').length;
    for(var i=0; i<imgNumber; i++){
      $('.paging').append('<li class="paging-item"><a href="#" class="paging-link">' + (i+1) + '</a></li>');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9pbWFnZV9zbGlkaW5nX2Nzcy5qcyIsIl9pbWFnZV9zbGlkaW5nX2pxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW1hZ2Vfc2xpZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBJbWFnZSBTbGlkaW5nIENTU1xyXG4gKi8iLCIvKipcclxuICogSW1hZ2UgU2xpZGluZyBKcXVlcnlcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOyEoOyWuOu2gFxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICQoJy52aWV3LWltYWdlJykuZXEoMCkuY3NzKHtsZWZ0IDogMH0pO1xyXG4gICAgJCgnLnZpZXctaW1hZ2UnKS5lcSgxKS5jc3Moe2xlZnQgOiA0MDB9KTtcclxuICAgICQoJy52aWV3LWltYWdlJykuZXEoMikuY3NzKHtsZWZ0IDogLTQwMH0pO1xyXG4gICAgbWFyZ2luQ3RybFdyYXAoKTtcclxuICAgIHBhZ2luZygpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgdmFyIG5leHRJbmRleCA9IDA7XHJcbiAgdmFyIHRpbWVJRDtcclxuICB2YXIgY2hlY2tJRDtcclxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleCA+PSAkKCcudmlldy1pbWFnZScpLmxlbmd0aCl7XHJcbiAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICQoJy52aWV3LWltYWdlJykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDotNDAwfSwgMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuICAgICQoJy52aWV3LWltYWdlJykuZXEobmV4dEluZGV4KS5jc3Moe2xlZnQ6NDAwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6MH0sIDIwMDAsICdlYXNlT3V0Qm91bmNlJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG5cclxuICAgIG5leHRJbmRleCsrO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVJpZ2h0KCl7XHJcblxyXG4gICAgaWYobmV4dEluZGV4IDw9IC0xKXtcclxuICAgICAgbmV4dEluZGV4ID0gJCgnLnZpZXctaW1hZ2UnKS5sZW5ndGgtMTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcudmlldy1pbWFnZScpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6NDAwfSwgMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuICAgICQoJy52aWV3LWltYWdlJykuZXEobmV4dEluZGV4KS5jc3Moe2xlZnQ6LTQwMH0pLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjB9LCAyMDAwLCAnZWFzZU91dEJvdW5jZScpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuXHJcbiAgICBuZXh0SW5kZXgtLTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGF1dG9Sb2xsaW5nKCl7XHJcblxyXG4gICAgdGltZUlEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgbW92ZUxlZnQoKTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFyZ2luQ3RybFdyYXAoKXtcclxuICAgIHZhciB3cmFwV2lkdGggPSAkKCcuY29udHJvbC13cmFwJykud2lkdGgoKTtcclxuICAgICQoJy5jb250cm9sLXdyYXAnKS5jc3Moe1xyXG4gICAgICAnbWFyZ2luLWxlZnQnIDogLSggd3JhcFdpZHRoIC8gMiApXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBhZ2luZygpe1xyXG4gICAgdmFyIGltZ051bWJlciA9ICQoJy52aWV3LWltYWdlJykubGVuZ3RoO1xyXG4gICAgZm9yKHZhciBpPTA7IGk8aW1nTnVtYmVyOyBpKyspe1xyXG4gICAgICAkKCcucGFnaW5nJykuYXBwZW5kKCc8bGkgY2xhc3M9XCJwYWdpbmctaXRlbVwiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJwYWdpbmctbGlua1wiPicgKyAoaSsxKSArICc8L2E+PC9saT4nKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gY2xpY2tQYWdpbmcoKXtcclxuICB9XHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG4gIGluaXQoKTtcclxuXHJcbiAgICAgIGF1dG9Sb2xsaW5nKCk7XHJcblxyXG4gICQoJy5hcnJvdy5yaWdodCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbCggdGltZUlEICk7XHJcbiAgICBjbGVhckludGVydmFsKCBjaGVja0lEICk7XHJcblxyXG4gICAgdmFyIGNvdW50ID0gMDtcclxuICAgIGNoZWNrSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICBpZihjb3VudCA9PSA1KXtcclxuICAgICAgICBhdXRvUm9sbGluZygpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tJRCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coY291bnQpO1xyXG4gICAgICBjb3VudCsrO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG5cclxuICAgIGlmKCAhJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgbW92ZUxlZnQoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnLmFycm93LmxlZnQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoIHRpbWVJRCApO1xyXG4gICAgY2xlYXJJbnRlcnZhbCggY2hlY2tJRCApO1xyXG5cclxuICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICBjaGVja0lEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgaWYoY291bnQgPT0gNSl7XHJcbiAgICAgICAgYXV0b1JvbGxpbmcoKTtcclxuICAgICAgICBjbGVhckludGVydmFsKGNoZWNrSUQpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcclxuICAgICAgY291bnQrKztcclxuICAgIH0sIDEwMDApO1xyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuXHJcbiAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ0bi1jb250cm9sLnBhdXNlJywgZnVuY3Rpb24oZSl7XHJcbiAgICBjbGVhckludGVydmFsKHRpbWVJRCk7XHJcblxyXG4gICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ3BhdXNlJykuYWRkQ2xhc3MoJ3BsYXknKTtcclxuICAgICQoZS50YXJnZXQpLnRleHQoJ1BsYXknKTtcclxuICB9KTtcclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ0bi1jb250cm9sLnBsYXknLCBmdW5jdGlvbihlKXtcclxuICAgIGF1dG9Sb2xsaW5nKCk7XHJcblxyXG4gICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ3BsYXknKS5hZGRDbGFzcygncGF1c2UnKTtcclxuICAgICQoZS50YXJnZXQpLnRleHQoJ1BhdXNlJyk7XHJcbiAgfSk7XHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wYWdpbmctaXRlbScsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLmluZGV4KCcucGFnaW5nLWl0ZW0nKTtcclxuXHJcbiAgICBpZihjdXJyZW50SW5kZXggIT0gaW5kZXhOdW1iZXIpIHtcclxuICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgaWYgKGluZGV4TnVtYmVyID09ICQoJy52aWV3LWltYWdlJykubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICAgIGlmICghJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykpIHtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICBpZiAoISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpKSB7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50SW5kZXggPT0gJCgnLnZpZXctaW1hZ2UnKS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgaWYgKGluZGV4TnVtYmVyID09IDApIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICBpZiAoISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpKSB7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICBpZiAoISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpKSB7XHJcbiAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY3VycmVudEluZGV4IDwgaW5kZXhOdW1iZXIpIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICBpZiAoISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpKSB7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICBpZiAoISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpKSB7XHJcbiAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9KTtcclxufSk7Il19
