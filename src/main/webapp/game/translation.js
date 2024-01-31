/** Translation logic using Azure Translator Text API*/

// translation.js

// Function to change language and update other pages
async function changeLanguage(targetLanguage) {
    // Change language for about.html
    await translateAndSetLanguage(aboutPageId, targetLanguage);

    // Change language for projects.html
    await translateAndSetLanguage(projectsPageId, targetLanguage);

    // Change language for contact.html
    await translateAndSetLanguage(contactPageId, targetLanguage);

    // Show notification with language-specific message
    alert('調査報告書の記事を「' + targetLanguage + '」に言語設定を変更しました！目次に戻り、翻訳された記事を読んでみましょう。');

    // Update button visibility based on the selected language
    updateButtonVisibility(targetLanguage);

    // back to top.html
    window.location.href = '../top.html';
}

// Function to update button visibility based on the selected language
function updateButtonVisibility(targetLanguage) {
    // Show buttons based on selected language
    if (targetLanguage === 'ja') {
        document.getElementById("japaneseBtn").style.display = "block";
        document.getElementById("koreanBtn").style.display = "none";
        document.getElementById("tagalogBtn").style.display = "none";
        document.getElementById("ausEnglishBtn").style.display = "none";
    } else if (targetLanguage === 'ko') {
        document.getElementById("japaneseBtn").style.display = "block";
        document.getElementById("koreanBtn").style.display = "block";
        document.getElementById("tagalogBtn").style.display = "none";
        document.getElementById("ausEnglishBtn").style.display = "none";
    } else if (targetLanguage === 'fil') {
        // Adjust visibility based on 'fil' or any other language
        // ...
    } else if (targetLanguage === 'en') {
        // Adjust visibility based on 'en' or any other language
        // ...
    }
    // You can add more conditions based on the supported languages
}

/* Translator Text API key (Note: Keep this secure, do not expose on the client side) */
const apiKey = '63be0d5d349349fda722700038a6a5bc';
const endpoint = 'https://api.cognitive.microsofttranslator.com/';

/* IDs for about.html, projects.html, and contact.html */
const aboutPageId = 'aboutPage';
const projectsPageId = 'projectsPage';
const contactPageId = 'contactPage';

/* Function to change language and update other pages */
async function changeLanguage(targetLanguage) {
    /* Change language for about.html */
    await translateAndSetLanguage(aboutPageId, targetLanguage);

    /* Change language for projects.html */
    await translateAndSetLanguage(projectsPageId, targetLanguage);

    /**Change language for contact.html */
    await translateAndSetLanguage(contactPageId, targetLanguage);

    /* Show notification with language-specific message */
    alert('調査報告書の記事を「' + targetLanguage + '」に言語設定を変更しました！目次に戻り、翻訳された記事を読んでみましょう。');

    /* Back to top.html */
    window.location.href = '../top.html';
}

/* Function to translate and set language for a specific page */
async function translateAndSetLanguage(pageId, targetLanguage) {
    const pageElement = document.getElementById(pageId);

    if (pageElement) {
        const originalText = pageElement.innerText;

        /* Call Microsoft Translator Text API to get translated text */
        const translatedText = await translateText(originalText, targetLanguage);

        /* Update the page content with translated text */
        pageElement.innerText = translatedText;
    }
}

/* Function to call Microsoft Translator Text API */
async function translateText(text, targetLanguage) {
    const apiUrl = `${endpoint}/translate?api-version=3.0&to=${targetLanguage}`;
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': apiKey,
            },
            body: JSON.stringify([{ text }]),
        });

        if (!response.ok) {
            throw new Error(`Translation request failed with status: ${response.status}`);
        }

        const data = await response.json();
        return data[0].translations[0].text;
    } catch (error) {
        console.error('Translation error:', error);
        throw error; // Rethrow the error to handle it at a higher level if necessary
    }
}
