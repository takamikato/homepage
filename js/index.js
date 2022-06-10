$(function () {
  /**
   * 現在スクロール位置によるグローバルナビのアクティブ表示
   */
  const scrollMenu = function () {
    // 配列宣言
    // ここにスクロールで点灯させる箇所のidを記述する
    // 数値は全て0でOK
    const array = {
      '#business': 0,
      '#recruitment': 0,
      '#access': 0,
    };
    const $aside = [];
    const c = a;
    const d = b;

    // 各要素のスクロール値を保存
    for (const key in array) {
      if ($(key).offset()) {
        array[key] = $(key).offset().top - 10; // 数値丁度だとずれるので10px余裕を作る
        $aside[key] = $(`.aside ul li a[href="${key}"]`);
      }
    }

    // スクロールイベントで判定
    $(window).scroll(function () {
      for (const key in array) {
        if ($(window).scrollTop() > array[key] - 50) {
          $('.aside ul li a').each(function () {
            $(this).removeClass('active');
          });
          $aside[key].addClass('active');
        }
      }
    });
  };

  // 実行
  scrollMenu();
});
