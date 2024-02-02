document.getElementById('downloadButton').addEventListener('click', function() {
		    // 履歴書のファイルを取得
		    const imageUrl = 'images/resume.pdf'; // imagesフォルダにある場合の例
		    fetch(imageUrl)
		        .then(response => response.blob())
		        .then(blob => {
		            // Blobオブジェクトを作成し、ダウンロードリンクを生成
		            const url = URL.createObjectURL(blob);
		
		            // ダウンロード用リンクを生成
		            const downloadLink = document.createElement('a');
		            downloadLink.href = url;
		            downloadLink.download = 'resume.pdf'; // ファイル名に合わせて調整
		
		            // リンクをクリックしてダウンロードを開始し、リンクを削除
		            document.body.appendChild(downloadLink);
		            downloadLink.click();
		            document.body.removeChild(downloadLink);
		        });
		});