<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="jp">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio'23</title>
    <script defer src="js/space.js"></script>
    <link rel="stylesheet" href="css/portfolio.css">
    <link rel="stylesheet" href="css/space.css" />
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
<a href="top.html" onclick="addBlackScreen()" class="btn-top go-earth top-hover" style="width:150px; height:80px;">
<ion-icon name="rocket-outline" style="font-size: 40px; cursor: pointer; font-weight:bolder;">
</ion-icon><br>地球へ向かう</a>

<!-- モーダル診断コンテンツ -->
	<div id="alienCheckModal" class="modal">
	    <div class="alien-modal-content">
	
	    <form action="AlienCheck" method="post">
	    <h4 style="text-align:center;margin: 50px auto -20px auto;">地球に行くべきか否か<br>
	    	あなたの任務適性度を測ってみよう</h4>
	    	
	    	
  	<div class="question-box" id="q-1">
	    <label>１．あなたの固有名は？</label><br><br>
	    <input type="text" name="name" required style="margin-left:25px; padding:10px;width:220px;" 
	    autocomplete="off">
	</div>

   <div class="question-box" id="q-2">
       <label>２．あなたの見た目年齢は？</label>
       <div class="options">
           <input type="radio" name="age" value="1" required> 生まれたての歳～50歳<br>
           <input type="radio" name="age" value="2"> 51歳～死に際の歳<br>
           <input type="radio" name="age" value="3"> 私に時間の概念は存在しない<br>
       </div>
   </div>

   <div class="question-box" style="margin-top:-40px;" id="q-3">
       <label>３．あなたの母国の言語は？</label>
       <div class="options">
           <input type="radio" name="language" value="1" required> 日本語<br>
           <input type="radio" name="language" value="2"> プログラミング言語<br>
           <input type="radio" name="language" value="3"> 宇宙語<br>
           <input type="radio" name="language" value="4"> 私に言葉の概念は存在しない<br>
       </div>
   </div>
 
   <div class="question-box" style="margin-top:-25px;" id="q-4">
       <label>４．あなたの肌色は？</label>
       <div class="options">
           <input type="radio" name="skinColor" value="1" required> 人間の肌色<br>
           <input type="radio" name="skinColor" value="2"> 宇宙人みたいな肌色<br>
           <input type="radio" name="skinColor" value="3"> そもそも私は肉体を持たない<br>
       </div>
   </div>

        <div style="display:flex; justify-content:center;" id="q-btn">
            <button id="closeModalBtn" type="button" class="btn" style="width: 20%; margin: 20px; 
            cursor:pointer:">閉じる</button>
            <input type="submit" value="診断する" class="btn" style=" width:20%; margin:20px;">
        </div>
        
    </form>
  </div>
</div>

<!-- 読み上げテキストの内容 -->
  <div class="space-body">
    <div class="hero">
     
      <div id="textToRead">
        <p class="TextTyping">今回、我々は地球生命体〖人間〗を調査する。
          その調査対象の人間の名は...
         〖アカホリ・モエミ〗</p>
          
         <p style="display: none;">あのお、それは一体誰ですか？
         	それを今から調査するのです。
			ではさっそく、最初の任務を与えます。彼女の調査報告書を地球で入手し、それを解読しなさい。
			 あ、ｱｲｱｲｻｰ。
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
     
  <script src="js/alien.js"></script>

<div class="footer"></div>

<footer>
    <p>&copy; 2023 Moemi</p>
</footer>
    
  </body>
</html>


