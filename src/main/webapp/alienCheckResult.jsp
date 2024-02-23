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
     <link rel="stylesheet" href="css/result.css">
    <script defer src="js/script.js"></script>
    <link rel="icon" href="favicon.ico">
    <link rel="icon" sizes="200x200" href="./images/favicon.png">
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
            <h1>診断結果</h1>
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
      }
    </script>
      
      <script
type="module"
src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
></script>
<script
nomodule
src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
></script>
    <a href="top.html" class="btn-top">地球へ向かう</a>
</body>
</html>
