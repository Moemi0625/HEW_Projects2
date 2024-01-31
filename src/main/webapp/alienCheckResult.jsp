<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page import="java.util.Random" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="javax.servlet.http.HttpServletRequest" %>
<%@ page import="javax.servlet.http.HttpServletResponse" %>
<%@ page import="javax.servlet.http.HttpSession" %>
<%
    //level 変数を宣言し、適切な初期値を設定
    int level = 50;
%>

<!DOCTYPE html>
<html>
<head>
   <!DOCTYPE html>
<html lang="jp">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio'23</title>
    <link rel="stylesheet" href="css/portfolio.css">
    <script defer src="script.js"></script>
    <link rel="icon" href="favicon.ico">
    <link rel="icon" sizes="200x200" href="./images/favicon.png">
  
    <style>
    body {
    background-image: url('./images/moon-surface.jpg');
    background-size: cover;
    font-family: Arial, sans-serif;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
}

.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}

.image-container {
    flex: 1;
}

.image-container img{
width:450px;
height:50%;}

.result-box {
    background: rgba(0, 0, 0, 0.5);
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    color: white;
    width: 40%;
    border: 1px solid white;
    margin-right:10%;
    
}

.result-box h1 {
    margin-bottom: 50px;
    margin-top:30px;
}

.result-box a.btn {
    margin-top: 30px;
}

h2{
font-size:60px;
margin:-30px auto;
border: none;
transition: transform 0.3s;
}

h2:hover{
transform: scale(1.2);
color: rgb(193, 193, 149); 
}
</style>
</head>
<body>
 <div class="loader-wrapper"></div>
 
  <% // 画像の設定
     String[] alienImages = {"./images/alien1.png", "./images/alien2.png", "./images/alien3.png", 
     "./images/alien4.png", "./images/alien5.png",  "./images/alien6.png"};

	 // ランダムに画像を選択
	 Random random = new Random();
	 int selectedImageIndex = random.nextInt(alienImages.length);
	 String selectedImage = alienImages[selectedImageIndex];
    %>

  <div class="container">
        <div class="image-container">
            <img src="<%= selectedImage %>" alt="宇宙人画像">
        </div>
        <div class="result-box">
            <h1>宇宙人診断結果</h1>
           <h2><ion-icon name="radio-outline" onclick="readText()" style =" cursor: pointer;"></ion-icon></h2>
			  <div id="textToRead">
			  <p style="font-weight:bolder; font-size:25px;">任務適性レベル: ${level}</p>
			  <p>${result}</p>
			  </div>
			  <div style="display:flex; justify-content:space-between;">
            <p>診断日: ${diagnosisDate}</p>
             <form action="AlienCheck" method="get">
        <input type="submit" value="宇宙に戻る" class="btn">
    </form></div>
        </div>
    </div>
    <script>
    function readText() {
        var textToRead = document.getElementById('textToRead').innerText;
        var utterance = new SpeechSynthesisUtterance(textToRead);
        speechSynthesis.speak(utterance);
      }</script>
      
      <script
type="module"
src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
></script>
<script
nomodule
src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
></script>
    <a href="top.html" class="btn-top">使命を果たしに地球へ向かう</a>
</body>
</html>
