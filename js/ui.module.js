
export class ui
{
    

   show(data) {

           let container = ``;
           
           for(let i =0; i<data.length;i++){

            container += `  <div class="card  col-md-3 my-5 offset-md-1" data-id ="${data[i].id}">
            <div class="cardimg col-md-12 text-center"><img  src="${data[i].thumbnail
                }" ></div>
            <div class="cardname d-flex justify-content-between col-md-12">
                <p>${data[i].title}</p>
                <p class=" free px-1 rounded">free</p>
            </div>
            <div class="cardinfo col-md-12 text-center"><p>${data[i].short_description}</p></div>
            <div class="cardtype d-flex justify-content-between col-md-12 card-footer small hstack">
                <p>${data[i].genre}</p>
                <p class="  rounded">${data[i].platform}</p>
            </div>

        </div>`

           }

           document.querySelector(".allcards").innerHTML = container;
        

        }

        showdetails(data){

            const content = `
      <div class="col-md-4">
      <img src="${data.thumbnail}" class="w-100" alt="image details" />
   </div>
   <div class="col-md-8 px-3 secoundhalf">
      <h3>Title: ${data.title}</h3>
      <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
      <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
      <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
      <p class="small">${data.description}</p>
      <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
   </div>
      
      `;

      document.querySelector(".details").innerHTML = content;
            }
        }

