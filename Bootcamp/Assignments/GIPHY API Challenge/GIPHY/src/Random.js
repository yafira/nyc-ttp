// import React from 'react';

// function Random(props) {
//   fetch(`http://api.giphy.com/v1/gifs/random?api_key=${props.giphykey}`)
//     .then(res => res.json())
//     .then(
//       (result) => {
//         var total = ``
//         result.data.map(item => (
//           total += `
//           <div class = "item">
//             <img src="${item.images.downsized_large.url}">
//           </div>
//             `
//         ))
//         document.querySelector(".output").innerHTML = total;
//       },
//       (error) => console.log(error)
//     )
//     return <p>Search cannot be found.</p>;
// }

// export default Random;
