 document.addEventListener('DOMContentLoaded', function() {
      var imageContainer = document.body;
      var currentBackground = 1;

      document.getElementById('imageButton').addEventListener('click', function() {
        currentBackground = (currentBackground % 7) + 1; // Cycle through backgrounds 1 to 5
        imageContainer.style.background = `url('./images/background${currentBackground}.jpg') no-repeat center center fixed`;
        imageContainer.style.backgroundSize = 'cover';
      });
    });