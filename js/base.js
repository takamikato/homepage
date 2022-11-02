/* pageLoad */
jQuery(window).load(function () {
  jQuery(".contentWrap,body>header,body>footer,.breadcrumbWrap,#footerEntryBtn").css("opacity", "1");
    jQuery('#loadLayer').delay(2000).queue(function(next) {
    jQuery(this).addClass("loadComplete");
    jQuery('#slide1,#slide2').css('display','block');
var $interval = 5000;
var $fade_speed = 500;
jQuery("#slide1 li,#slide2 li").css({"position":"relative","overflow":"hidden"});
jQuery("#slide1 li,#slide2 li").hide().css({"position":"absolute","top":0,"left":0});
jQuery("#slide1 li:first,#slide2 li:first").addClass("active").show();
setInterval(function(){
var $active = jQuery("#slide1 li.active,#slide2 li.active");
var $next = $active.next("li").length?$active.next("li"):jQuery("#slide1 li:first,#slide2 li:first");
$active.fadeOut($fade_speed).removeClass("active");
$next.fadeIn($fade_speed).addClass("active");
},$interval);
    next();
    });
jQuery('.innerPage #atf').delay(2500).queue(function(next) {
    jQuery(this).addClass("active");
    });
    jQuery('#loadLayer').delay(600).queue(function(next) {
    jQuery(this).css('display','none');
    next();
    });
});

/* scrollAction */
var startPos = 0;
jQuery(window).scroll(function(){
  var obj_t_pos = jQuery('#atf').next().offset().top;
      var scr_count = jQuery(document).scrollTop() + 120;
  var currentPos = jQuery(this).scrollTop();
  if (currentPos > startPos) {
    if(scr_count > obj_t_pos){
      jQuery("body>header").addClass("outside");
    }
  } else {
    jQuery("body>header").removeClass("outside");
  }
  startPos = currentPos;
});

jQuery(function () {
    jQuery(window).scroll(function () {
        if(jQuery(window).scrollTop() > 100) {
            jQuery('body>header').addClass("color");
        } else {
            jQuery('body>header').removeClass("color");
        }
    });
});

/* accordion */
jQuery(function(){
  jQuery(".accordion>.title").on("click", function() {
    jQuery(this).next().toggleClass("on");
    jQuery(this).toggleClass("on");
  });
});
jQuery(function(){
  jQuery(".basicNav>li>a").on("click", function() {
    jQuery(".accordion>.title").next().removeClass("on");
  });
});

/* windowHeight */
jQuery(function () {
  jQuery(".windowHeight").css("height",jQuery(window).outerHeight());
  jQuery(window).resize(function(){
    jQuery(".windowHeight").css("height",jQuery(window).outerHeight());
  });
});

