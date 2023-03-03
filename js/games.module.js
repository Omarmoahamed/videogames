
import {ui} from "./ui.module.js";
import {detailsgames} from "./detailsgames.module.js";
export class game
{


    constructor()
    {
         this.findgames("mmorpg");
         let type = document.querySelectorAll(".categ-list p")
         for(let i =0; i<type.length; i++ )
         {
            type[i].addEventListener("click", (e) => {this.findgames(e.target.dataset.category)})
         }
    
        this.ui = new ui();


    }


    

    async findgames(category)
    {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '358b95653emsh46a1676d77247acp1f4c9bjsn319d4d2875e1',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        var api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        var data =  await api.json();
       
        this.ui.show(data);
        this.detailsclick()

    }


    detailsclick(){
        document.querySelectorAll(".card").forEach((e) => {

            e.addEventListener("click", () => {
             
               const id = e.dataset.id;
               this.showdetails(id);

            })
        })
    }

    showdetails(id){

        this.detailsgames = new detailsgames(id);
        document.querySelector(".page").classList.add("d-none");
        document.querySelector(".detailspage").classList.remove("d-none");
        document.querySelector(".cancel").addEventListener("click", () => {

            document.querySelector(".page").classList.remove("d-none");
            document.querySelector(".detailspage").classList.add("d-none");
        })
    }

}