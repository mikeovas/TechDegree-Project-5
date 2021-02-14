window.addEventListener('load', function () {
  baguetteBox.run('.gallery');
});



// Find user text input, store as variable and log to console.
function searchInput() {
  const userInput = document.getElementById('search');
  const keyInput = userInput.value.toLowerCase();
  console.log(keyInput);
}

const str = searchInput();

// Loop thru data captions for each picture
// Store as a variable and log to the console.

const prefix = 'photo';
for (i = 1; i <= 12; i++) {

  const dataCaptions = document.getElementById('photo' + i);
  const captions = dataCaptions.getAttribute("data-caption").toLowerCase();
  console.log(captions);

  // Loop thru data captions and filter out what not needed
  const contained = captions.includes(str);
  console.log(contained);
  console.log(str);  // str is undefined...not getting an input in time for a comparison????

  if (contained) {
    console.log('input is found in the caption');
  } else {
    console.log('input is not found in the caption');
  }


};



  // let images = document.getElementsByTagName('img');


  //     console.log(images);
  //     console.log(dataCaption);






