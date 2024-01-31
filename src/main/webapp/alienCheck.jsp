<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="jp">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio'23</title>
    <script defer src="space.js"></script>
    <link rel="stylesheet" href="css/portfolio.css">
    <link rel="stylesheet" href="space.css" />
    <link rel="icon" href="favicon.ico">
    <link rel="icon" sizes="200x200" href="./images/favicon.png">
</head>

<body>
<!-- リロードアニメーション生成 -->
<div class="loader-wrapper"></div>

<!-- 宇宙生成 -->
<canvas id="myCanvas"></canvas>

<!-- モーダルトリガーボタン -->
<button id="openModalBtn" class="btn-top top-hover">任務適性診断</button>

<!-- テキスト読み上げるボタン -->
 <h6 class="top-hover radio-hover">
    <ion-icon name="radio-outline" onclick="readText()"></ion-icon></h6>

<!-- 地球に行くボタン -->
<a href="top.html" onclick="addBlackScreen()" class="btn-top go-earth top-hover"><ion-icon name="rocket-outline" style="font-size: 30px; cursor: pointer;">
</ion-icon><br>地球に行く</a>

<!-- モーダル診断コンテンツ -->
	<div id="alienCheckModal" class="modal">
	    <div class="alien-modal-content">
	
	    <form action="AlienCheck" method="post">
	    <h4 style="text-align:center;margin: 50px auto -20px auto;">地球に行くべきか否か<br>あなたの任務適性度を測ってみよう</h4>
	        <div class="question-box">
	    <label>１．あなたの固有名は？</label><br><br>
	    <input type="text" name="name" required style="margin-left:25px; padding:10px;width:220px;" autocomplete="off">
	</div>

   <div class="question-box">
       <label>２．あなたの見た目年齢は？</label>
       <div class="options">
           <input type="radio" name="age" value="1" required> 生まれたての歳～50歳<br>
           <input type="radio" name="age" value="2"> 51歳～死に際の歳<br>
           <input type="radio" name="age" value="3"> 私に時間の概念は存在しない<br>
       </div>
   </div>

   <div class="question-box" style="margin-top:-40px;">
       <label>３．あなたの母国の言語は？</label>
       <div class="options">
           <input type="radio" name="language" value="1" required> 日本語<br>
           <input type="radio" name="language" value="2"> プログラミング言語<br>
           <input type="radio" name="language" value="3"> 宇宙語<br>
           <input type="radio" name="language" value="4"> 私に言葉の概念は存在しない<br>
       </div>
   </div>

   <div class="question-box" style="margin-top:-25px;">
       <label>４．あなたの肌色は？</label>
       <div class="options">
           <input type="radio" name="skinColor" value="1" required> 人間の肌色<br>
           <input type="radio" name="skinColor" value="2"> 宇宙人みたいな肌色<br>
           <input type="radio" name="skinColor" value="3"> そもそも私は肉体を持たない<br>
       </div>
   </div>

        <div style="display:flex; justify-content:center;">
            <button id="closeModalBtn" type="button" class="btn" style="width: 20%; margin: 20px; cursor:pointer:">閉じる</button>
            <input type="submit" value="診断する" class="btn" style=" width:20%; margin:20px;">
        </div>
        
    </form>
  </div>
</div>

<!-- 読み上げテキストの内容 -->
  <div class="space-body">
    <div class="hero">
     
      <div id="textToRead">
        <p class="TextTyping">今回、我々の使命は地球生命体〖人間〗を調査することにある。
          その調査対象の人間の名は...
          ”アカホリ・モエミ”</p>
          
         <p style="display: none;">、、アイアイサー!、、。
			 よし、では彼女の調査報告書を地球で入手し、それを解読するように。
		</p>
  
    </div>
  </div>
</div> 
       
     <script src="https://code.jquery.com/jquery-3.4.1.min.js"
          integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous">
     </script>
   	<script
		type="module"
		src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js">
	    </script>
		<script
		nomodule
		src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js">
		</script>
		<script
		  src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
		  integrity="sha512-dLxUelApnYxpLt6K2iomGngnHO83iUvZytA3YjDUCjT0HDOHKXnVYdf3hU4JjM8uEhxf9nD1/ey98U3t2vZ0qQ=="
		  crossorigin="anonymous"
		  referrerpolicy="no-referrer">
		</script>
     
  <script>

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

  </script>

<div class="footer"></div>

<footer>
    <p>&copy; 2023 Moemi</p>
</footer>
    
  </body>
</html>