/* easingScroll */
jQuery(function(){
   jQuery('a[href^=#]').click(function() {
      var speed = 500;
      var href= jQuery(this).attr("href");
      var target = jQuery(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

/* trigger */
jQuery(function() {
  jQuery('.triggerBasic, .trigger1, .trigger2, .triggerTB');
    jQuery(window).scroll(function(){
      var windowHeight = jQuery(window).height(),
      topWindow = jQuery(window).scrollTop();
      jQuery('.triggerBasic, .trigger1, .trigger2, .triggerTB').each(function(){
      var targetPosition = jQuery(this).offset().top;
//エージェント判定
    var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        // スマートフォン用コード
if(topWindow > targetPosition - windowHeight + 50){
        jQuery(this).addClass("active");
        jQuery(this).removeClass("standby");
      }
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        // タブレット用コード
if(topWindow > targetPosition - windowHeight + 50){
        jQuery(this).addClass("active");
        jQuery(this).removeClass("standby");
      }
    } else {
        // PC用コード
if(topWindow > targetPosition - windowHeight + 300){
        jQuery(this).addClass("active");
        jQuery(this).removeClass("standby");
      }
    }
//エージェント判定 end
    });
  });
});

/* svg edit */
$(function(){
  deSVG('.replace-svg', true);
});

/* gnavBtn */
jQuery(function() {
  jQuery("#gnavBtn").click(function() {
    jQuery("#gnavPanel,#gnavBtn,#gnavBg").toggleClass("open");
    return false;
  });
});
jQuery("#gnavBtn"); 
jQuery(function () {
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 0) {
            jQuery("#gnavPanel,#gnavBtn,#gnavBg").removeClass("open");
        } else {
            jQuery("#gnavPanel,#gnavBtn,#gnavBg").removeClass("open");
        }
    });
});

jQuery('body>header').hover(
    function() {
      jQuery('body>header').addClass("on");
    },
    function() {
      jQuery('body>header').removeClass("on");
    }
);

jQuery(window).scroll(function(){
  var obj_t_pos = jQuery('#atf').next().offset().top;
      var scr_count = jQuery(document).scrollTop() + 120;
  var currentPos = jQuery(this).scrollTop();
    if(scr_count > obj_t_pos){
      jQuery("#footerEntryBtn").addClass("sizing");
  } else {
    jQuery("#footerEntryBtn").removeClass("sizing");
  }
});
jQuery('#footerEntryBtn').hover(
    function() {
      jQuery('#footerEntryBtn').addClass("on");
    },
    function() {
      jQuery('#footerEntryBtn').removeClass("on");
    }
);
jQuery(function(){
   jQuery(window).scroll(function(){
      var obj_t_pos = jQuery('body>footer').offset().top;
      var scr_count = jQuery(document).scrollTop() + (window.innerHeight);
      if(scr_count > obj_t_pos){
         jQuery('#footerEntryBtn').addClass("outside");
      }else{
         jQuery('#footerEntryBtn').removeClass("outside");
      }
   })
})

/* img + thumbnail */
jQuery(function(){
  jQuery('.hiroo7f.switchingImgWrap .thumbnail .img').click(function(){
    jQuery('.hiroo7f.switchingImgWrap .thumbnail .img.active').removeClass("active");
    jQuery(this).addClass("active");
    var $thisImg = jQuery(this).css('background-image');
    jQuery('.hiroo7f.switchingImgWrap .main .img').css('background-image', $thisImg).hide().fadeIn(500);
  });
});
jQuery(function(){
  jQuery('.hiroo8f.switchingImgWrap .thumbnail .img').click(function(){
    jQuery('.hiroo8f.switchingImgWrap .thumbnail .img.active').removeClass("active");
    jQuery(this).addClass("active");
    var $thisImg = jQuery(this).css('background-image');
    jQuery('.hiroo8f.switchingImgWrap .main .img').css('background-image', $thisImg).hide().fadeIn(500);
  });
});
jQuery(function(){
  jQuery('.ebisu .switchingImgWrap .thumbnail .img').click(function(){
    jQuery('.ebisu .switchingImgWrap .thumbnail .img.active').removeClass("active");
    jQuery(this).addClass("active");
    var $thisImg = jQuery(this).css('background-image');
    jQuery('.ebisu .switchingImgWrap .main .img').css('background-image', $thisImg).hide().fadeIn(500);
  });
});
jQuery(function(){
  jQuery('.koshiyama .switchingImgWrap .thumbnail .img').click(function(){
    jQuery('.koshiyama .switchingImgWrap .thumbnail .img.active').removeClass("active");
    jQuery(this).addClass("active");
    var $thisImg = jQuery(this).css('background-image');
    jQuery('.koshiyama .switchingImgWrap .main .img').css('background-image', $thisImg).hide().fadeIn(500);
  });
});

//エージェント判定
    var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        // スマートフォン用コード
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        // タブレット用コード
    } else {
        // PC用コード
var articles = $('.faqList>li>.bodyWrap');

articles.mousemove(function(e) {
  var current = $(this),
      x = current.width() - e.offsetX * 2,
      y = current.height() - e.offsetY * 2,
      //rx = -x / 30,
      //ry = y / 24,
      rx = -x / 60,
      ry = y / 48,
      deg = Math.atan2(y, x) * (180 / Math.PI) + 45;
  current.css({"transform":"scale(1.05) rotateY("+rx+"deg) rotateX("+ry+"deg)"});
});

articles.on({
  'mouseenter':function() {
    var current = jQuery(this);
    current.addClass('enter ease').removeClass("leave");
    setTimeout(function(){
      current.removeClass('ease');
    }, 280);
  },
  'mouseleave':function() {
    var current = jQuery(this);
    current.css({"transform":"rotate(0)"});
    current.removeClass('enter').addClass("leave");
  }}
);
    }
//エージェント判定 end

