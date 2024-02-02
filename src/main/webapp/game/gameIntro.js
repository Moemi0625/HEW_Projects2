let currentLanguage = 'english'; // 初期言語を設定
        
        document.addEventListener('DOMContentLoaded', function () {
            // ここでcurrentLanguageを初期化する
            if (!currentLanguage) {
                currentLanguage = 'english';
            }
        });
        
        function switchLanguage(language) {
            // 言語ごとの要素を取得
            const englishInstructions = document.getElementById('englishInstructions');
            const japaneseInstructions = document.getElementById('japaneseInstructions');
            const toggleButton = document.getElementById('toggleButton');
        
            // 切り替えボタンがクリックされた場合、現在の言語をトグル
            if (language === 'toggle') {
                currentLanguage = currentLanguage === 'english' ? 'japanese' : 'english';
            } else {
                currentLanguage = language;
            }
        
            // 言語ごとの要素を表示/非表示切り替え
            if (currentLanguage === 'english') {
                englishInstructions.style.display = 'block';
                japaneseInstructions.style.display = 'none';
                toggleButton.textContent = 'Japanese'; // ボタンテキストを変更
            } else if (currentLanguage === 'japanese') {
                englishInstructions.style.display = 'none';
                japaneseInstructions.style.display = 'block';
                toggleButton.textContent = 'English'; // ボタンテキストを変更
            }
        
            console.log(`Current Language: ${currentLanguage}`);
        }

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


var currentHintIndex = 0; // 現在のヒントのインデックス

var hints = [  
   { title: "ヒント1 [日本] 富士山",text: "富士山は1872（明治５）年までは、女人禁制の山だった", imageSrc: "img/jp1.png" },
   { title: "ヒント2 [日本] 桃太郎",text: "【桃】太郎の由来は、桃が邪気を祓う力があると中国と日本で考えられていたから", imageSrc: "img/jp.png" },
   { title: "ヒント3 [韓国] チマチョゴリ",text: "韓国女性の伝統衣装チマチョゴリは防寒のためスカートが丸い形になっている", imageSrc: "img/ko3.png" },
   { title: "ヒント4 [韓国] ビビンバ",text: "韓国の代表的な料理ビビンバは韓国語で「混ぜご飯」という意味", imageSrc: "img/ko4.png" },
   { title: "ヒント5 [オーストラリア] タスマニアデビル",text: "1845種（日本の3倍）登録されたオーストラリアの絶滅危惧の一つでタスマニア島に生息する", imageSrc: "img/aus.png" },
   { title: "ヒント6 [オーストラリア] 南極サンタさん",text: "オーストラリアの12月は真夏で海にはサンタサーファーがいる", imageSrc: "img/aus4.png" },
   { title: "ヒント7 [フィリピン] ハロハロ",text: "フィリピンの代表的なかき氷デザートハロハロはタガログ語で「混ぜこぜ」という意味", imageSrc: "img/phl.png" },
   { title: "ヒント8 [フィリピン] ジャスミン",text: "ジャスミンは「永遠の愛」という花言葉を持つフィリピンの国花", imageSrc: "img/phl2.png" },
   // 他のヒントを必要なだけ追加できます
];

// 初期表示
updateHint();

function updateHint() {
   var hintContainer = document.getElementById("hintContainer");
   var hintTitle = document.getElementById("hintTitle");
   var hintText = document.getElementById("hintText");
   var hintImage = document.getElementById("hintImage");

   hintTitle.textContent = hints[currentHintIndex].title;
   hintText.textContent = hints[currentHintIndex].text;
   hintImage.src = hints[currentHintIndex].imageSrc;
}

function showNextHint() {
   currentHintIndex++;
   if (currentHintIndex >= hints.length) {
      currentHintIndex = 0; // ヒントが最後まで表示されたら最初に戻る
   }
   updateHint();
}