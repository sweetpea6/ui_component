/**
 * Accordion menu CSS
 */

$(function(){

  // 선언부
  function init(){
    // 처음 로딩되었을 때 상태
    $('.css-lnb-depth1-link').data({'open' : 'false'});

    // each() : 요소 개수만큼 반복하는 함수
    $('.css-lnb-depth2').each(function(index){
      $(this).data({'height' : $(this).height()}).css({height : 0});
    });

  }

  function menuOpen( $depth1Link ){
    $depth1Link.next().css({
      height : $depth1Link.next().data('height')
    });

    $depth1Link.data({'open' : 'true'}).addClass('up');
  }

  function menuClose( $depth1Link ){
    $depth1Link.parent().siblings().children('.lnb-depth2').css({
      height : 0
    });

    $depth1Link.parent().siblings().children('.lnb-depth1-link').data('open', 'false').removeClass('up');
  }

  function menuSelfClose( $depth1Link ){
    $depth1Link.next().css({
      height : 0
    });

    $depth1Link.data({'open' : 'false'}).removeClass('up');
  }

// 실행부
  init();

  $('.css-lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if( $(this).data('open') == 'false' ){

      menuOpen( $(this) );
      menuClose( $(this) );

    } else {

      menuSelfClose( $(this) );

    }

  });

});

/**
 * Accordion menu jQuery
 */

/*
 ※ show/hide 형태의 아코디언 메뉴
 ※ CSS 코딩 : styling, hide

   1. 마우스 클릭했을 때 sub 메뉴가 show / hide
   2. 클릭한 1 depth 의 sub 메뉴가 보일 때 다른 1 depth의 sub 메뉴는 안보여야 함.
   3. sub 메뉴가 보일 때 화살표는 윗방향 화살표로 변경
   4. sub 메뉴가 안보이게 될 때 화살표는 아랫방향 화살표로 변경
*/

/*
 ※ sub 메뉴의 영역이 늘어났다/줄어들었다 형태의 아코디언 메뉴
 ※ CSS 코딩 : styling, 줄어듬(높이 : 0)

   1. 마우스를 클릭했을 때, sub 메뉴의 상태에 따라 sub 메뉴가 늘어남/줄어듬
   2. 클릭한 1 depth의 sub 메뉴가 늘어날 때 다른 1 depth의 sub 메뉴는 줄어들어야 함.
   3. sub 메뉴가 보일 때 화살표는 윗방향 화살표로 변경
   4. sub 메뉴가 안보이게 될 때 화살표는 아랫방향 화살표로 변경
*/

