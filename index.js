document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function () {
        // Save the current main image 
        const currentMainImageSrc = mainImage.src;
  
        // Set the clicked thumbnail as the new main image
        mainImage.src = this.src;
  
        // Set the previous main image as a thumbnail
        this.src = currentMainImageSrc;
      });
    });
  });