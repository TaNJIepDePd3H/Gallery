function upDate(previewPic) {
    // Get the main image div
    var mainImage = document.getElementById('image');
    
    // Change the background image and text of the div
    mainImage.style.backgroundImage = "url('" + previewPic.src + "')";
    mainImage.innerHTML = previewPic.alt;
}

function unDo() {
    // Get the main image div
    var mainImage = document.getElementById('image');
    
    // Reset the background image and text
    mainImage.style.backgroundImage = "none";
    mainImage.innerHTML = "Hover over an image below to display here.";
}
