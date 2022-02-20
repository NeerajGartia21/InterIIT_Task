
async function getTotalPage() {
  const response = await fetch(
    'https://interiit-task-backend.herokuapp.com/getTotalVideos'
  );
  return response;
}

for(let i=0;i<getTotalPage()/20+1;i++){
  document.getElementById('page').innerHTML+=`
  <button onclick="setPage(this)" id="${i+1}">${i+1}</button>
  `
}

function setPage(e){
  page=1;
  for(let i=0;i<getVideos(page);i++){
    document.getElementById('container').innerHTML+=`
          <div>
              <iframe width="400" height="300" src="https://www.youtube.com/embed/${getVideos()[i].videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <h1>${getVideos()[i].title}</h1>
              <p>${getVideos()[i].description}</p>
          </div>
    `;
  }
}

async function getVideos(page){
  const response = await fetch(
    `https://interiit-task-backend.herokuapp.com/getTotalVideos?page=${page}`
  );
  return response;
}

setPage(1);
