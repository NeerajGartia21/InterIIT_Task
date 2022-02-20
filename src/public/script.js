
  fetch(`http://localhost:4000/getTotalVideos`).then(response => response.json()).then(data => { 
    for(let i=0;i<data.data.length/20;i++){
      document.getElementById('page').innerHTML+=`
      <button onclick="setPage(this)" id="${i+2}">${i+2}</button>
      `
    }
   })

async function setPage(e){
  
fetch(`http://localhost:4000/getVideos?page=${e.id}`).then(response => response.json()).then(data => {
  document.getElementById('container').innerHTML='';
  for(let i=0;i<10;i++){
    document.getElementById('container').innerHTML+=`
          <div>
          <h1>${data.data.videos[i].title}</h1>
          <p>${data.data.videos[i].description}</p>
              <iframe width="600" height="400" src="https://www.youtube.com/embed/${data.data.videos[i].videoId}"></iframe>
             
          </div>
    `;
  }
})
 
}

document.getElementById("1").click();
