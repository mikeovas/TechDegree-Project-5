//code to run the lightbox
window.addEventListener('load', function () {
  baguetteBox.run('.gallery');
});




// Find user text input, store as variable and log to console.
function searchInput() {

  const userInput = document.getElementById('search');
  const keyInput = userInput.value.toLowerCase();
  console.log(keyInput);

 
  // Loop thru data captions for each picture
  const prefix = 'photo';
  for (i = 1; i <= 12; i++) {

  // Store as a variable and log to the console.    
    const dataCaptions = document.getElementById('photo' + i);
    const captions = dataCaptions.getAttribute("data-caption").toLowerCase();
    console.log(captions);

  // Loop thru data captions and filter out what not needed
    const contained = captions.includes(keyInput);
    console.log(contained);
    
    // display correct images
    const images = document.getElementsByTagName('img');
    // console.log(images[i]);

    if (!contained) {
      dataCaptions.style.display = "none"; 
    } else {
      dataCaptions.style.display = "block";  
    }

    
  }



};



  








