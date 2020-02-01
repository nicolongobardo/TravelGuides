import { Injectable } from '@angular/core';
import { itemsRome, itemsParigi, itemsLondra, itemsMadrid, infoRome, infoParigi, infoLondra, infoMadrid, details } from 'app/helper/data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getCitiesMonuments(city){
    if(city == "Roma"){
      return itemsRome;
    } else if(city == "Parigi"){
      return itemsParigi;
    } else if(city == "Londra"){
      return itemsLondra;
    } else if(city == "Madrid"){
      return itemsMadrid;
    }
  }

  getCityInformations(city){
    if(city == "Roma"){
      return infoRome;
    } else if(city == "Parigi"){
      return infoParigi;
    } else if(city == "Londra"){
      return infoLondra;
    } else if(city == "Madrid"){
      return infoMadrid;
    }
  }

  getDetails(id){
    console.log(id)
    return details.find(x => x.id == id);
  }
}
