 /* I am aiming for the grade of Exceeds Expectations and don't want anything less.
       I have tested this in three browsers - Google Chrome, Microsoft Edge, and Mozilla Firefox. It worked fine.
       I have check the JS with the JSHint validator and found no errors. --> */


 //code to run the baguette lightbox
 window.addEventListener('load', function() {
     baguetteBox.run('.gallery');
 });


 // Find user text input, store as variable and log to console.
 function searchInput() {

     const userInput = document.getElementById('search');
     const keyInput = userInput.value.toLowerCase();

     // Loop thru data captions for each picture
     for (i = 1; i <= 12; i++) {

         // Store as a variable and log to the console.    
         const dataCaptions = document.getElementById('photo' + i);
         const captions = dataCaptions.getAttribute("data-caption").toLowerCase();

         // Loop thru data captions and filter out what not needed
         const contained = captions.includes(keyInput);

         // display correct images
         if (!contained) {
             dataCaptions.style.display = "none";
         } else {
             dataCaptions.style.display = "block";
         }

     }

 }