window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });




// loops through the data captions for each picture. Store as a variable and log to the console.
  const prefix = 'photo';
  for(i=1; i<=12; i++) {

  //Find user text input, store as variable and log to console.
    function searchInput() {
        const userInput = document.getElementById('search');
        const keyInput = userInput.value.toLowerCase(); 
        console.log(keyInput);
    };

    const dataCaptions = document.getElementById('photo' + i);
    const captions = dataCaptions.getAttribute("data-caption").toLowerCase();
    console.log(captions);

    

   
      
  }
  

// }

// saveTextAsFile();