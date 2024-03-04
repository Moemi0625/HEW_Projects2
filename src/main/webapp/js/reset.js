document.addEventListener('DOMContentLoaded', function () {
    // 「元に戻す」ボタンがクリックされたときの処理
    document.getElementById('resetButton').addEventListener('click', function () {
        // サーブレットへのリクエストを発行し、セッションをリセットする
        fetch('resetLanguage')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // top.html にリダイレクト
                window.location.href = 'top.html';
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    });
});

// 他のページからのアクセスを制限
if (window.location.pathname !== '/top_jp.html') {
    // エラーページにリダイレクト
    window.location.href = 'error.html';
}
