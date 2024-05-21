const logo = document.querySelector('.header__inner');
const ham = document.querySelector('#js-headerBtn'); //js-hamburgerの要素を取得し、変数hamに格納
const nav = document.querySelector('#js-nav'); //js-navの要素を取得し、変数navに格納
const body =document.body;

ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
  logo.classList.toggle('active'); 
  ham.classList.toggle('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.classList.toggle('active'); // ナビゲーションメニューにactiveクラスを付け外し
  body.classList.toggle('hidden')
});


const swiperKV = new Swiper('.kv__swiper', {
  loop: true,
  speed: 1500, // 少しゆっくり(デフォルトは300)
  effect: 'fade',
  autoplay: { // 自動再生
    delay: 1500, // 1.5秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
});


const swiperCam = new Swiper('.campaign__swiper', {
  loop: true,
  //spaceBetween: 40,
  speed: 1500, // 少しゆっくり(デフォルトは300)
  autoplay: { // 自動再生
    delay: 1500, // 1.5秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
  slidesPerView: 1.2,
  breakpoints: {
    // 600px以上の場合
    600: {
      slidesPerView: 2.3
    },
    768: {
      slidesPerView: 2.3
    },
    // 768px以上の場合
    1440: {
      slidesPerView: 3.4161676647
    }
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    paginationClickable: true,
  },
});


//要素の取得とスピードの設定
const box = $('.js-photo'),
    speed = 700;  

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="add__color"></div>')
    const color = $(this).find($('.add__color')),
    image = $(this).find('img');
    let counter = 0;

    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
          $(this).delay(200).animate({'width':'100%'},speed,function(){
                  image.css('opacity','1');
                  $(this).css({'left':'0' , 'right':'auto'});
                  $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
    });
});

/*=============================================================
# ページトップボタン
=============================================================*/
// ページトップボタン
$(function () {
  const pageTop = $("#js-pagetop");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
  // フッター手前でストップ
  $("#js-pagetop").hide();
  $(window).on("scroll", function () {
    let scrollHeight = $(document).height();
    let scrollPosition = $(window).height() + $(window).scrollTop();
    let footHeight = $("footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
    // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
      $("#js-pagetop").css({
        position: "absolute",
        bottom: footHeight + 20,
      });
    } else {
      $("#js-pagetop").css({
        position: "fixed",
        bottom: "20px",
      });
    }
  });
});
