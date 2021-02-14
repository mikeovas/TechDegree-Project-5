window.addEventListener('load', function () {
  baguetteBox.run('.gallery');
});

// //html template  to replace ind pieces of full list of pics
// const template = '<a href="{link}" id="{id}" data-caption="{captions}"> <img src="{tlink}" alt="{description}" > </a>';





// //database array of objects

// // const database =
// // [
// //   {
// //        'imgSrc': 'whatever',
// //        'imgLink': 'whatever'
// //   },
// //  {
// //        'imgSrc': 'whatever',
// //        'imgLink': 'whatever'
// //   },
// //   {
// //        'imgSrc': 'whatever',
// //        'imgLink': 'whatever'
// //   },
// // ]


// // searchInput() or display all


// //Find user text input, store as variable and log to console.
// //loop thru database
// function searchInput() {
//   const userInput = document.getElementById('search');
//   const keyInput = userInput.value.toLowerCase();
//   console.log(keyInput);




//   // loops through the data captions for each picture. Store as a variable and log to the console.
//   const prefix = 'photo';
//   for (i = 1; i <= database.length; i++) {

//     //loop thru database
//     //every image that matches take template and replace things with correct values from datatbase

//     //loop thru database
//     //every image that matches take template and replace things with correct values from datatbase

//     // compare input to captions

//     const contained = captions.includes(str);
//     console.log(contained);



//     // compare input to captions

//     const contained = captions.includes(str);
//     console.log(contained);
//     console.log(database[i]);


//     // if contained, clear the gallery and append matching items

//     //Get data captions from the pictures and store as variable
//     const dataCaptions = document.getElementById('photo' + i);
//     const captions = dataCaptions.getAttribute("data-caption").toLowerCase();
//     console.log(captions);



//   }

// };


// // if keyup() is blank show all of them












//     // let images = document.getElementsByTagName('img');
//     // console.log(images);



// // }

// // saveTextAsFile();