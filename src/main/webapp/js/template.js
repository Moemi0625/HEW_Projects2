 // Fetch the header content and inject it into the template
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            const template = document.getElementById('header-template');
            template.innerHTML = html;

            // Include the header content in the document
            document.body.prepend(template.content.cloneNode(true));
        });