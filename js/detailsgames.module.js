

import {ui} from "./ui.module.js"

export class detailsgames
{
    constructor(id)
    {
        this.ui = new ui();
        this.detailsdata(id);
    }


    async detailsdata(id)
    {
        const options = {
            method: "GET",
            headers: {
               "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
               "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
         };


          let dat = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
          let data = await dat.json();
          this.ui.showdetails(data)
    }
}