/* pegeTransition */
//window.onbeforeunload = function(event){
//jQuery('body').fadeOut(200);
//}

var userAgentB = window.navigator.userAgent.toLowerCase();

if(userAgentB.indexOf('msie') != -1 || userAgentB.indexOf('trident') != -1 || userAgentB.indexOf('edge') != -1 || userAgentB.indexOf('chrome') != -1 || userAgentB.indexOf('firefox') != -1) {
    //Internet Explorer / Edge / Google Chrome / FireFox
/* customPointer */
//エージェント判定
    var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        // スマートフォン用コード
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        // タブレット用コード
    } else {
        // PC用コード
const $stalker = document.querySelector('.stalker');
const $cursor = document.querySelector('.cursor');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($stalker, 0.35, {
    x: e.clientX,
    y: e.clientY
  })
  TweenMax.to($cursor, 0.45, {
    x: e.clientX,
    y: e.clientY
  })
}

jQuery("a,input,select,textarea,button,.mwform-checkbox-field-text,.mwform-radio-field-text").on({
  "mouseenter": function() {
    jQuery(".pointer").addClass("active");
  },
  "mouseleave": function() {
    jQuery(".pointer").removeClass("active");
  }
});
    }
//エージェント判定 end
} else if(userAgentB.indexOf('safari') != -1) {
    //Safari
} else if(userAgentB.indexOf('opera') != -1) {
    //Opera
} else {
    //不明
}

// アニメーション（テキスト）
function BlurTextAnimeControl() {
	$('.blurTrigger').each(function(){ //blurTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
		}else{
		$(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
		}
		});
  $('.blurTriggerText').each(function(){ //blurTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('blurText');// 画面内に入ったらblurというクラス名を追記
    }else{
    $(this).removeClass('blurText');// 画面外に出たらblurというクラス名を外す
    }
    });
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	BlurTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// アニメーション（ブロック）
function fadeAnime(){
  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $('.fadeInUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');
      // 画面内に入ったらfadeInというクラス名を追記
    }else{
      $(this).removeClass('fadeIn');
      // 画面外に出たらfadeInというクラス名を外す
    }
  });

  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $('.fadeInDownTrigger').each(function(){ //fadeInUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeDown');
      // 画面内に入ったらfadeInというクラス名を追記
    }else{
      $(this).removeClass('fadeDown');
      // 画面外に出たらfadeInというクラス名を外す
    }
  });
  //関数でまとめることでこの後に違う動きを追加することが出来ます
  $('.fadeInLeftTrigger2').each(function(){ //fadeInDownTriggerというクラス名が
    var elemPos = $(this).offset().top-50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeLeft2');
      // 画面内に入ったらfadeDownというクラス名を追記
    }else{
      $(this).removeClass('fadeLeft2');
      // 画面外に出たらfadeDownというクラス名を外す
    }
  });
  //関数でまとめることでこの後に違う動きを追加することが出来ます
  $('.fadeInLeftTrigger3').each(function(){ //fadeInDownTriggerというクラス名が
    var elemPos = $(this).offset().top-50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeLeft3');
      // 画面内に入ったらfadeDownというクラス名を追記
    }else{
      $(this).removeClass('fadeLeft3');
      // 画面外に出たらfadeDownというクラス名を外す
    }
  });

  $('.rightAnime').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      //右へ左へ表示するクラスを付与
      $(this).addClass("slideAnimeRightLeft"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
    }else{
      //右から左へ表示するクラスを取り除く
      $(this).removeClass("slideAnimeRightLeft");
    }
  });

  $('.leftAnime').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      //左から右へ表示するクラスを付与
      //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
      $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
      $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    }else{
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
      
    }
  });
  $('.leftAnime2').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      //左から右へ表示するクラスを付与
      //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
      $(this).addClass("slideAnimeLeftRight2"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
      $(this).children(".leftAnimeInner2").addClass("slideAnimeRightLeft2");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    }else{
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("slideAnimeLeftRight2");
      $(this).children(".leftAnimeInner2").removeClass("slideAnimeRightLeft2");
      
    }
  });
  $('.leftAnime3').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      //左から右へ表示するクラスを付与
      //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
      $(this).addClass("slideAnimeLeftRight3"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
      $(this).children(".leftAnimeInner3").addClass("slideAnimeRightLeft3");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    }else{
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("slideAnimeLeftRight3");
      $(this).children(".leftAnimeInner3").removeClass("slideAnimeRightLeft3");
      
    }
  });

  //関数でまとめることでこの後に違う動きを追加することが出来ます
  $('.fadeInRightTrigger').each(function(){ //fadeInDownTriggerというクラス名が
    var elemPos = $(this).offset().top-50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeRight');
      // 画面内に入ったらfadeDownというクラス名を追記
    }else{
      $(this).removeClass('fadeRight');
      // 画面外に出たらfadeDownというクラス名を外す
    }
  });

  $('.box').each(function(){ //fadeInDownTriggerというクラス名が
    var elemPos = $(this).offset().top-50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bd2_active');
      // 画面内に入ったらfadeDownというクラス名を追記
    }else{
      $(this).removeClass('bd2_active');
      // 画面外に出たらfadeDownというクラス名を外す
    }
  });
}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// $(function(){
//   var scrollStart = $('.fixed-background').offset().top; //ページ上部からの距離を取得
//   var scrollEnd = $('.p-alliance-about').offset().top; //ページ上部からの距離を取得
//   var distance = 0;

