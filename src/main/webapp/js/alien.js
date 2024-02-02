 // モーダルを開くための関数
  function openModal() {
      var modal = document.getElementById('alienCheckModal');
      modal.style.display = 'block';
  }

  // モーダルを閉じるための関数
  function closeModal() {
      var modal = document.getElementById('alienCheckModal');
      modal.style.display = 'none';
  }

  // モーダルトリガーボタンにクリックイベントを追加
  var openModalBtn = document.getElementById('openModalBtn');
  openModalBtn.addEventListener('click', openModal);

  // モーダル外をクリックしたらモーダルを閉じる
  window.addEventListener('click', function(event) {
      var modal = document.getElementById('alienCheckModal');
      if (event.target === modal) {
          closeModal();
      }
  });

  // ボタンにクリックイベントを追加してモーダルを閉じる
  var closeModalBtn = document.getElementById('closeModalBtn');
  closeModalBtn.addEventListener('click', closeModal);

  function readText() {
	  var textToRead = document.getElementById('textToRead').textContent;
	  var utterance = new SpeechSynthesisUtterance(textToRead);
	  speechSynthesis.speak(utterance);
	}


        document.addEventListener("DOMContentLoaded", function () {
      // ページが読み込まれたらローディング画面を非表示に
      setTimeout(function () {
        document.querySelector(".loader-wrapper").style.opacity = 0;
        document.querySelector(".loader-wrapper").style.pointerEvents = "none";
      }, 1000); // ローディング画面の表示時間（1秒）

      // ここに背景画像への切り替えなどの処理を追加
    });


    // TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
    function TextTypingAnime() {
        $('.TextTyping').each(function () {
            var elemPos = $(this).offset().top - 50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            var thisChild = "";
            if (scroll >= elemPos - windowHeight) {
                thisChild = $(this).children(); //spanタグを取得
                //spanタグの要素の１つ１つ処理を追加
                thisChild.each(function (i) {
                    var time = 150;
                    //時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
                    $(this).delay(time * i).fadeIn(time);
                });
            } else {
                thisChild = $(this).children();
                thisChild.each(function () {
                    $(this).stop(); //delay処理を止める
                    $(this).css("display", "none"); //spanタグ非表示
                });
            }
        });
    }

    // アニメーションをリセットしてループする関数
    function resetAnimation() {
        $('.TextTyping span').hide();
        $('.TextTyping::after').css("opacity", 0);
        TextTypingAnime();
    }

    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
        TextTypingAnime(); /* アニメーション用の関数を呼ぶ*/
    });

    // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function () {
        // spanタグを追加する
        var element = $(".TextTyping");
        element.each(function () {
            var text = $(this).html();
            var textbox = "";
            text.split('').forEach(function (t) {
                if (t !== " ") {
                    textbox += '<span>' + t + '</span>';
                } else {
                    textbox += t;
                }
            });
            $(this).html(textbox);

        });

        TextTypingAnime(); /* アニメーション用の関数を呼ぶ*/
    });

    // アニメーションをリセットしてループする
    setInterval(resetAnimation, 10000); // ループの間隔を設定（ここでは3秒ごと）
