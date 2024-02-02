  function showMessageAndResetForm() {
            document.getElementById('message-pop').style.display = 'block';
            
            // フォームをリセット
            document.getElementById('contact-form').reset();
        }
        
         document.addEventListener("DOMContentLoaded", function () {
		// ページが読み込まれたらローディング画面を非表示に
		setTimeout(function () {
		    document.querySelector(".loader-wrapper").style.opacity = 0;
		    document.querySelector(".loader-wrapper").style.pointerEvents = "none";
		}, 400); // ローディング画面の表示時間（1秒）
		
		// ここに背景画像への切り替えなどの処理を追加
		});