//   $(document).scroll(function(){
//     distance = $(this).scrollTop(); //スクロールした距離を取得

//     if (scrollEnd <= distance) { //スクロール距離が『.end_box』の位置を超えたら
//       $('.fixed-background').addClass('none'); //class『none』を追加
//     } else{
//       $('.fixed-background').removeClass('none'); //『.end_box』より上部に戻ったらclass『none』を削除
//     }
//   });      
// });

/**
 * アライアンスページFVの背景画像をスクロール量に応じてON/OFFする
 */
$(function(){
  if(location.pathname === "/alliance/") {
    var scrollEnd = $('.p-alliance-about').offset().top; //ページ上部からの距離を取得
    var distance = 0;
  
    $(document).scroll(function(){
      distance = $(this).scrollTop(); //スクロールした距離を取得  
      if (scrollEnd <= distance) { //スクロール距離が『.end_box』の位置を超えたら
        $('.p-alliance-fv').addClass('none'); //class『none』を追加
        $('head').removeClass('top_animation_adjust');
      } else{
        $('.p-alliance-fv').removeClass('none'); //『.end_box』より上部に戻ったらclass『none』を削除
      }
    });      
  }
});

function fadeAnimeLoad(){
  $('.leftAnimeLoad').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      //左から右へ表示するクラスを付与
      //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
      $(this).addClass("slideAnimeLoadLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
      $(this).children(".leftAnimeLoadInner").addClass("slideAnimeLoadRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    }else{
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("slideAnimeLoadLeftRight");
      $(this).children(".leftAnimeLoadInner").removeClass("slideAnimeLoadRightLeft");
      
    }
  });
  $('.rightAnimeLoad').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      //左から右へ表示するクラスを付与
      //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
      $(this).addClass("slideAnimeLoadRightLeft"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
      $(this).children(".rightAnimeLoadInner").addClass("slideAnimeLoadLeftRight");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    }else{
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("slideAnimeLoadRightLeft");
      $(this).children(".rightAnimeLoadInner").removeClass("slideAnimeLoadLeftRight");
      
    }
  });
  $('.leftAnimeLoadFVcover').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      //左から右へ表示するクラスを付与
      //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
      $(this).addClass("slideAnimeLoadFVcoverLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
      $(this).children(".rightAnimeLoadFVcoverInner").addClass("slideAnimeLoadFVcoverRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    }else{
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("slideAnimeLoadFVcoverLeftRight");
      $(this).children(".rightAnimeLoadFVcoverInner").removeClass("slideAnimeLoadFVcoverRightLeft");
      
    }
  });
  $('.rightAnimeLoadFVcover').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      //左から右へ表示するクラスを付与
      //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
      $(this).addClass("slideAnimeLoadFVcoverRightLeft"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
      $(this).children(".rightAnimeLoadFVcoverInner").addClass("slideAnimeLoadFVcoverLeftRight");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    }else{
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("slideAnimeLoadFVcoverRightLeft");
      $(this).children(".rightAnimeLoadFVcoverInner").removeClass("slideAnimeLoadFVcoverLeftRight");
      
    }
  }); 
}

$(window).on('load',function (){
  fadeAnimeLoad();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述
// 画面をスクロールをしたら動かしたい場合の記述