$(function(){

  // 선언부
  function init(){
    // 처음 로딩되었을 때 상태
    $('.lnb-depth1-link').data({'open' : 'false'});

    // each() : 요소 개수만큼 반복하는 함수
    $('.lnb-depth2').each(function(index){
      $(this).data({'height' : $(this).height()}).css({height : 0});
    });

  }

  function menuOpen( $depth1Link ){
    /*
     $(this).next().stop().animate({key : value},시간,콜백함수)
     ** jQuery DOM을 단계별로 찾아갈 때,
     : 첫번 째 인수의 value 부분에 $(this) 를 사용하면 처음 찾은 $(this)를 의미
     : 콜백함수 부분에 $(this)를 사용하면 최종으로 찾은 DOM요소가 $(this)가 됨.
     */
    $depth1Link.next().stop().animate({
      height : $depth1Link.next().data('height')
    });

    $depth1Link.data({'open' : 'true'}).addClass('up');
  }

  function menuClose( $depth1Link ){
    $depth1Link.parent().siblings().children('.lnb-depth2').stop().animate({
      height : 0
    });

    $depth1Link.parent().siblings().children('.lnb-depth1-link').data('open', 'false').removeClass('up');
  }

  function menuSelfClose( $depth1Link ){
    $depth1Link.next().stop().animate({
      height : 0
    });

    $depth1Link.data({'open' : 'false'}).removeClass('up');
  }

  // 실행부
  init();

  $('.lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if( $(this).data('open') == 'false' ){

      menuOpen( $(this) );
      menuClose( $(this) );

    } else {

      menuSelfClose( $(this) );

    }

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hY2NfbWVudV9jc3MuanMiLCJfYWNjX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWNjX21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQWNjb3JkaW9uIG1lbnUgQ1NTXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAvLyDshKDslrjrtoBcclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAvLyDsspjsnYwg66Gc65Sp65CY7JeI7J2EIOuVjCDsg4Htg5xcclxuICAgICQoJy5jc3MtbG5iLWRlcHRoMS1saW5rJykuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pO1xyXG5cclxuICAgIC8vIGVhY2goKSA6IOyalOyGjCDqsJzsiJjrp4ztgbwg67CY67O17ZWY64qUIO2VqOyImFxyXG4gICAgJCgnLmNzcy1sbmItZGVwdGgyJykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICQodGhpcykuZGF0YSh7J2hlaWdodCcgOiAkKHRoaXMpLmhlaWdodCgpfSkuY3NzKHtoZWlnaHQgOiAwfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51T3BlbiggJGRlcHRoMUxpbmsgKXtcclxuICAgICRkZXB0aDFMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAkZGVwdGgxTGluay5uZXh0KCkuZGF0YSgnaGVpZ2h0JylcclxuICAgIH0pO1xyXG5cclxuICAgICRkZXB0aDFMaW5rLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pLmFkZENsYXNzKCd1cCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCAkZGVwdGgxTGluayApe1xyXG4gICAgJGRlcHRoMUxpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmxuYi1kZXB0aDInKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkZGVwdGgxTGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcubG5iLWRlcHRoMS1saW5rJykuZGF0YSgnb3BlbicsICdmYWxzZScpLnJlbW92ZUNsYXNzKCd1cCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudVNlbGZDbG9zZSggJGRlcHRoMUxpbmsgKXtcclxuICAgICRkZXB0aDFMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkZGVwdGgxTGluay5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSkucmVtb3ZlQ2xhc3MoJ3VwJyk7XHJcbiAgfVxyXG5cclxuLy8g7Iuk7ZaJ67aAXHJcbiAgaW5pdCgpO1xyXG5cclxuICAkKCcuY3NzLWxuYi1kZXB0aDEtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiggJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJyApe1xyXG5cclxuICAgICAgbWVudU9wZW4oICQodGhpcykgKTtcclxuICAgICAgbWVudUNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIG1lbnVTZWxmQ2xvc2UoICQodGhpcykgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsIi8qKlxyXG4gKiBBY2NvcmRpb24gbWVudSBqUXVlcnlcclxuICovXHJcblxyXG4vKlxyXG4g4oC7IHNob3cvaGlkZSDtmJXtg5zsnZgg7JWE7L2U65SU7Ja4IOuplOuJtFxyXG4g4oC7IENTUyDsvZTrlKkgOiBzdHlsaW5nLCBoaWRlXHJcblxyXG4gICAxLiDrp4jsmrDsiqQg7YG066at7ZaI7J2EIOuVjCBzdWIg66mU64m06rCAIHNob3cgLyBoaWRlXHJcbiAgIDIuIO2BtOumre2VnCAxIGRlcHRoIOydmCBzdWIg66mU64m06rCAIOuztOydvCDrlYwg64uk66W4IDEgZGVwdGjsnZggc3ViIOuplOuJtOuKlCDslYjrs7Tsl6zslbwg7ZWoLlxyXG4gICAzLiBzdWIg66mU64m06rCAIOuztOydvCDrlYwg7ZmU7IK07ZGc64qUIOycl+uwqe2WpSDtmZTsgrTtkZzroZwg67OA6rK9XHJcbiAgIDQuIHN1YiDrqZTribTqsIAg7JWI67O07J206rKMIOuQoCDrlYwg7ZmU7IK07ZGc64qUIOyVhOueq+uwqe2WpSDtmZTsgrTtkZzroZwg67OA6rK9XHJcbiovXHJcblxyXG4vKlxyXG4g4oC7IHN1YiDrqZTribTsnZgg7JiB7Jet7J20IOuKmOyWtOuCrOuLpC/spITslrTrk6Tsl4jri6Qg7ZiV7YOc7J2YIOyVhOy9lOuUlOyWuCDrqZTribRcclxuIOKAuyBDU1Mg7L2U65SpIDogc3R5bGluZywg7KSE7Ja065OsKOuGkuydtCA6IDApXHJcblxyXG4gICAxLiDrp4jsmrDsiqTrpbwg7YG066at7ZaI7J2EIOuVjCwgc3ViIOuplOuJtOydmCDsg4Htg5zsl5Ag65Sw6528IHN1YiDrqZTribTqsIAg64qY7Ja064KoL+ykhOyWtOuTrFxyXG4gICAyLiDtgbTrpq3tlZwgMSBkZXB0aOydmCBzdWIg66mU64m06rCAIOuKmOyWtOuCoCDrlYwg64uk66W4IDEgZGVwdGjsnZggc3ViIOuplOuJtOuKlCDspITslrTrk6TslrTslbwg7ZWoLlxyXG4gICAzLiBzdWIg66mU64m06rCAIOuztOydvCDrlYwg7ZmU7IK07ZGc64qUIOycl+uwqe2WpSDtmZTsgrTtkZzroZwg67OA6rK9XHJcbiAgIDQuIHN1YiDrqZTribTqsIAg7JWI67O07J206rKMIOuQoCDrlYwg7ZmU7IK07ZGc64qUIOyVhOueq+uwqe2WpSDtmZTsgrTtkZzroZwg67OA6rK9XHJcbiovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOyEoOyWuOu2gFxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgIC8vIOyymOydjCDroZzrlKnrkJjsl4jsnYQg65WMIOyDge2DnFxyXG4gICAgJCgnLmxuYi1kZXB0aDEtbGluaycpLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KTtcclxuXHJcbiAgICAvLyBlYWNoKCkgOiDsmpTshowg6rCc7IiY66eM7YG8IOuwmOuzte2VmOuKlCDtlajsiJhcclxuICAgICQoJy5sbmItZGVwdGgyJykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICQodGhpcykuZGF0YSh7J2hlaWdodCcgOiAkKHRoaXMpLmhlaWdodCgpfSkuY3NzKHtoZWlnaHQgOiAwfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51T3BlbiggJGRlcHRoMUxpbmsgKXtcclxuICAgIC8qXHJcbiAgICAgJCh0aGlzKS5uZXh0KCkuc3RvcCgpLmFuaW1hdGUoe2tleSA6IHZhbHVlfSzsi5zqsIQs7L2c67Cx7ZWo7IiYKVxyXG4gICAgICoqIGpRdWVyeSBET03snYQg64uo6rOE67OE66GcIOywvuyVhOqwiCDrlYwsXHJcbiAgICAgOiDssqvrsogg7Ke4IOyduOyImOydmCB2YWx1ZSDrtoDrtoTsl5AgJCh0aGlzKSDrpbwg7IKs7Jqp7ZWY66m0IOyymOydjCDssL7snYAgJCh0aGlzKeulvCDsnZjrr7hcclxuICAgICA6IOy9nOuwse2VqOyImCDrtoDrtoTsl5AgJCh0aGlzKeulvCDsgqzsmqntlZjrqbQg7LWc7KKF7Jy866GcIOywvuydgCBET03smpTshozqsIAgJCh0aGlzKeqwgCDrkKguXHJcbiAgICAgKi9cclxuICAgICRkZXB0aDFMaW5rLm5leHQoKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodCA6ICRkZXB0aDFMaW5rLm5leHQoKS5kYXRhKCdoZWlnaHQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJGRlcHRoMUxpbmsuZGF0YSh7J29wZW4nIDogJ3RydWUnfSkuYWRkQ2xhc3MoJ3VwJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51Q2xvc2UoICRkZXB0aDFMaW5rICl7XHJcbiAgICAkZGVwdGgxTGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcubG5iLWRlcHRoMicpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGRlcHRoMUxpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmxuYi1kZXB0aDEtbGluaycpLmRhdGEoJ29wZW4nLCAnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRkZXB0aDFMaW5rICl7XHJcbiAgICAkZGVwdGgxTGluay5uZXh0KCkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQgOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkZGVwdGgxTGluay5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSkucmVtb3ZlQ2xhc3MoJ3VwJyk7XHJcbiAgfVxyXG5cclxuICAvLyDsi6TtlonrtoBcclxuICBpbml0KCk7XHJcblxyXG4gICQoJy5sbmItZGVwdGgxLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgnb3BlbicpID09ICdmYWxzZScgKXtcclxuXHJcbiAgICAgIG1lbnVPcGVuKCAkKHRoaXMpICk7XHJcbiAgICAgIG1lbnVDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBtZW51U2VsZkNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
