function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show Back to Top button when scrolling
window.onscroll = function () {
    var backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Scroll to top when the page is reloaded
window.onload = function () {
    scrollToTop();
};

function readText() {
    var textToRead = document.getElementById('textToRead').innerText;
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


function scrollToSmoothly(element, duration) {
const targetPosition = element.getBoundingClientRect().top;
const startPosition = window.scrollY || window.pageYOffset;
const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

function scrollStep() {
    const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const newPosition = easeInOutQuad(elapsedTime, startPosition, targetPosition, duration);

    window.scrollTo(0, newPosition);

    if (elapsedTime < duration) {
        requestAnimationFrame(scrollStep);
    }
}

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

    requestAnimationFrame(scrollStep);
}

// 要素を取得してゆっくりスクロール
function scrollToBoard() {
    const board = document.getElementById('board');
    scrollToSmoothly(board, 5000); // ミリ秒単位のスクロール時間
}

        // Initialize the game
        generateCards();
        renderBoard();


// Show Back to Top button when scrolling
window.onscroll = function () {
    var backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};


function openModal(modalId) {
    var modal = document.getElementById(modalId + "Modal");
    if (modal) {
        modal.style.display = "block";
    }
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId + "Modal");
    if (modal) {
        modal.style.display = "none";
    }
}



    document.addEventListener('DOMContentLoaded', function() {
        var imageContainer = document.body;
    
        document.getElementById('imageButton').addEventListener('click', function() {
            // 切り替え前のクラスが既に設定されているか確認
            if (imageContainer.classList.contains('default-background')) {
                // 別の画像に切り替える
                imageContainer.classList.remove('default-background');
                imageContainer.style.backgroundImage = "url('./images/background2.jpg')";
            } else {
                // デフォルトの画像に戻す
                imageContainer.classList.add('default-background');
                imageContainer.style.backgroundImage = "url('./images/background1.jpg')";
            }
        });
    });
      

