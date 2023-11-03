///===============CRUD==================


// text/html: MIME-тип для HTML-документів.
// application/json: MIME-тип для JSON-даних.
// image/jpeg: MIME-тип для JPEG-зображень.
// audio/mp3: MIME-тип для аудіофайлів у форматі MP3.
//===============POST==================
const post = {
    title: 'Group 91',
      body: 'Test group 91',
      userId: 111,
}



function servicCreatrPost(post){
const options = {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
    "Content-type": "application/json" //  
}
}
  fetch("https://jsonplaceholder.typicode.com/posts", options);

}
servicCreatrPost(post)


// ======================GET - READ ================== \\

// const options ={
//     method: "GET",
//     headers:{
//         "Content-type" : "application/json"
//     }
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1',
// options)

// ******************** PATCH - UPDATE ******************** \\
// const post = {
//   title: "Group 91",
// };

// function servicePatchUpdatePost(post) {
//   const options = {
//     method: "PATCH",
//     body: JSON.stringify(post),
//     headers: {
//         "Content-type": "application/json"
//     },
//   };
//   fetch("https://jsonplaceholder.typicode.com/posts/1", options);
// }

// servicePatchUpdatePost(post);

// ====================== PUT - UPDATE =================

// function servicePutUpdatePost(post) {
//   const options = {
//     method: "PUT",
//     body: JSON.stringify(post),
//     headers: {
//       "Content-type": "application/json",
//     },
//   };
//   fetch("https://jsonplaceholder.typicode.com/posts/1", options);
// }
// servicePutUpdatePost(post);

// ====================== DELETE ====================== \\

// const options = {
//     method: 'DELETE'
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1',options)
